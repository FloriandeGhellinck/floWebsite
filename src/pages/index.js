import WelcomePage from '../components/welcomeSection/welcomeHomePage';
import About from '../components/aboutSection/description/about_section';
import FooterSection from '../components/footerSection/footer';
import { useRef, useState } from 'react';
import Navbar from '../components/navbar_main_page';

export default function Home({}) {
  const aboutMeSectionRef = useRef(null);
  const handleClickScroll = ({}) => {
    aboutMeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar
        handleClickScroll={handleClickScroll}
        setOpenModal={setOpenModal}
        openModal={openModal}
      >
        <main>
          <WelcomePage />
          <About
            aboutMeSectionRef={aboutMeSectionRef}
            setOpenModal={setOpenModal}
          />
        </main>
      </Navbar>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
