import Image from 'next/image';

const AboutMeImage = () => {
  return (
    <>
      {/* <div className='flex justify-center px-5 py-3'> */}
      <div className='flex justify-center my-5 '>
        <Image
          src='/Identité.jpeg'
          width={200}
          height={100}
          alt='Profile Picture'
          className='rounded-lg'
          //   layout='fill'
        />
      </div>
    </>
  );
};
export default AboutMeImage;
