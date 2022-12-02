import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const ContactMeModal = ({ openModal, setOpenModal }) => {
  // const [firstName, setFirstname] = useState('');
  // const [lastName, setLastname] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const [firstNameError, setFirstnameError] = useState('');
  // const [lastNameError, setLastnameError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [messageError, setMessageError] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (firstName === '') {
  //     setFirstnameError('Please provide your firstname');
  //   }
  //   if (lastName === '') {
  //     setLastnameError('Please provide your lastname');
  //   }
  //   if (email === '') {
  //     setEmailError('Please enter a valid email');
  //   }
  //   if (message === '') {
  //     setMessageError('Please enter a message');
  //   }
  //   if (firstName && lastName && email && message) {
  //     const blog = { firstName, lastName, phone, email, message };

  //     console.log(blog);
  //   }

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, message } = e.target;
    console.log(
      firstName.value,
      lastName.value,
      phone.value,
      email.value,
      message.value
    );

    setError({
      firstName: !firstName.value,
      lastName: !lastName.value,
      email: !email.value,
      message: !message.value,
    });

    if (firstName && lastName && email && message) {
      const blog = { firstName, lastName, phone, email, message };

      console.log(blog);
    }

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
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setOpenModal(false)}
        >
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
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <div className='sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 text-gray-900 content-center font-extrabold mb-5'
                      >
                        Contact Me
                      </Dialog.Title>
                      {/* <form> */}
                      <form onSubmit={handleSubmit}>
                        <div className='gap-3 text-center sm:grid sm:grid-cols-2 flex flex-col'>
                          <div className=''>
                            <label htmlFor='firstName' className=''>
                              Firstname<span className='text-red-500'>*</span>
                            </label>
                            <input
                              id='firstName'
                              type='text'
                              className='border-2 w-full'
                            />
                            {error.firstName && <RequiredField />}
                          </div>
                          <div>
                            <label htmlFor='lastName'>
                              Lastname<span className='text-red-500'>*</span>
                            </label>
                            <input
                              id='lastName'
                              type='text'
                              className='border-2 w-full'
                            />
                            {error.lastName && <RequiredField />}
                          </div>
                          <div>
                            <label htmlFor='phone'>Phone</label>
                            <input
                              id='phone'
                              type='tel'
                              className='border-2 w-full'
                            />
                          </div>
                          <div>
                            <label htmlFor='email'>
                              Email<span className='text-red-500'>*</span>
                            </label>
                            <input
                              id='email'
                              type='email'
                              className='border-2 w-full'
                            />
                            {error.email && <RequiredField />}
                          </div>
                        </div>
                        <div className='mt-3'>
                          <label htmlFor='message'>
                            Message<span className='text-red-500'>*</span>
                          </label>
                          <textarea
                            id='message'
                            type='text'
                            className='border-2 w-full h-20'
                          />
                          {error.message && <RequiredField />}
                        </div>
                        <div className='mt-3'>
                          <button
                            type='submit'
                            className='mt-6 inline-flex w-full justify-center rounded-md border border-gray-300 bg-blue-300 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500  sm:mt-0 sm:w-auto sm:text-sm'
                          >
                            Submit
                          </button>
                        </div>
                      </form>

                      {/*                     
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed from our servers
                        forever. This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                    // onClick={handleContactFormModal}
                  >
                    Deactivate
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button> */}
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
