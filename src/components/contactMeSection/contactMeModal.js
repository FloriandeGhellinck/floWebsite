import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { send } from 'emailjs-com';
import Button from '../button';

const errorInit = {
  firstName: false,
  lastName: false,
  email: false,
  message: false,
};

const ContactMeModal = ({ openModal, setOpenModal }) => {
  const [error, setError] = useState(errorInit);

  const [formSubmitSuccesfull, setFormSubmitSuccesfull] = useState(false);

  const setCloseModal = () => {
    setOpenModal(false);
    setError(errorInit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, message } = e.target;

    if (!firstName.value || !lastName.value || !email.value || !message.value) {
      setError({
        firstName: !firstName.value,
        lastName: !lastName.value,
        email: !email.value,
        message: !message.value,
      });

      return;
    }

    setError(errorInit);
    const resultsTosend = {
      from_firstname: firstName.value,
      from_lastname: lastName.value,
      from_phone: phone.value,
      from_email: email.value,
      from_message: message.value,
    };

    send(
      'service_rscfymr',
      'template_yku03a4',
      resultsTosend,
      'FgfF6x1YhcrgKsd7W'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    firstName.value = '';
    lastName.value = '';
    phone.value = '';
    email.value = '';
    message.value = '';
    setFormSubmitSuccesfull(true);

    setTimeout(() => {
      setOpenModal(false);
      setFormSubmitSuccesfull(false);
    }, 3000);

    //   fetch('http://localhost:3000/blogs', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(blog),
    //   }).then(() => {
    //     console.log('New blog added');
    //   });
  };
  return (
    <>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setCloseModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <div className='sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 text-gray-900 dark:text-white content-center font-extrabold mb-5'
                      >
                        Contact Me
                      </Dialog.Title>
                      {/* <form> */}
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='gap-3 text-center sm:grid sm:grid-cols-2 flex flex-col'>
                          <div className=''>
                            <label htmlFor='firstName' className=''>
                              Firstname<span className='text-red-500'>*</span>
                            </label>
                            <input
                              autoComplete='on'
                              name='from_firstname'
                              id='firstName'
                              type='text'
                              className='border-2 w-full'
                              //   value={toSend.from_firstname}
                            />
                            {error.firstName && <RequiredField />}
                          </div>
                          <div>
                            <label htmlFor='lastName'>
                              Lastname<span className='text-red-500'>*</span>
                            </label>
                            <input
                              autoComplete='on'
                              name='from_lastname'
                              id='lastName'
                              type='text'
                              className='border-2 w-full'
                              //   value={toSend.from_lastname}
                            />
                            {error.lastName && <RequiredField />}
                          </div>
                          <div>
                            <label htmlFor='phone'>Phone</label>
                            <input
                              autoComplete='on'
                              name='from_phone'
                              id='phone'
                              type='tel'
                              className='border-2 w-full'
                              //   value={toSend.from_phone}
                            />
                          </div>
                          <div>
                            <label htmlFor='email'>
                              Email<span className='text-red-500'>*</span>
                            </label>
                            <input
                              autoComplete='on'
                              name='from_email'
                              id='email'
                              type='email'
                              className='border-2 w-full'
                              //   value={toSend.from_email}
                            />
                            {error.email && <RequiredField />}
                          </div>
                        </div>
                        <div className='mt-3'>
                          <label htmlFor='message'>
                            Message<span className='text-red-500'>*</span>
                          </label>
                          <textarea
                            name='from_message'
                            id='message'
                            type='text'
                            className='border-2 w-full h-20'
                            // value={toSend.from_message}
                          />
                          {error.message && <RequiredField />}
                        </div>
                        <div className='mt-3'>
                          {!formSubmitSuccesfull && (
                            <Button className='bg-blue-300'>Submit</Button>
                          )}
                          {formSubmitSuccesfull && (
                            <p className='text-green-700'>
                              Thanks for your message
                            </p>
                          )}
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

const RequiredField = () => {
  return <p className='text-left text-red-500 text-sm'>Required field</p>;
};

export default ContactMeModal;
