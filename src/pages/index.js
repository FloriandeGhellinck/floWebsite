import Image from 'next/image';
import WelcomePage from '../components/welcome';
import About from '../components/aboutSection/about_section';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <main>
        <WelcomePage />
        <About />
      </main>

      <footer></footer>
    </div>
  );
}
