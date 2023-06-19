import { FC } from "react";

const TitleProjectsDescription: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={`flex justify-center my-5 `}>
      <h1 className="bg-gray-200 -skew-x-12 w-fit px-3 text-base md:text-xl lg:text-3xl text-center"> {title} </h1>
    </div>
  );
};

export default TitleProjectsDescription;
