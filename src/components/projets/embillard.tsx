import AboutTitle from "../aboutSection/aboutSectionTitle";
import SkillsList from "../aboutSection/myskills/list";
import TitleProjectsDescription from "./titleSection";
import Card from "../card.js";

const EmbillardProject = () => {
  const embillardTechnos = [
    { langage: "React", width: "100%", id: 1002 },
    { langage: "NodeJS", width: "100%", id: 1003 },
    { langage: "TypeScript", width: "100%", id: 1004 },
    { langage: "NextJS", width: "100%", id: 1005 },
    { langage: "Tailwind", width: "100%", id: 1006 },
    { langage: "Hasura", width: "100%", id: 1008 },
    { langage: "GraphQL", width: "100%", id: 1010 },
  ];

  return (
    <>
      <Card>
        <AboutTitle title="EMBILLARD" />
        <div className="font-poppins">
          <div className="flex flex-col text-justify m-5">
            <div className="m-1 text-black ">
              <p>
                Embillard Project is an internal project developped for having fun at Embie. This project has been created to keep track of
                our scores when we play pool during lunch time.
              </p>{" "}
              <br />
              <p>
                Click{" "}
                <a href="http://embillard.vercel.app" target="_blank" className="font-bold">
                  {" "}
                  HERE
                </a>{" "}
                to check it out.
              </p>
              <br />
              <p>
                The pages are protected by a password. Use my credentials to test the App. Login : florian@embie.be - Password: 'Flo'
              </p>{" "}
              <br />
              <TitleProjectsDescription title="Used Technologies" />
              <SkillsList title="" items={embillardTechnos} />
              <TitleProjectsDescription title="About" />
              <p>
                This projects was the opportunity to train my Tailwind skills. I totally agree that the design isn't beautiful, but I had
                the opportunity to have a better understanding about how divs work together, how things are rendered, how to play with the
                responsiveness, the different components...
                <br /> <br />I had to develop a small backend in order to let people login in the app to enter their scores. It's just a
                call to the database in order to compare the passwords and allow access or not.
                <br /> <br />A database has been created for this project. This database has been constructed to create user's profiles and
                to manage their participations to games.
                <br /> <br /> This project has been very interesting to understand much better how all of this works together.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default EmbillardProject;
