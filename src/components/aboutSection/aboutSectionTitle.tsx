import { FC } from "react";

const AboutTitle: FC<{ title: string; className?: string }> = ({ title, className }) => {
  return (
    <div className={`flex flex-col items-center my-1 ${className}`}>
      <div className="bg-gradient-to-r from-amber-400 to-rose-600 w-fit my-5 -skew-y-3  ">
        <h1 className="mx-3 text-3xl lg:text-5xl text-white content-center uppercase"> {title}</h1>
      </div>
    </div>
  );
};
export default AboutTitle;
