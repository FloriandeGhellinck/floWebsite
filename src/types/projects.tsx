import { Skills } from "./skills";

export type ProjectsToSwitch = {
  section_description: string;
  section_projects:
    | {
        title: string;
        description: string;
        url: string;
        technologies: Skills[];
        additional_note: string;
      }
    | {
        title: string;
        description: string;
        url: string;
        technologies: Skills[];
        additional_note: string;
      }[];
};

export type MappedProjects = {
  title: string;
  description: string;
  url: string;
  technologies: Skills[];
  additional_note: string;
};
