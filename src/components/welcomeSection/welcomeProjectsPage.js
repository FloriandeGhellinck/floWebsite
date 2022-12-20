import Image from 'next/image';
import ContactMeModal from '../contactMeSection/contactMeModal';

const ProjectsHomePage = () => {
  return (
    <>
      <div className='h-screen w-screen p-5 '>
        <div className='opacity-100 h-full w-full'>
          <Image
            src='/WelcomePic.png'
            className='object-cover'
            alt='Developer Picture'
            layout='fill'
          />
          <div className='bg-transparent h-full w-full p-5 relative border-8 border-white grid grid-cols-12 grid-rows-6'>
            <div className='absolute w-full top-0h-screen wrapper col-start-3 sm:col-start-5 md:col-start-7 row-start-2 leading-none'>
              <h1 className='relative font-poppins font-extrabold md:text-4xl lg:text-6xl text-4xl  '>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600 md:text-4xl lg:text-6xl text-4xl'>
                  {' '}
                  PROJECTS
                </span>
              </h1>
            </div>
          </div>
          {/* <div className='bg-white p-5 w-full h-full'></div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectsHomePage;
