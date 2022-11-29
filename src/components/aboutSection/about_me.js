const AboutMe = () => {
  return (
    <div className=' text-black  font-poppins'>
      <div className='flex flex-col text-left m-5'>
        <div className='m-1'>
          <p>
            {' '}
            My Name is <span className='font-bold'>Florian</span>, I'm 27 years
            old.{' '}
          </p>

          <p>
            As a tech-lover, I started my journey at Cowboy after accounting
            studies. I loved their product and the connectivity around it. After
            one year, I became Customer Success repair lead. <br />
            Even if I loved the company and the product, I wished a more tech
            related job. This is why I started a{' '}
            <span className='font-bold'>coding bootcamp </span>at La Capsule in
            March 22.
          </p>
          <p>
            After my bootcamp, I started an internship at Embie. I developed
            small internal projects and I spent most of my time at doing some
            trainings on Udemy.
          </p>
          <p>
            Passionated and curious about technology and development, I'm
            looking for new opportunities in the tech industry.
          </p>
          <p>
            {' '}
            I'm currently JavaScript oriented, but I'm open for any coding
            technology.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
