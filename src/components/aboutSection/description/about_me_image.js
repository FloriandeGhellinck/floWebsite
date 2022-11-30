import Image from 'next/image';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AboutMeImage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className='flex justify-center my-5 aos-init aos-animate'
      data-aos='fade-up'
    >
      <Image
        src='/Identité.jpeg'
        width={200}
        height={100}
        alt='Profile Picture'
        className='rounded-lg'
        //   layout='fill'
      />
    </div>
  );
};
export default AboutMeImage;
