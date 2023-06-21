import SkillsSection from "../myskills/myskills";
import AboutTitle from "../aboutSectionTitle";
import AboutMe from "./about_me";
import AboutMeImage from "./about_me_image";
import { Dispatch, FC, SetStateAction } from "react";

const About: FC<{ setOpenModal: Dispatch<SetStateAction<boolean>> }> = ({ setOpenModal }) => {
  return (
    <div className="flex flex-col md:flex-row m-2 gap-1">
      <div className="py-5 w-full md:w-1/2 bg-white border-4 rounded-lg  px-3 pt-3 flex flex-col">
        <AboutTitle title="about me" />
        <AboutMeImage />
        <AboutMe setOpenModal={setOpenModal} />
      </div>
      <div className="w-full md:w-1/2 bg-white px-3 pt-3 border-4 rounded-lg">
        <AboutTitle title="skills" />
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
