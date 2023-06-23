import AboutTitle from "../aboutSection/aboutSectionTitle";
import SkillsList from "../aboutSection/myskills/list";
import TitleProjectsDescription from "./titleSection";
import { FC } from "react";
import { MappedProjects } from "../../types/projects";

const Project: FC<{ project: MappedProjects }> = ({ project }) => {
  return (
    <div className="bg-white border-4 px-4 rounded-lg border-black">
      <AboutTitle title={project.title} className="" />
      <div className="font-poppins ">
        <div className="flex flex-col text-justify m-5 ">
          <div className="m-1 text-black gap-y-4 flex flex-col">
            <p className="lg:h-36 xl:h-28 2xl:h-24 ">{project.description}</p>
            <p className="text-center grow h-full">
              Click{" "}
              <a href={project.url} target="_blank" className="font-bold">
                HERE
              </a>{" "}
              to check it out.
            </p>
            <TitleProjectsDescription title="Used Technologies" />
            <SkillsList items={project.technologies} className="lg:h-[34em] xl:h-[25em]" />
            <TitleProjectsDescription title="About" />
            <p className="lg:h-[35em] xl:h-[25em] 2xl:h-[20em]">{project.additional_note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
