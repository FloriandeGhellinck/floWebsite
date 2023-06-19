import { Fragment, SetStateAction, FC, Dispatch } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { send } from "emailjs-com";
import Button from "../button";
import { useForm } from "react-hook-form";

const ContactMeModal: FC<{ openModal: boolean; setOpenModal: Dispatch<SetStateAction<boolean>> }> = ({ openModal, setOpenModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = () => {
    const resultsTosend = {
      firstname: watch("firstName"),
      lastname: watch("lastName"),
      phone: watch("phone"),
      email: watch("email"),
      message: watch("message"),
    };
    reset(() => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    }));
    send(
      process.env.NEXT_PUBLIC_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      resultsTosend,
      process.env.NEXT_PUBLIC_API_KEY
    ).catch((err) => {
      console.error(err);
    });
  };

  const setCloseModal = () => {
    setOpenModal(false);
  };

  const isButtonActive = isValid;

  return (
    <>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0">
                      <Dialog.Title as="h3" className="text-lg leading-6 text-gray-900 dark:text-white content-center font-extrabold mb-5">
                        Contact Me
                      </Dialog.Title>
                      {/* <form> */}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="gap-3 text-center sm:grid sm:grid-cols-2 flex flex-col">
                          <div>
                            <input
                              {...register("firstName", {
                                required: "Firstname required",
                              })}
                              placeholder="First name"
                              className="border-2 w-full pl-1 "
                            />
                            <p className="text-left text-red-500">{errors.firstName?.message as String}</p>
                          </div>
                          <div>
                            <input
                              {...register("lastName", {
                                required: "Lastname required",
                              })}
                              placeholder="Last name"
                              className="border-2 w-full pl-1 "
                            />
                            <p className="text-left text-red-500">{errors.lastName?.message as String}</p>
                          </div>
                          <div>
                            <input
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  message: " Wrong pattern",
                                },
                              })}
                              placeholder="Email"
                              className="border-2 w-full pl-1 "
                            />
                            <p className="text-left text-red-500">{errors.email?.message as String}</p>
                          </div>
                          <div>
                            <input
                              {...register("phone", {
                                required: false,
                              })}
                              placeholder="Phone"
                              className="border-2 w-full pl-1"
                            />
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <textarea
                            {...register("message", {
                              required: "This field is required",
                            })}
                            placeholder="Message"
                            className="border-2 w-full pl-1 h-20 col-span-2"
                          />
                          <p className="text-left text-red-500">{errors.message?.message as String}</p>
                        </div>
                        <div className="mt-3">
                          {
                            <Button
                              className={`${isButtonActive ? " bg-blue-300" : "bg-gray-50"} ${isSubmitSuccessful ? "hidden" : ""}`}
                              disabled={!isButtonActive}
                            >
                              Submit
                            </Button>
                          }
                          {isSubmitSuccessful && <p className="text-green-700">Thanks for your message</p>}
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ContactMeModal;
