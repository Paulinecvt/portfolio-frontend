import portrait from '../img/portrait.png';

export const Home = () => (
  <div className="flex flex-col items-center bg-white">
    
    <div className='cover flex flex-col items-center'>
      <h1 className='name uppercase m-0 p-0'>Pauline Chevalliot</h1>

      <div className="flex flex-row gap-8 items-center">
        <section className='flex flex-col justify-start'>
          <h3 className='jobs'>UX Writer</h3>
          <h3 className='jobs'>UX/UI Designer</h3>
        </section>
        <section className='flex flex-col justify-center'>
        <img src={portrait} alt="portrait" className="w-48 flex"/>
        </section>
        <section className='flex flex-col justify-end'>
          <h3 className='jobs'>Frontend Developer</h3>
          <h3 className='jobs'>Backend Developer</h3>
        </section>
      </div>
    </div>
  </div>
);
