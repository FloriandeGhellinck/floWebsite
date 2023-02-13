import { React, Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { send } from 'emailjs-com';
import Button from '../button';
import { useForm } from 'react-hook-form';

const ContactMeModal = ({ openModal, setOpenModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = () => {
    const resultsTosend = {
      firstname: watch('firstName'),
      lastname: watch('lastName'),
      phone: watch('phone'),
      email: watch('email'),
      message: watch('message'),
    };
    reset(() => ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }));
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
  };

  const setCloseModal = () => {
    setOpenModal(false);
  };

  const isButtonEnabled = !isValid;

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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='gap-3 text-center sm:grid sm:grid-cols-2 flex flex-col'>
                          <div>
                            <input
                              {...register('firstName', {
                                required: 'Firstname required',
                              })}
                              placeholder='First name'
                              className='border-2 w-full '
                            />
                            <p className='text-left text-red-500'>
                              {errors.firstName?.message}
                            </p>
                          </div>
                          <div>
                            <input
                              {...register('lastName', {
                                required: 'Lastname required',
                              })}
                              placeholder='Last name'
                              className='border-2 w-full '
                            />
                            <p className='text-left text-red-500'>
                              {errors.lastName?.message}
                            </p>
                          </div>
                          <div>
                            <input
                              {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  message: ' Wrong pattern',
                                },
                              })}
                              placeholder='Email'
                              className='border-2 w-full '
                            />
                            <p className='text-left text-red-500'>
                              {errors.email?.message}
                            </p>
                          </div>
                          <div>
                            <input
                              {...register('phone', {
                                required: false,
                              })}
                              placeholder='Phone'
                              className='border-2 w-full'
                            />
                          </div>
                        </div>
                        <div className='w-full mt-3'>
                          <textarea
                            {...register('message', {
                              required: 'This field is required',
                            })}
                            placeholder='Message'
                            className='border-2 w-full h-20 col-span-2'
                          />
                          <p className='text-left text-red-500'>
                            {errors.message?.message}
                          </p>
                        </div>
                        <div className='mt-3'>
                          {
                            <Button
                              className={`${
                                isButtonEnabled ? 'bg-gray-50' : 'bg-blue-300'
                              } ${isSubmitSuccessful ? 'hidden' : ''}`}
                              disabled={isButtonEnabled}
                            >
                              Submit
                            </Button>
                          }
                          {isSubmitSuccessful && (
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

export default ContactMeModal;

/*
<form onSubmit={handleSubmit(onSubmit())}>
  <div className='gap-3 text-center sm:grid sm:grid-cols-2 flex flex-col'>
    <div className=''>
      <label htmlFor='lastName'>
        Firstname<span className='text-red-500'>*</span>
      </label>
      <input
        {...register('firstname')}
        autoComplete='on'
        id='firstName'
        type='text'
        className='border-2 w-full pl-2'
        placeholder='First Name'

        //   value={toSend.from_firstname}
      />

    </div>
    <div>
      <label htmlFor='lastName'>
        Lastname<span className='text-red-500'>*</span>
      </label>
      <input
        {...register('lastname')}
        autoComplete='on'
        id='lastName'
        type='text'
        className='border-2 w-full ml-2'

        //   value={toSend.from_lastname}
      />
      {/* {error.lastName && <RequiredField />} */
/*</div>
    <div>
      <label htmlFor='phone'>Phone</label>
      <input
        {...register('phone')}
        autoComplete='on'
        id='phone'
        type='tel'
        className='border-2 w-full'
        //   value={toSend.phone}
      />
    </div>
    <div>
      <label htmlFor='email'>
        Email<span className='text-red-500'>*</span>
      </label>
      <input
        autoComplete='on'
        name='email'
        id='email'
        type='email'
        className='border-2 w-full'
        //   value={toSend.email}
      />
      {/* {error.email && <RequiredField />} */
/* </div>
  </div>
  <div className='mt-3'>
    <label htmlFor='message'>
      Message<span className='text-red-500'>*</span>
    </label>
    <textarea
      name='message'
      id='message'
      type='text'
      className='border-2 w-full h-20'
      // value={toSend.from_message}
    />
    {/* {error.message && <RequiredField />} */
/*</div>
  {/* <div className='mt-3'>
  {!formSubmitSuccesfull && (
    <Button className='bg-blue-300'>Submit</Button>
  )}
  {formSubmitSuccesfull && (
    <p className='text-green-700'>
      Thanks for your message
    </p>
  )}
</div> */
/*<div>
    {' '}
    <input type='submit' />
  </div>
</form>

*/
