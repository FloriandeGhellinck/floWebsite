import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import ContactMeModal from "./contactMeSection/contactMeModal";
import { ReactNode } from "react";

const Navbar: FC<{ openModal: boolean; setOpenModal: Dispatch<SetStateAction<boolean>>; children: ReactNode }> = ({
  children,
  openModal,
  setOpenModal,
}) => {
  return (
    <>
      <nav>
        <NavContent openModal={openModal} setOpenModal={setOpenModal} />
        <div className="justify-between flex flex-col"> {children}</div>
      </nav>
    </>
  );
};

const NavContent: FC<{ openModal: boolean; setOpenModal: Dispatch<SetStateAction<boolean>> }> = ({ openModal, setOpenModal }) => {
  const [shouldAppear, setShouldAppear] = useState(true);

  useEffect(() => {
    const yDifferenceAllowd = 100;

    let lastYPos = 0;
    let isGoingDown = true;
    let initialPosition = window.scrollY;

    const handleScroll = () => {
      const currentYPosition = window.scrollY;

      if (initialPosition - yDifferenceAllowd > currentYPosition || currentYPosition === 0) {
        setShouldAppear(true);
        initialPosition = currentYPosition;
      } else if (initialPosition + yDifferenceAllowd < currentYPosition) {
        setShouldAppear(false);
        initialPosition = currentYPosition;
      }
      const scrollDirection = currentYPosition > lastYPos;
      if (scrollDirection !== isGoingDown) initialPosition = currentYPosition;

      isGoingDown = scrollDirection;
      lastYPos = currentYPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          shouldAppear ? "opacity-100 transition-all duration-700 " : "opacity-0 translate-all duration-700"
        }  px-2 sm:px-6 lg:px-8 fixed w-full z-10 `}
      >
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-center ">
            <div className="sm:ml-6 backdrop-blur-sm">
              <div className="flex align-right space-x-4 hover:cursor-pointer">
                <ContactMeModal openModal={openModal} setOpenModal={setOpenModal} />
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  href="/"
                  className="text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  onClick={() => setOpenModal(true)}
                  className="text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  href="/projects"
                  className="text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
