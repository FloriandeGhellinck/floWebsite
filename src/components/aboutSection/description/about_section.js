import SkillsSection from '../myskills/myskills';
import AboutmeTitle from '../aboutSectionTitle';
import AboutMe from './about_me';
import AboutMeImage from './about_me_image';

const About = (props) => {
  return (
    <div
      className='flex flex-col sm:flex-row m-2 gap-1'
      ref={props.aboutMeSectionRef}
    >
      <div className='w-full sm:w-1/2 bg-white border-2 p-3 flex flex-col'>
        <AboutmeTitle title='ABOUT ME' />
        <AboutMeImage />
        <AboutMe />
      </div>
      <div className='w-full sm:w-1/2 bg-white border-2 p-3"'>
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
