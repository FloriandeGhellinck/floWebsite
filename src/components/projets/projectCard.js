import Image from 'next/image';

const ProjectCard = (props) => {
  return (
    <div
      className={`w-3/12 h-96 border-2 border-black rounded-2xl flex flex-col justify-center items-center ${props.class}`}
    >
      <a className='relative'>
        <div className='h-screen flex items-center flex-col'>
          <h1 className='text-2xl'>TieBreak</h1>
          <Image
            src='/Capture d’écran 2022-12-20 à 09.58.38.png'
            className='object-cover border-2'
            alt='Developer Picture'
            width={250}
            height={150}
            //   layout='fill'
          />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

const projects = [
  {
    title: 'TieBreak',
    picture: '/Capture d’écran 2022-12-20 à 09.58.38.png',
    description: '',
    technos: 'React, Node, MongoDB',
  },
];
