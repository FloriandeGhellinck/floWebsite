import FooterSection from '../components/footerSection/footer';
import Navbar from '../components/navbar_main_page';
import ConverterProject from '../components/projets/converter';
import EmbillardProject from '../components/projets/embillard';
import ProjectsHomePage from '../components/welcomeSection/welcomeProjectsPage';

const Projects = () => {
  return (
    <>
      <Navbar>
        <main>
          <ProjectsHomePage />
          <div className='flex flex-col sm:flex-row'>
            <ConverterProject />
            <EmbillardProject />
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
