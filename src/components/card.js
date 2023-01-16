const Card = ({ children }) => {
  return (
    <div className='flex flex-col sm:flex-row p-2 gap-1 md:w-1/2 w-full'>
      <div className=' bg-white border-4  rounded-lg border-black p-3 flex flex-col'>
        {children}
      </div>
    </div>
  );
};

export default Card;
