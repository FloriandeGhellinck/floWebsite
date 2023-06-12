import SkillsList from "./list";

const SkillsSection = () => {
  const codeLanguages = [
    { langage: "Javascript", width: "85%", id: 1000, image: "/JS.png" },
    { langage: "HTML", width: "90%", id: 1001, image: "/html5.png" },
    { langage: "React", width: "90%", id: 1002, image: "/React-icon.svg.png" },
    { langage: "NodeJS", width: "70%", id: 1003, image: "/node.png" },
    { langage: "TypeScript", width: "60%", id: 1004, image: "/typescript.png" },
    { langage: "NextJS", width: "80%", id: 1005, image: "/nextt.png" },
    { langage: "Tailwind", width: "90%", id: 1006, image: "/tailwind.png" },
    { langage: "CSS", width: "90%", id: 1012, image: "/scss.png" },
  ];

  const databasesLanguages = [
    { langage: "Vercel", width: "60%", id: 1007, image: "/vercel.png" },
    { langage: "Hasura", width: "60%", id: 1008, image: "/hasura.png" },
    { langage: "GraphQL", width: "70%", id: 1010, image: "/graphql.png" },
    { langage: "Figma", width: "60%", id: 1011, image: "/figmazz.png" },
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
