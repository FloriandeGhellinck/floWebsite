import AboutmeTitle from '../aboutSection/aboutSectionTitle';
import SkillsList from '../aboutSection/myskills/list';
import TitleProjectsDescription from './titleSection';

const EmbillardProject = () => {
  const embillardTechnos = [
    { langage: 'Javascript', width: '100%', id: 1000 },
    { langage: 'HTML', width: '100%', id: 1001 },
    { langage: 'React', width: '100%', id: 1002 },
    { langage: 'NodeJS', width: '100%', id: 1003 },
    { langage: 'TypeScript', width: '100%', id: 1004 },
    { langage: 'NextJS', width: '100%', id: 1005 },
    { langage: 'Tailwind', width: '100%', id: 1006 },
    { langage: 'Hasura', width: '100%', id: 1008 },
    { langage: 'GraphQL', width: '100%', id: 1010 },
  ];

  return (
    <>
      <div className='flex flex-col sm:flex-row m-2 gap-1 w-full'>
        <div className=' bg-white border-2 p-3 flex flex-col'>
          <AboutmeTitle title='EMBILLARD' />
          <div className='font-poppins'>
            <div className='flex flex-col text-justify m-5'>
              <div className='m-1 text-black '>
                <p>
                  Embillard Project is an internal project developped for having
                  fun at Embie. This project has been created to keep track of
                  our scores when we play pool during lunch time.
                </p>{' '}
                <br />
                <p>
                  Click{' '}
                  <a
                    href='http://embillard.vercel.app'
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
                  The pages are protected by a password. Use my credentials to
                  test the App. Login : florian@embie.be - Password: 'Flo'
                </p>{' '}
                <br />
                <TitleProjectsDescription title='Used Technologies' />
                <SkillsList title='' items={embillardTechnos} />
                <TitleProjectsDescription title='Frontend' />
                <p class>
                  This projects was the opportunity to train my Tailwind skills.
                  I totally agree that the design isn't beautifull, but I had
                  the opportunity to have a better understanding about how divs
                  work together, how things are rendered, how to play with the
                  responsivenes, the different components...
                </p>
                <TitleProjectsDescription title='Backend' />
                <p class>
                  I had to develop a small backend in order to let people login
                  in the app to enter their scores. It's just a call to the
                  database in order to compare the passwords and allow access or
                  not.
                </p>
                <TitleProjectsDescription title='Database' />
                <p class>
                  A database has been created for this project. This database
                  has been constructed to create user's profiles and to manage
                  their participations to games.
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

export default EmbillardProject;
