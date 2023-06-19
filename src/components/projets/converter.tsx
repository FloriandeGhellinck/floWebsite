import AboutTitle from "../aboutSection/aboutSectionTitle";
import SkillsList from "../aboutSection/myskills/list";
import TitleProjectsDescription from "./titleSection";
import Card from "../card";

const ConverterProject = () => {
  const embillardTechnos = [
    { langage: "React", width: "100%", id: 1002 },
    { langage: "NodeJS", width: "100%", id: 1003 },
    { langage: "TypeScript", width: "100%", id: 1004 },
    { langage: "NextJS", width: "100%", id: 1005 },
    { langage: "Tailwind", width: "100%", id: 1006 },
  ];

  return (
    <>
      <Card>
        <AboutTitle title="CONVERTER" />
        <div className="font-poppins">
          <div className="flex flex-col text-justify m-5">
            <div className="m-1 text-black ">
              <p>
                Converter has been my first project at Embie. This project is used internally and has been created to convert data for one
                of Embie's customer.
              </p>{" "}
              <br />
              <p>
                Click{" "}
                <a href="https://converter.embie.be/" target="_blank" className="font-bold">
                  HERE
                </a>{" "}
                to check it out.
              </p>
              <br />
              <TitleProjectsDescription title="Used Technologies" />
              <SkillsList title="" items={embillardTechnos} />
              <TitleProjectsDescription title="About" />
              <p>
                This was my first project at Embie. I had never use Tailwind before this project. I created a black and white theme in order
                to start playing with libraries. It was a first great single page project to learn how things work together (React).
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ConverterProject;
