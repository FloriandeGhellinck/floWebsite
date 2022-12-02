import Image from 'next/image';
import { motion, useDragControls } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import ContactMeModal from '../contactMeSection/contactMeModal';
import { useEffect, useState } from 'react';

const WelcomePage = ({ openModal, setOpenModal }) => {
  return (
    <>
      <div className='w-screen h-screen relative grid grid-cols-12 grid-rows-6'>
        <div className='opacity-40 '>
          <Image
            src='/photo-1497215842964-222b430dc094.png'
            className='object-cover'
            alt='Developer Picture'
            layout='fill'
          />
        </div>
        <motion.div
          drag
          dragConstraints={{
            top: -20,
            left: -20,
            right: 20,
            bottom: 20,
          }}
          className='absolute w-full top-0h-screen wrapper col-start-4 md:col-start-6 row-start-2  leading-none'
        >
          <h1 className='relative font-poppins font-extrabold md:text-7xl text-4xl dark:text-white text-black'>
            <span>HI, I'M FLORIAN </span> <br />
            <span> A FULL STACK</span> <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600'>
              {' '}
              DEVELOPER
            </span>
          </h1>
        </motion.div>
        <ContactMeModal openModal={openModal} setOpenModal={setOpenModal} />
        <div className='absolute flex z-20'>
          <ButtonHandleTheme />
        </div>
      </div>
    </>
  );
};

const ButtonHandleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <button className='rounded-full' onClick={handleTheme}>
      {theme === 'light' ? (
        <MoonIcon className='h-10 w-10 stroke-black' />
      ) : (
        <SunIcon className='h-10 w-10 stroke-white' />
      )}
    </button>
  );
};

export default WelcomePage;