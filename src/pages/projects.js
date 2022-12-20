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
          <div className='flex p-2 flex-col w-full'>
            <div className='flex flex-col md:flex-row'>
              <ConverterProject />
              <EmbillardProject />
            </div>
            <div className='flex flex-col md:flex-row '>
              <TicTacToeProject />
              <Temoins />
            </div>
            <div className='flex flex-col md:flex-row '>
              <Weather />
              <TiebreakProject />
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
