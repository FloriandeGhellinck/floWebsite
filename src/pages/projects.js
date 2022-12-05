import FooterSection from '../components/footerSection/footer';
import Image from 'next/image';
import Navbar from '../components/navbar_main_page';

const Projects = () => {
  return (
    <>
      <Navbar>
        <main>
          <div className='h-screen w-screen p-5 '>
            <div className='opacity-100 h-full w-full'>
              <Image
                src='/photo-1497215842964-222b430dc094.png'
                className='object-cover'
                alt='Developer Picture'
                layout='fill'
              />
              <div className='bg-transparent h-full w-full p-5 relative border-8 border-white grid grid-cols-12 grid-rows-6'>
                <div className='absolute w-full top-0h-screen wrapper col-start-5 md:col-start-7 row-start-2  leading-none'>
                  <h1 className='relative font-poppins font-extrabold md:text-4xl lg:text-6xl text-3xl text-gray-800 '>
                    <span>NO PROJECTS YET </span> <br />
                    <span> HIRE ME</span> <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600'>
                      {' '}
                      TO GET SOME
                    </span>
                  </h1>
                </div>
              </div>
              {/* <div className='bg-white p-5 w-full h-full'></div> */}
            </div>
          </div>
          <div className='bg-black h-screen w-screen'></div>
        </main>
        <footer>
          <FooterSection />
        </footer>
      </Navbar>
    </>
  );
};

export default Projects;
