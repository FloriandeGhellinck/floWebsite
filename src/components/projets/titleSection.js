const TitleProjectsDescription = (props) => {
  return (
    <div className={`flex justify-center my-5 `}>
      <h1 className='bg-gray-200 -skew-x-12 w-fit px-3 text-3xl'>
        {' '}
        {props.title}{' '}
      </h1>
    </div>
  );
};

export default TitleProjectsDescription;
