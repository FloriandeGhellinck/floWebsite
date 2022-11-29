import SkillsList from './list';

const SkillsSection = () => {
  const codeLanguages = [
    { langage: 'Javascript', width: '85%', id: 1000 },
    { langage: 'HTML', width: '90%', id: 1001 },
    { langage: 'React', width: '90%', id: 1002 },
    { langage: 'NodeJS', width: '70%', id: 1003 },
    { langage: 'TypeScript', width: '60%', id: 1004 },
    { langage: 'NextJS', width: '80%', id: 1005 },
    { langage: 'Tailwind', width: '90%', id: 1006 },
  ];

  const databasesLanguages = [
    { langage: 'Heroku', width: '60%', id: 1007 },
    { langage: 'Hasura', width: '60%', id: 1008 },
    { langage: 'MongoDB', width: '60%', id: 1009 },
    { langage: 'GraphQL', width: '70%', id: 1010 },
    { langage: 'Figma', width: '60%', id: 1011 },
  ];

  return (
    <div className='bg-white flex flex-col items-center  '>
      <div className='gap-5'>
        <SkillsList title='Technologies' items={codeLanguages} />
        <SkillsList title='Other related skills' items={databasesLanguages} />
      </div>
    </div>
  );
};

export default SkillsSection;
