import { useState } from 'react';
import FooterSection from '../components/footerSection/footer';
import Navbar from '../components/navbar_main_page';
import ConverterProject from '../components/projets/converter';
import EmbillardProject from '../components/projets/embillard';
import Temoins from '../components/projets/temoins';
import TicTacToeProject from '../components/projets/tictactoe';
import TiebreakProject from '../components/projets/tiebreak';
import Weather from '../components/projets/weather';
import ProjectsHomePage from '../components/welcomeSection/welcomeProjectsPage';

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar openModal={openModal} setOpenModal={setOpenModal}>
        <main>
          <ProjectsHomePage />
          <div className='flex justify-center items-center font-poppins my-10 flex-col '>
            <h1 className='text-3xl'> Projects Page</h1> <br />
            <p className='w-9/12 md:w-6/12 lg:text-xl text-base text-justify'>
              {' '}
              Welcome on my projects section. You'll find here some of the
              projects I worked on. I tried to show the used technologies for
              each project. <br /> <br />
              As most of the projects I worked on are the property of Embie and
              are developed for private customers, I can't show these projects
              here. The projects I'm not allowed to show are relatively big
              projects. My contributions on those projects are for example :{' '}
              <br />
              • Adding download PDF / Excel files based on different queries and
              data. <br />
              • Adding different kind of buttons with new functionnalities,
              redirects, data filters ... <br />• Add conditions as file size,
              extension,... on picture upploads (in case of a personnal picture
              for example).
              <br /> • Refactor code who was not efficient... <br />• ... <br />
              These are just some examples of things I did on those projects. I
              did a lot of things there and I'm of course open to tell you more
              about it. <br />
              <br />
              Regarding the methodology, I mainly worked with Hasura,
              Typescript, React and NextJS on those specific projects. To
              achieve these new features and fixes, I received "carts" on Notion
              with some instructions.
            </p>
          </div>
          <div className='flex p-2 flex-col w-full'>
            <div className='flex flex-col md:flex-row'>
              <TiebreakProject />
              <ConverterProject />
            </div>
            <div className='flex flex-col md:flex-row '>
              <EmbillardProject />
              <Temoins />
            </div>
            <div className='flex flex-col md:flex-row '>
              <TicTacToeProject />
              <Weather />
            </div>
          </div>
        </main>
        <footer>
          <FooterSection />
        </footer>
      </Navbar>
    </>
  );
};

export default Projects;
