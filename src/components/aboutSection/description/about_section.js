import SkillsSection from '../myskills/myskills';
import AboutmeTitle from '../aboutSectionTitle';
import AboutMe from './about_me';

import AboutMeImage from './about_me_image';

const About = ({ aboutMeSectionRef, setOpenModal }) => {
  return (
    <div
      className='flex flex-col md:flex-row m-2 gap-1'
      ref={aboutMeSectionRef}
    >
      <div className='w-full md:w-1/2 bg-white border-2 px-3 pt-3 flex flex-col'>
        {/* <ExportSpotify /> */}
        <AboutmeTitle title='ABOUT ME' />
        <AboutMeImage />
        <AboutMe setOpenModal={setOpenModal} />
      </div>
      <div className='w-full md:w-1/2 bg-white border-2 px-3 pt-3"'>
        <AboutmeTitle title='SKILLS' />
        <SkillsSection />
      </div>

      {/* <div className='flex-col bg-blue-500 h-full'>
          
        </div> */}

      {/* <div className='row-start-2 col-start-2'>PHOTO</div>

      <div className='row-start-3 col-start-6'>Skills</div> */}
    </div>
  );
};

export default About;
