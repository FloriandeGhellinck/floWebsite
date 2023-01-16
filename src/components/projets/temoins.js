import AboutmeTitle from '../aboutSection/aboutSectionTitle';
import SkillsList from '../aboutSection/myskills/list';
import TitleProjectsDescription from './titleSection';
import Card from '../card';

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
      <Card>
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
              <TitleProjectsDescription title='About' />
              <p>
                This projects was a very small project developed in one day.
                It's certainly not a big project, but it was really cool to be
                able to develop a personal project in less than a day. This
                project was the opportunity to focus on creating reusable
                components, play with the states and hooks from React (to
                calculate the scores).
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Temoins;
