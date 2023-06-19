import WelcomePage from "../components/welcomeSection/welcomeHomePage";
import About from "../components/aboutSection/description/about_section";
import FooterSection from "../components/footerSection/footer";
import { useState } from "react";
import Navbar from "../components/navbar_main_page";
import { AppProps } from "next/app";

export default function Home({}: AppProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar setOpenModal={setOpenModal} openModal={openModal}>
        <main>
          <WelcomePage />
          <About setOpenModal={setOpenModal} />
        </main>
      </Navbar>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
