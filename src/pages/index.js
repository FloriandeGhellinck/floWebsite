import WelcomePage from '../components/welcomeSection/welcome';
import About from '../components/aboutSection/description/about_section';
import FooterSection from '../components/footerSection/footer';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/navbar_main_page';

export default function Home() {
  const aboutMeSectionRef = useRef(null);
  const handleClickScroll = () => {
    aboutMeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar handleClickScroll={handleClickScroll} setOpenModal={setOpenModal}>
        <main>
          <WelcomePage openModal={openModal} setOpenModal={setOpenModal} />
          {/* <WelcomePage modalStatus={open} /> */}

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
