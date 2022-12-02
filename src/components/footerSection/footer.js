import { GithubSVG } from '../../assets/svg/github';
import { LinkedinSVG } from '../../assets/svg/linkedin';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <div>
      <div className='w-full font-poppins text-black dark:text-white'>
        <div className='mx-5 my-2 flex justify-between'>
          <div className=''>
            <p className='text-sm'>
              {' '}
              ©2022 All rights reserved. Website made by{' '}
              <span className='font-bold'>Florian de Ghellinck</span>
            </p>
          </div>
          <div className='flex gap-3 items-center'>
            <Link href='https://github.com/FloriandeGhellinck' target='_blank'>
              <GithubSVG />
            </Link>
            <Link
              href='https://www.linkedin.com/in/florian-de-ghellinck-4592b610a/'
              target='_blank'
            >
              <LinkedinSVG />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
