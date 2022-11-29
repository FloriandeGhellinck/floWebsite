const Navbar = ({ children }) => {
  return (
    <>
      <nav>
        <NavContent />
        <div className='relative'> {children}</div>
      </nav>
    </>
  );
};

const NavContent = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 fixed w-full z-20 '>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 justify-center sm:justify-end '>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex align-right space-x-4 '>
                <a
                  href='#'
                  className='text-gray-700 hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  About Me
                </a>

                <a
                  href='#'
                  className='text-gray-700 hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Projects
                </a>

                <a
                  href='#'
                  className='text-gray-700 hover:bg-gradient-to-r from-amber-400 to-rose-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
