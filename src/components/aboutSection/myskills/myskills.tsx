import { FC } from "react";
import { Skills } from "../../../types/skills";
import SkillsList from "./list";

const SkillsSection: FC = () => {
  const codeLanguages: Skills[] = [
    { langage: "Javascript", width: "85%", image: "/technos/javascript.png" },
    { langage: "HTML", width: "90%", image: "/technos/html5.png" },
    { langage: "React", width: "90%", image: "/technos/react.png" },
    { langage: "NodeJS", width: "70%", image: "/technos/node.png" },
    { langage: "TypeScript", width: "60%", image: "/technos/typescript.png" },
    { langage: "NextJS", width: "80%", image: "/technos/next.png" },
    { langage: "Tailwind", width: "90%", image: "/technos/tailwind.png" },
    { langage: "CSS", width: "90%", image: "/technos/css.png" },
  ];

  const databasesLanguages: Skills[] = [
    { langage: "Vercel", width: "60%", image: "/technos/vercel.png" },
    { langage: "Hasura", width: "60%", image: "/technos/hasura.png" },
    { langage: "GraphQL", width: "70%", image: "/technos/graphql.png" },
    { langage: "Figma", width: "60%", image: "/technos/figma.png" },
  ];

  return (
    <div className="bg-white flex flex-col items-center  ">
      <div className="lg:gap-5 gap-2 p-1">
        <SkillsList title="Technologies" items={codeLanguages} />
        <SkillsList title="Other related skills" items={databasesLanguages} />
      </div>
    </div>
  );
};

export default SkillsSection;
