import Aos from "aos";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import "aos/dist/aos.css";
import { differenceInYears } from "date-fns";
import Link from "next/link";

const AboutMe: FC<{ setOpenModal: Dispatch<SetStateAction<boolean>> }> = ({ setOpenModal }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const birthDate = new Date(1995, 4, 3);

  return (
    <div className="font-poppins">
      <div className="flex flex-col text-justify m-5 gap-y-10">
        <div className="m-1 text-black ">
          <p>
            Welcome to my website! I'm <span className="font-bold">Florian </span>, a {differenceInYears(new Date(), birthDate)} year-old
            self-proclaimed tech-lover
          </p>
          <br />
          <p>
            I started my professional journey at{" "}
            <a href="https://cowboy.com/" target="_blank">
              <span className="font-bold"> Cowboy SA. </span>
            </a>{" "}
            As a Micro-Mobility defender, I loved to work for a company in the bike industry. As a tech-lover, I greatly enjoyed to align my
            micro mobility passion with my tech passion. I loved the company and the product, but I wished a more tech related job.
          </p>
          <br />
          <p>
            In March 2022, I made a bold decision to change careers and go into web development. Since then, my path has been marked by a
            constant passion for learning and improving my skills.{" "}
          </p>
          <br />
          <p>
            To begin with, I attended an intensive{" "}
            <a href="https://www.lacapsule.academy" target="_blank">
              <span className="font-bold">coding bootcamp at La Capsule </span>
            </a>
            , where I acquired a solid grounding in web development and deepened my knowledge of programming. The bootcamp introduced me to
            programming languages such as HTML, CSS and JavaScript, as well as the React and Node.js frameworks.
          </p>{" "}
          <br />
          <p>
            Once I knew the basics, I was hired for an internship at Embie, a company specialized in web development. During this period, I
            was able to work closely with a talented team, gaining valuable hands-on experience in the realization of quality web projects.
            I was able to develop my skills in collaboration, problem-solving and project management. Technologies learned at Embie include
            NextJS, GraphQL, TypeScript, Figma integration, ...{" "}
          </p>{" "}
          <br />
          <p>
            I then had the opportunity to extend my internship at Embie with a fixed-term contract (CDD). This experience enabled me to
            further strengthen my technical skills and tackle more complex web development challenges.
          </p>{" "}
          <br />
          <p>
            After more than one year coding, I started coding in October 23 at{" "}
            <Link href={"www.aeco.cloud"} className="font-bold">
              Aeco
            </Link>
            . We build the{" "}
            <Link href={"www.astro.tax"} className="font-bold">
              Astro
            </Link>{" "}
            online accounting service.
          </p>{" "}
          <br />
          <p>
            Please feel free to browse my portfolio and{" "}
            <button data-aos="fade-down-right" onClick={() => setOpenModal(true)} className="font-bold">
              contact me
            </button>{" "}
            if you'd like to discuss projects, collaborations or any other opportunities in the field of web development. I'm open to new
            ideas and always ready to take on new challenges to continue evolving as a developer. Thank you for visiting and I look forward
            to working with you!
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <a target="_blank" href="/CV-Florian-de-Ghellinck - EN.pdf" download>
            <button className=" py-2 px-4 rounded-xl text-black border-2 border-primary-orange-100 hover:bg-primary-orange-100 hover:text-white">
              {" "}
              DOWNLOAD MY RESUME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
