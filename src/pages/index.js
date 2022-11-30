import WelcomePage from '../components/welcomeSection/welcome';
import About from '../components/aboutSection/description/about_section';
import FooterSection from '../components/footerSection/footer';

export default function Home() {
  return (
    <div>
      <main>
        <WelcomePage />
        <About />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
