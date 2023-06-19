import AboutTitle from "../aboutSection/aboutSectionTitle";
import SkillsList from "../aboutSection/myskills/list";
import TitleProjectsDescription from "./titleSection";
import Card from "../card";
import { FC } from "react";
import { MappedProjects } from "../../types/projects";

const Project: FC<{ project: MappedProjects }> = ({ project }) => {
  return (
    <Card className="lg:h-[110rem] xl:h-[75rem]">
      <AboutTitle title={project.title} />
      <div className="font-poppins">
        <div className="flex flex-col text-justify m-5">
          <div className="m-1 text-black ">
            <p className="h-1/6">{project.description}</p> <br />
            <p className="text-center h-1/6">
              Click{" "}
              <a href={project.url} target="_blank" className="font-bold">
                HERE
              </a>{" "}
              to check it out.
            </p>
            <br />
            <TitleProjectsDescription title="Used Technologies" />
            <SkillsList items={project.technologies} />
            <TitleProjectsDescription title="About" />
            <p>{project.additional_note}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
