import AboutmeTitle from '../aboutSection/aboutSectionTitle';
import SkillsList from '../aboutSection/myskills/list';
import TitleProjectsDescription from './titleSection';

const Weather = () => {
  const embillardTechnos = [
    { langage: 'React', width: '100%', id: 1002 },
    { langage: 'NodeJS', width: '100%', id: 1003 },
    { langage: 'TypeScript', width: '100%', id: 1004 },
    { langage: 'NextJS', width: '100%', id: 1005 },
    { langage: 'Tailwind', width: '100%', id: 1006 },
    { langage: 'React Query', width: '100%', id: 1008 },
  ];

  return (
    <>
      <div className='flex flex-col sm:flex-row p-2 gap-1 md:w-1/2 w-full'>
        <div className=' bg-white border-2 p-3 flex flex-col'>
          <AboutmeTitle title='WeatherApp' />
          <div className='font-poppins'>
            <div className='flex flex-col text-justify m-5'>
              <div className='m-1 text-black '>
                <p>
                  Weather App Project is a project developped to fetch an API
                  and to learn React Query library. It's an app where you can
                  type a city and get the weather about this city.
                </p>{' '}
                <br />
                <p>
                  Click{' '}
                  <a
                    href='https://weather-app-beryl-sigma.vercel.app/'
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
                <SkillsList title='' items={embillardTechnos} />
                <TitleProjectsDescription title='Frontend' />
                <p>
                  As you can see, this project is not really about frontend. I
                  still created different components to win time and to create
                  cards.
                </p>
                <TitleProjectsDescription title='Backend' />
                <p>
                  I had to fetch an API, get the information back from a server,
                  and format it to be able to use this data. It has been very
                  interesting to do.
                </p>
                <TitleProjectsDescription title='Database' />
                <p>
                  There's no database, but the saved items are available in the
                  local storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
