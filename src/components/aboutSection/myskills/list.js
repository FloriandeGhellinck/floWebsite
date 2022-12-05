import { motion } from 'framer-motion';

const SkillsList = (technology) => {
  return (
    <>
      <div className='font-poppins text-black font-extrabold text-2xl text-center py-2'>
        <div className='m-3'>
          <h1>{technology.title}</h1>
        </div>
        <ul
          role='list'
          className='grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {technology.items.map((person) => (
            <motion.li
              whileHover={{ scale: 1.2 }}
              key={person.id}
              className='col-span-1 divide-y divide-gray-200 rounded-lg border-2 bg-white shadow-xl text-center '
            >
              <div className='flex w-full align-center space-x-6 p-6 '>
                <div className='flex-1 truncate '>
                  <div className='flex items-center space-x-3'>
                    <h3 className='inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xl font-medium text-black w-full'>
                      {person.langage}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='px-1'>
                <div className='relative w-full h-8 flex items-center'>
                  <div
                    className={`absolute h-4 rounded-full w-full bg-gray-200`}
                  ></div>
                  <div
                    style={{ width: person.width }}
                    className={`absolute h-4 rounded-full bg-gradient-to-r from-amber-400 to-rose-600 `}
                  ></div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillsList;
