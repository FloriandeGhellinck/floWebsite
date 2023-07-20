import AboutTitle from "../aboutSection/aboutSectionTitle";
import SkillsList from "../aboutSection/myskills/list";
import TitleProjectsDescription from "./titleSection";
import { FC } from "react";
import { MappedProjects } from "../../types/projects";

const Project: FC<{ project: MappedProjects }> = ({ project }) => {
  return (
    <div className="bg-white border-4 px-4 rounded-lg border-primary-orange-60 shadow-xl">
      <AboutTitle title={project.title} className="" />
      <div className="font-poppins ">
        <div className="flex flex-col text-justify m-5 ">
          <div className="m-1 text-black gap-y-4 flex flex-col ">
            <p className="lg:h-36 xl:h-28 2xl:h-24 ">{project.description}</p>
            <div className="flex items-center justify-center">
              <a
                target="_blank"
                href={project.url}
                className="px-4 py-2 rounded-lg w-fit  bg-primary-orange-60 hover:bg-transparent hover:border-primary-orange-20 border-2 border-transparent font-poppins animate-bounce"
              >
                {" "}
                Check it out
              </a>
            </div>
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
