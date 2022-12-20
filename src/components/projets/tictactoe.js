import AboutmeTitle from '../aboutSection/aboutSectionTitle';
import SkillsList from '../aboutSection/myskills/list';
import TitleProjectsDescription from './titleSection';

const TicTacToeProject = () => {
  const tictactoeTechnos = [
    { langage: 'React', width: '100%', id: 1002 },
    { langage: 'NodeJS', width: '100%', id: 1003 },
    { langage: 'TypeScript', width: '100%', id: 1004 },
    { langage: 'NextJS', width: '100%', id: 1005 },
    { langage: 'Tailwind', width: '100%', id: 1006 },
    { langage: 'Hasura', width: '100%', id: 1008 },
  ];

  return (
    <>
      <div className='flex flex-col sm:flex-row p-2 gap-1 md:w-1/2 w-full'>
        <div className=' bg-white border-2 p-3 flex flex-col'>
          <AboutmeTitle title='TicTacToe' />
          <div className='font-poppins'>
            <div className='flex flex-col text-justify m-5'>
              <div className='m-1 text-black '>
                <p>
                  TicTacToe Project is a personal project developped to
                  reinforce my coding skills. I wanted to code a game with a
                  grid. I developed this to test my logical skills with the grid
                  and how to handle it.
                </p>{' '}
                <br />
                <p>
                  Click{' '}
                  <a
                    href='https://tic-tac-toe-floriandeghellinck.vercel.app/'
                    target='_blank'
                    className='font-bold'
                  >
                    {' '}
                    HERE
                  </a>{' '}
                  to check it out.
                </p>
                <br />
                <TitleProjectsDescription title='Used Technologies' />
                <SkillsList title='' items={tictactoeTechnos} />
                <TitleProjectsDescription title='Frontend' />
                <p class>
                  This projects was the opportunity to train my Tailwind skills
                  on grids. I also had to add all the logic to check out if
                  someone won a game. I did this project based on a video on
                  YouTube. It was a great project to work on.
                </p>
                {/* <TitleProjectsDescription title='Backend' />
                <p class>
                  I had to develop a small backend in order to let people login
                  in the app to enter their scores. It's just a call to the
                  database in order to compare the passwords and allow access or
                  not.
                </p> */}
                {/* <TitleProjectsDescription title='Database' />
                <p class>
                  A database has been created for this project. This database
                  has been constructed to create user's profiles and to manage
                  their participations to games.
                </p> */}
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

export default TicTacToeProject;
