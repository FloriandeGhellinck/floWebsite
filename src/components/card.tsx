import { FC, ReactNode } from "react";

const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={`${className} flex flex-col sm:flex-row py-2 lg:py-0 lg:p-2 gap-1 md:w-1/2 w-full`}>
      <div className=" bg-white border-4 px-4 rounded-lg border-black md:p-3 flex flex-col">{children}</div>
    </div>
  );
};

export default Card;
