import WelcomePage from '../components/welcomeSection/welcomeHomePage';
import About from '../components/aboutSection/description/about_section';
import FooterSection from '../components/footerSection/footer';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/navbar_main_page';

export default function Home() {
  const aboutMeSectionRef = useRef(null);
  const handleClickScroll = ({}) => {
    aboutMeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Navbar handleClickScroll={handleClickScroll}>
        <main>
          <WelcomePage />
          {/* <WelcomePage modalStatus={open} /> */}

          <About aboutMeSectionRef={aboutMeSectionRef} />
        </main>
      </Navbar>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
