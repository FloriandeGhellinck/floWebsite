import AboutmeTitle from '../aboutSection/aboutSectionTitle';
import SkillsList from '../aboutSection/myskills/list';
import TitleProjectsDescription from './titleSection';
import Card from '../card';
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
      <Card>
        <AboutmeTitle title='TicTacToe' />
        <div className='font-poppins'>
          <div className='flex flex-col text-justify m-5'>
            <div className='m-1 text-black '>
              <p>
                TicTacToe Project is a personal project developped to reinforce
                my coding skills. I wanted to code a game with a grid. I
                developed this to test my logical skills with the grid and how
                to handle it.
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
              <TitleProjectsDescription title='About' />
              <p>
                This projects was the opportunity to train my Tailwind skills on
                grids. I also had to add all the logic to check out if someone
                won a game. I did this project based on a video on YouTube. It
                was a great project to work on, even of the logical part isn't
                coming from me.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TicTacToeProject;
