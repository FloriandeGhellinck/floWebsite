import AboutmeTitle from '../aboutSection/aboutSectionTitle';
import SkillsList from '../aboutSection/myskills/list';
import TitleProjectsDescription from './titleSection';

const Temoins = () => {
  const embillardTechnos = [
    { langage: 'React', width: '100%', id: 1002 },
    { langage: 'NodeJS', width: '100%', id: 1003 },
    { langage: 'TypeScript', width: '100%', id: 1004 },
    { langage: 'NextJS', width: '100%', id: 1005 },
    { langage: 'Tailwind', width: '100%', id: 1006 },
  ];

  return (
    <>
      <div className='flex flex-col sm:flex-row p-2 gap-1 md:w-1/2 w-full'>
        <div className=' bg-white border-2 p-3 flex flex-col'>
          <AboutmeTitle title='TEMOINS' />
          <div className='font-poppins'>
            <div className='flex flex-col text-justify m-5'>
              <div className='m-1 text-black '>
                <p>
                  Temoin project is a personal project developped to ask to my
                  best friend if they want to be my best man for my wedding.
                </p>{' '}
                <br />
                <p>
                  Click{' '}
                  <a
                    href='https://quiz-flo.vercel.app/'
                    target='_blank'
                    className='font-bold'
                  >
                    {' '}
                    HERE
                  </a>{' '}
                  to check it out.
                </p>
                <br />
                <p>
                  I added a hidden class on big screens. This website is only
                  visible on phone screens.
                </p>
                <TitleProjectsDescription title='Used Technologies' />
                <SkillsList title='' items={embillardTechnos} />
                <TitleProjectsDescription title='Frontend' />
                <p>
                  This projects was a very small project developed in one day.
                  It's certainly not a big project, but it was really cool to be
                  able to develop a personal project in less than a day.
                </p>
                {/* <p>
                  {' '}
                  My Name is <span className='font-bold'>Florian</span>, I'm 27
                  years old and I would describe me as a tech-lover.{' '}
                </p>
                <br />
                <p>
                  I started my journey at Cowboy SA. As a Micro-Mobility
                  defender, I loved to work for a company in the bike industry.
                  As a tech-lover, I greatly enjoyed to align my micro mobility
                  passion with my tech passion. I loved the company and the
                  product, but I wished a more tech related job.
                </p>{' '}
                <br />
                <p>
                  This is why I started a{' '}
                  <span className='font-bold'>coding bootcamp </span>at La
                  Capsule in March 22. I learned the basics of JavaScript and
                  React. I really enjoyed my bootcamp, but I was kind of
                  frustrated when it was finished because nobody can master this
                  huge topic of coding in less than 3 months!{' '}
                </p>
                <br />
                <p>
                  I had a first experience in coding at Embie where I did an
                  internship. I developed small internal projects and I spent
                  most of my time at doing some trainings on Udemy in order to
                  improve my theorical knowledge.
                </p>
                <br />
                <p>
                  Knwing theory on technologies is great, but I'm looking to
                  practice and develop my coding skills on professionnal
                  projects.
                </p>
                <br />
                <p>
                  Passionated and curious about technology and development, I'm
                  looking for new opportunities in the tech industry.
                </p>
                <br />
                <p>
                  {' '}
                  I'm currently JavaScript oriented, but I'm open for any coding
                  technology.{' '}
                </p>
                <br />
                <p>
                  Do not hesitate to{' '}
                  <button
                    data-aos='fade-down-right'
                    onClick={() => setOpenModal(true)}
                    className='font-bold'
                  >
                    contact me
                  </button>
                  . I'll be more than happy to discuss about any tech related
                  topic. And if you just want to grab a coffee together, just
                  knock on the door !
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temoins;
