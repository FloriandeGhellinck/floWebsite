import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AboutMe = ({ setOpenModal }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='font-poppins'>
      <div className='flex flex-col text-justify m-5'>
        <div className='m-1 text-black '>
          <p>Hello and welcome on my personal website.</p> <br />
          <p>
            {' '}
            My Name is <span className='font-bold'>Florian</span>, I'm 27 years
            old and I would describe me as a tech-lover.{' '}
          </p>
          <br />
          <p>
            I started my journey at Cowboy SA. As a Micro-Mobility defender, I
            loved to work for a company in the bike industry. As a tech-lover, I
            greatly enjoyed to align my micro mobility passion with my tech
            passion. I loved the company and the product, but I wished a more
            tech related job.
          </p>{' '}
          <br />
          <p>
            This is why I started a{' '}
            <span className='font-bold'>coding bootcamp </span>at La Capsule in
            March 22. I learned the basics of JavaScript and React. I really
            enjoyed my bootcamp, but I was kind of frustrated when it was
            finished because nobody can master this huge topic of coding in less
            than 3 months!{' '}
          </p>
          <br />
          <p>
            I had a first experience in coding at Embie where I did an
            internship. I developed small internal projects and I spent most of
            my time at doing some trainings on Udemy in order to improve my
            theorical knowledge.
          </p>
          <br />
          <p>
            Knwing theory on technologies is great, but I'm looking to practice
            and develop my coding skills on professionnal projects.
          </p>
          <br />
          <p>
            Passionated and curious about technology and development, I'm
            looking for new opportunities in the tech industry.
          </p>
          <br />
          <p>
            {' '}
            I'm currently JavaScript oriented, but I'm open for any coding
            technology.{' '}
          </p>
          <br />
          <p>
            Do not hesitate to{' '}
            <button
              data-aos='fade-down-right'
              onClick={() => setOpenModal(true)}
              className='font-bold'
            >
              contact me
            </button>
            . I'll be more than happy to discuss about any tech related topic.
            And if you just want to grab a coffee together, just knock on the
            door !
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
