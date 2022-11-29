import Image from 'next/image';

const WelcomePage = () => {
  return (
    <>
      <div className='w-screen h-screen relative grid grid-cols-12 grid-rows-6'>
        <div className='opacity-40'>
          <Image
            src='/photo-1497215842964-222b430dc094.png'
            // src='https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80%27'
            // width='600'
            // height='600'
            alt='Developer Picture'
            layout='fill'
          />
        </div>
        <div className='absolute w-full top-0h-screen wrapper col-start-6 row-start-2 ml-3 leading-none'>
          <h1 className='relative font-mono font-extrabold text-7xl'>
            <span>HI, I'M FLORIAN </span> <br />
            <span> A FULL STACK</span> <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-600'>
              {' '}
              DEVELOPER
            </span>
          </h1>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default WelcomePage;
