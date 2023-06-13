import AboutmeTitle from "../aboutSection/aboutSectionTitle";
import SkillsList from "../aboutSection/myskills/list";
import TitleProjectsDescription from "./titleSection";
import Card from "../card";

const TiebreakProject = () => {
  const embillardTechnos = [
    { langage: "CSS", width: "100%", id: 10011 },
    { langage: "React", width: "100%", id: 1002 },
    { langage: "NodeJS", width: "100%", id: 1003 },
    { langage: "TypeScript", width: "100%", id: 1004 },
    { langage: "ExpressJS", width: "100%", id: 1005 },
    { langage: "mongoDB", width: "100%", id: 1010 },
  ];

  return (
    <>
      <Card>
        <AboutmeTitle title="TieBreak" />
        <div className="font-poppins">
          <div className="flex flex-col text-justify m-5">
            <div className="m-1 text-black ">
              <p>
                TieBreak is the final project of my education at la Capsule. it has been developed with Killian Gemoets. It's a web
                application about booking a tennis court.
              </p>{" "}
              <br />
              <p>
                Click{" "}
                <a href="https://tiebreak.netlify.app/" target="_blank" className="font-bold">
                  {" "}
                  HERE
                </a>{" "}
                to check it out.
              </p>
              <br />
              <TitleProjectsDescription title="Used Technologies" />
              <SkillsList title="" items={embillardTechnos} />
              <TitleProjectsDescription title="About" />
              <p>
                This application allows a tennis player to reserve a court and pay in just a few clicks. Moreover, it allows a club manager
                to quickly free up slots and collect data on court occupancy rates. It was really interesting to work on the interaction
                between the player side and the club side. In addition, we implemented different tools like an interactive map, an
                interactive calendar, statistics charts, a payment method, a cloud-based image management service, etc.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TiebreakProject;
