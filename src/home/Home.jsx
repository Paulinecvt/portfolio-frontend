import portrait from "../img/portrait.png";
import { Link } from "react-router-dom";
import { Timeline } from "../components/Timeline";

// ICONS
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuPaperclip } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";

export const Home = () => (
  <div className="flex flex-col w-full pb-6 mb-6">
    <div className="flex flex-col items-center bg-white">
      <div className="cover flex flex-col items-center">

        <div className='flex flex-col'>
          <img src='https://i.ibb.co/D5qMWFq/Capture-d-e-cran-2024-10-08-a-12-40-04.png' className='h-36 w-auto' />
        </div>

        <div className="flex flex-row gap-8 items-center">
          <section className="flex flex-col justify-start">
            <h3 className="jobs">Social Sciences Content Expertise</h3>
            <h3 className="jobs">Prompt Engineering</h3>
            <h3 className="jobs">Creative Writing for AI Training</h3>
          </section>
          <section className="flex flex-col justify-center">
            <img src={portrait} alt="portrait" className="w-48 flex" />
          </section>
          <section className="flex flex-col justify-end text-right">
            <h3 className="jobs">En/Fr Translator & Evaluator</h3>
            <h3 className="jobs">Harmful & Safety Content Writing</h3>
            <h3 className="jobs">Fact-checking & Content Validation</h3>
          </section>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="flex flex-col bg-white w-3/5">
      <h2 className="title text-left uppercase">About Me</h2>
      <p className="text-left text-justify">
        I am a 29-year-old creative mind, sociology bachelor,
        passionate about social sciences and communication. Most of all, 
        I’m a passionate freelance professional with a deep curiosity 
        for new technologies, always eager to learn quickly and adapt 
        to fresh challenges. My expertise lies in artificial intelligence, 
        with a strong focus on inclusivity. I believe that technology should 
        be accessible to everyone and truly reflect the diversity of our 
        world. I bring this vision to life in every project I work on, 
        collaborating creatively to design innovative and inclusive solutions.
      </p>
      <br />
      <p className="text-left text-justify">
        In my personal life, I live, explore, and immerse myself in forms and 
        colors. I have a deep and constant interest in the arts, travel, and 
        discovering cultures unfamiliar to me. Curious and passionate, I 
        approach every project with enthusiasm and dedication, while nurturing 
        an insatiable need to learn every day. My background in social sciences 
        has strengthened this curiosity, helping me better understand cultural 
        expressions and their impact on our world. Each experience fuels my 
        desire to learn more and embrace new perspectives.
      </p>
    </div>

    <br />
    <br />
    <br />

    <div className="flex flex-row bg-white justify-between items-center">
      {/* Left Column for "Want to see more?" */}
      <div className='flex flex-col justify-start'> 
        <h2 className="title text-left uppercase">Want to see more?</h2>

        <div className='flex flex-row items-center gap-2'>
          <Link to="/projects">
            <CiViewList />
          </Link>
          <p>See my Dev and UX/UI Projects</p>
        </div>

        <div className='flex flex-row items-center gap-2'>
          <Link to="/projects">
            <CiViewList />
          </Link>
          <p>Learn more about LLM and my values</p>
        </div>

        <div className='flex flex-row items-center gap-2'>
          <a href="https://drive.google.com/file/d/1bjUl5VAjwVPuhZg6N8gkRsZTn6YMomV8/view?usp=drive_link">
            <LuPaperclip />
          </a>
          <p>Get my complete resume</p>
        </div>

        <div className='flex flex-row items-center gap-2'>
          <a href="https://www.linkedin.com/in/paulinechevalliot">
            <FaLinkedin />
          </a>
          <p>Visit my LinkedIn and read more about me</p>
        </div>

        <div className='flex flex-row items-center gap-2'>
          <a href="https://github.com/Paulinecvt">
            <FaGithub />
          </a>
          <p>Visit my Github</p>
        </div>
      </div>

      {/* Right Column for text */}
      <div className='flex flex-col w-3/5 self-en m-0 p-0'> {/* Adjust width as needed */}
        <h2 className="title text-right uppercase">About my work</h2>
        <p className="text-right text-justify">
          My need for discovery pushed me to the medical field from the moment I
          was able to work. I began as a medical secretary before the legal age in
          my country to become a paramedic. I worked hand in hand with my teammates
          and patients, and during Covid, I took a major interest in social
          sciences, communication, and media. I began a Sociology Licence, mention
          Social Sciences, and changed career.
        </p>
        <br />
        <p className="text-right text-justify">
          After moving to Paris, I took the time to explore the many museums the
          city offers and developed a deep interest in the link between design and
          the effectiveness of the message. I began a bootcamp of UX/UI Design
          with Iron Hack and got the chance to work on projects, be part of a team,
          and meet clients who trusted me and my skills. During this bootcamp, I
          learned how to adapt a design to a client using the Design Thinking Process. 
          I also had the fortune to learn some basics in Web Development and meet 
          some alumni from the Web Dev course. I took the opportunity, after many tries 
          and personal training with HarvardX and its lessons 'Introduction to Web Development' 
          and 'Introduction to Computer Sciences,' to enter the Web Dev Bootcamp I wanted to.
        </p>
        <br />
        <p className="text-right text-justify">
          It was a surprise for me to arrive in the international session of this
          bootcamp. I had to adapt and learn from scratch, in another language,
          but I managed without taking a step back. I learned the AGILE methodology,
          how to use my design skills in my development, how to build websites, and
          actually took pleasure in solving problems. I discovered a new way to
          express my creativity and my need to learn every day by confronting
          errors and infinite loops. But as with every step of my career until
          then, I never gave up and continued to improve myself through hard work,
          long hours of code, and numerous monologues. In March, I obtained my diploma.
          In April, I had three weeks to catch up on my semester and prepare for my final
          exams. In June, I earned my Bachelor's degree.
        </p>
        <br />
        <p className="text-right text-justify">
          Today, I train artificial intelligence systems as a Freelancer.
          My journey into Web Development sparked a growing fascination with 
          technology, while my passion for social sciences drives me to explore 
          its impact on society and users’ daily lives. My career history has 
          deeply influenced my approach to work, focusing on ethics and inclusivity. 
          I specialize in English/French translation and in reviewing “Harmful and 
          Safety” content, as well as studying global guidelines and legal 
          frameworks.

          My goal? To make AI accessible to as many people as possible, in an 
          ethical, inclusive, and safe way, helping users in their everyday lives 
          and broadening their global perspectives. 
        </p>
      </div>
    </div>

    <Timeline />
    <br />
  </div>
);
