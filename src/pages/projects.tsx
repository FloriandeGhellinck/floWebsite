import { FC, useState } from "react";
import FooterSection from "../components/footerSection/footer";
import Navbar from "../components/navbar_main_page";
import ConverterProject from "../components/projets/converter";
import EmbillardProject from "../components/projets/embillard";
import Temoins from "../components/projets/temoins";
import TicTacToeProject from "../components/projets/tictactoe";
import TiebreakProject from "../components/projets/tiebreak";
import Weather from "../components/projets/weather";
import ProjectsHomePage from "../components/welcomeSection/welcomeProjectsPage";
import Button from "../components/button";
import Card from "../components/card";
import AboutTitle from "../components/aboutSection/aboutSectionTitle";
import TitleProjectsDescription from "../components/projets/titleSection";
import SkillsList from "../components/aboutSection/myskills/list";
import Project from "../components/projets/project";
import map from "lodash/map";
import { ProjectsToSwitch } from "../types/projects";

const Projects: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const handleActiveSection = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
  };

  const PROJECTS_TO_SWITCH: ProjectsToSwitch[] = [
    {
      section_description:
        "This collection shows some of the projects I worked on when I first started coding. These projects helped me learn the basics of programming. I learned how to get information from other websites using API's, got familiar with the basics of TypeScript, tried out different ways to use JavaScript, and understood how React works. Although the code and structure of these projects may not be perfect, they were really interesting and important for me to learn more about coding.",
      section_projects: [
        {
          title: "Tiebreak",
          description:
            "TieBreak is the final project of my education at la Capsule. it has been developed with Killian Gemoets. It's a web application about booking a tennis court.",
          url: "https://tiebreak.netlify.app/",
          technologies: [
            {
              langage: "CSS",
              width: "100%",
              image: "/technos/css.png",
            },
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "ExpressJS",
              width: "100%",
              image: "/technos/express.png",
            },
            {
              langage: "mongoDB",
              width: "100%",
              image: "/technos/mongodb.png",
            },
            {
              langage: "Figma",
              width: "100%",
              image: "/technos/figma.png",
            },
          ],
          additional_note:
            "After eight intense weeks of training, we started a final project that lasted for two weeks. It all began with creating a custom design using Figma. Once we finished the design, we organized our tasks and timelines on a Trello board. Killian took care of the logic and algorithms, while I focused on integrating the design elements. Looking back, our project doesn't look very nice, and the code has a lot of repetition. At that time, we didn't fully understand the purpose of components and the importance of writing clean code. Now, after a year, I'm really surprised by how much I've learned. If I were to do a similar project today, I would approach it in a completely different way. I would create a lot of components, I would use NextJS instead of Express and I would use libraries.",
        },
        {
          title: "Converter",
          description:
            "Converter has been my first project at Embie. This project is used internally and has been created to convert data for one of Embie's customer.",
          url: "https://converter.embie.be/",
          technologies: [
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "TypeScript",
              width: "100%",
              image: "/technos/typescript.png",
            },
            {
              langage: "NextJS",
              width: "100%",
              image: "/technos/next.png",
            },
            {
              langage: "Tailwind",
              width: "100%",
              image: "/technos/tailwind.png",
            },
          ],
          additional_note:
            "It's in this project I realized the importance of components. I had never use Tailwind before this project. I created a black and white theme in order to start playing with libraries. It was a first great single page project to learn how things work together (React).",
        },
        {
          title: "Embillard",
          description:
            "Embillard Project is an internal project developped for having fun at Embie. This project has been created to keep track of our scores when we play pool during lunch time.",
          url: "https://embillard.vercel.app/login",
          technologies: [
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "TypeScript",
              width: "100%",
              image: "/technos/typescript.png",
            },
            {
              langage: "NextJS",
              width: "100%",
              image: "/technos/next.png",
            },
            {
              langage: "Tailwind",
              width: "100%",
              image: "/technos/tailwind.png",
            },
          ],
          additional_note:
            "This projects was the opportunity to train my Tailwind skills. I totally agree that the design isn't beautiful, but I had the opportunity to have a better understanding about how divs work together, how things are rendered, how to play with the responsiveness, the different components.. I had to develop a small backend in order to let people login in the app to enter their scores. It's just a call to the database in order to compare the passwords and allow access or not. A database has been created for this project. This database has been constructed to create user's profiles and to manage their participations to games. This project has been very interesting to understand much better how all of this works together.",
        },
        {
          title: "Témoins",
          description:
            "Temoin project is a personal project developed to ask to my best friends if they want to be my best man for my wedding. P.S.: Project isn't available on large screens.",
          url: "https://quiz-flo.vercel.app/",
          technologies: [
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "TypeScript",
              width: "100%",
              image: "/technos/typescript.png",
            },
            {
              langage: "NextJS",
              width: "100%",
              image: "/technos/next.png",
            },
            {
              langage: "Tailwind",
              width: "100%",
              image: "/technos/tailwind.png",
            },
          ],
          additional_note:
            "This projects was a very small project developed in one day. It's certainly not a big project, but it was really cool to be able to develop a personal project in less than a day. This project was the opportunity to focus on creating reusable components, play with the states and hooks from React (to calculate the scores).",
        },
      ],
    },
    {
      section_description:
        "Here are all the projects I could work on once I got the basics of programming. These are professional projects for customers. As these apps have been develloped for customers, the code isn't public. I can't show the code, but I can explain and tell what I did on these projects, as well as show the used technologies etc. ",
      section_projects: [
        {
          title: "J&N",
          description:
            "Jeunes et nature is a non-profit organization that organizes activities for young people. This project is the one I worked most for at Embie. The Jeunes et Nature website is a WordPress and once we click on login, we got redirected to our admin application we created. ",
          url: "https://app.jeunesetnature.be/signin",
          technologies: [
            {
              langage: "Tailwind",
              width: "100%",
              image: "/technos/tailwind.png",
            },
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "TypeScript",
              width: "100%",
              image: "/technos/typescript.png",
            },
            {
              langage: "Figma",
              width: "100%",
              image: "/technos/figma.png",
            },
            {
              langage: "NextJS",
              width: "100%",
              image: "/technos/next.png",
            },
            {
              langage: "GraphQL",
              width: "100%",
              image: "/technos/graphQL.png",
            },
            {
              langage: "Hasura",
              width: "100%",
              image: "/technos/hasura.png",
            },
          ],
          additional_note:
            "This application is used by administrators, animators, parents, and soon children as well. Each role has distinct operations they can perform on the website. For example, animators and admins can create activities, while parents can register their children for activities and make payments. This has been a significant project for me, where I've learned many things. We utilized various libraries such as React Hook Form, Date Fns, Lodash, React Query, React Toastify, and Dinero. We integrated payment functionality with Mollie and handled all email communication with Sendgrid. My contribution to this project has been considerable. When I joined, it was already an existing project, but I added numerous functionalities. I worked on displaying information based on database queries, implemented payment processing, managed email communications, and even enabled PDF downloads based on specific queries. This project has been particularly interesting for me as it provided insight into the workings of larger-scale projects and their complete architecture...",
        },
        {
          title: "The Mix",
          description: "The Mix is a huge center in Brussels with a hotel, gym, restaurant, coworking spaces, ...",
          url: "https://booking.mix.brussels/standard",
          technologies: [
            {
              langage: "Tailwind",
              width: "100%",
              image: "/technos/tailwind.png",
            },
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "TypeScript",
              width: "100%",
              image: "/technos/typescript.png",
            },
            {
              langage: "Figma",
              width: "100%",
              image: "/technos/figma.png",
            },
            {
              langage: "NextJS",
              width: "100%",
              image: "/technos/next.png",
            },
          ],
          additional_note:
            "I joined the hotel booking engine project early on and focused on the frontend development. We were using Next.js version 13, which introduced new features like the app directory structure and layouts. I integrated fonts using Next.js 13's font implementation system. My responsibilities included implementing features like breadcrumb navigation and creating components such as the room selector. I also designed reusable components like buttons. Although I didn't have extensive involvement, I found the project highly interesting. Later on, the team had to refactor a significant part of the application due to architectural considerations and challenges with fetching data from the room API, which had certain restrictions. ",
        },
        {
          title: "Embie",
          description: "Embie's website has been totaly reworked in May & June 2023. ",
          url: "https://embie.be",
          technologies: [
            {
              langage: "Tailwind",
              width: "100%",
              image: "/technos/tailwind.png",
            },
            {
              langage: "React",
              width: "100%",
              image: "/technos/react.png",
            },
            {
              langage: "NodeJS",
              width: "100%",
              image: "/technos/node.png",
            },
            {
              langage: "TypeScript",
              width: "100%",
              image: "/technos/typescript.png",
            },
            {
              langage: "Figma",
              width: "100%",
              image: "/technos/figma.png",
            },
            {
              langage: "NextJS",
              width: "100%",
              image: "/technos/next.png",
            },
            {
              langage: "Strapi",
              width: "100%",
              image: "/technos/strapi.png",
            },
          ],
          additional_note:
            "My implication here has also been only frontend. I integrated some pages based on the Figma. The particularity here is that we were working with a CMS (Strapi). It was totally different from what I knew. On this project, I created the FAQ section, the blog section, I refactored the navbar, ... ",
        },
      ],
    },
  ];

  const activeSectionData = PROJECTS_TO_SWITCH[activeSection];
  return (
    <>
      <Navbar openModal={openModal} setOpenModal={setOpenModal}>
        <ProjectsHomePage />
        <div className="flex justify-center items-center font-poppins py-10 flex-col bg-black px-4 md:px-7 lg:px-14 gap-y-10 h-auto">
          <h1 className="text-3xl lg:text-5xl font-monserrat text-white"> Projects Page</h1>
          <div className="w-full flex flex-col md:flex-row supports-[gap]:gap-x-5 supports-[gap]:gap-y-5 items-center pb-10">
            <button
              className={`border-2 ${
                activeSection === 0 ? "bg-white text-black" : "bg-black text-white "
              } border-white w-1/2 lg:p-4 p-2 flex items-center justify-center rounded-3xl `}
              onClick={() => handleActiveSection(0)}
              type="button"
            >
              Training projects
            </button>

            <button
              className={`border-2 ${
                activeSection === 1 ? "bg-white text-black" : "bg-black text-white "
              } border-white w-1/2 lg:p-4 p-2 flex items-center justify-center rounded-3xl `}
              onClick={() => handleActiveSection(1)}
              type="button"
            >
              Professional projects
            </button>
          </div>

          <div className="flex flex-col items-center bg-white rounded-3xl w-full">
            <div className=" flex  gap-y-4 flex-col px-4 w-full">
              <h1 className="underline font-bold text-3xl text-center pt-5"> About this section</h1>
              <p className="text-base text-black text-center lg:px-20 px-4">{activeSectionData.section_description}</p>
              <div className="flex flex-col lg:flex-row items-center lg:items-start flex-wrap gap-y-3 pb-5">
                {map(activeSectionData.section_projects, (eachProject, index) => {
                  return <Project project={eachProject} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </Navbar>
    </>
  );
};

export default Projects;
