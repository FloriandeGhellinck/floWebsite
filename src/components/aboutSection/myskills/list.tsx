import { motion } from "framer-motion";
import map from "lodash/map";
import Image from "next/image";
import { Skills } from "../../../types/skills";
import { FC } from "react";

const SkillsList: FC<{ items: Skills[]; title?: string; className?: string }> = ({ className, items, title }) => {
  return (
    <>
      <div className={`font-poppins text-black font-extrabold text-2xl text-center py-2 ${className}`}>
        <div className={`${title ? "m-3" : "hidden"}`}>
          <h1>{title}</h1>
        </div>

        <ul role="list" className="grid grid-cols-2 gap-6 xl:grid-cols-3 ">
          {map(items, (techno: Skills) => {
            return (
              <motion.li
                whileHover={{ scale: 1.2 }}
                key={techno.langage}
                className="col-span-1 divide-y divide-gray-200 rounded-lg border-2 bg-white shadow-xl text-center h-[11.5rem]"
              >
                <div className="flex w-full align-center space-x-6 py-6 px-3 lg:px-3 ">
                  <div className="flex-1 truncate ">
                    <div className="flex items-center space-x-3 h-8">
                      <h3 className="inline-block flex-shrink-0 px-2 py-0.5 lg:text-xl text-base font-medium text-black w-full">
                        {techno.langage}
                      </h3>
                    </div>
                    <div className="flex items-center justify-center h-16">
                      <Image src={techno.image} width={50} height={50} className="object-cover" alt="pictures" />
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="relative w-full h-8 flex items-center">
                    <div className={`absolute h-4 rounded-full w-full bg-gray-200`}></div>
                    <div
                      style={{ width: techno.width }}
                      className={`absolute h-4 rounded-full bg-gradient-to-r from-amber-400 to-rose-600 `}
                    ></div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SkillsList;
