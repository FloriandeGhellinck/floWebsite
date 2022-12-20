import WelcomePage from '../components/welcomeSection/welcomeHomePage';
import About from '../components/aboutSection/description/about_section';
import FooterSection from '../components/footerSection/footer';
import { useRef, useState } from 'react';
import Navbar from '../components/navbar_main_page';
import ExportSpotify from './api/spotify';

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
          {/* <WelcomePage modalStatus={open} /> */}
          {/* <div className='w-1/2'>
            <iframe
              className='rounded-sm'
              src='https://open.spotify.com/embed/playlist/5Pprezn2M1hgji17v6zCzT?utm_source=generator'
              width='100%'
              height='380'
              frameBorder='0'
              allowfullscreen=''
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            ></iframe>
          </div> */}
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
