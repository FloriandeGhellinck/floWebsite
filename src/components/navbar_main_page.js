import { motion } from 'framer-motion';

const Navbar = ({ children, handleClickScroll, setOpenModal }) => {
  return (
    <>
      <nav>
        <NavContent
          handleClickScroll={handleClickScroll}
          setOpenModal={setOpenModal}
        />
        <div className=''> {children}</div>
      </nav>
    </>
  );
};

const NavContent = ({ handleClickScroll, setOpenModal }) => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 fixed w-full z-10 '>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 justify-center sm:justify-end '>
            <div className='sm:ml-6 backdrop-blur-sm'>
              <div className='flex align-right space-x-4 hover:cursor-pointer'>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className='text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium '
                  onClick={handleClickScroll}
                >
                  About Me
                </motion.a>

                {/* <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  href='/projects'
                  className='text-gray-700  dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Projects
                </motion.a> */}

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  onClick={() => setOpenModal(true)}
                  className='text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  href='/projects'
                  className='text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  href='/'
                  className='text-gray-700 dark:text-white hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  home
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
