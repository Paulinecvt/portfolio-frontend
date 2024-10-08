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
        <h1 className="name uppercase m-0 p-0">Pauline Cvt</h1>

        <div className="flex flex-row gap-8 items-center">
          <section className="flex flex-col justify-start">
            <h3 className="jobs">Social Sciences Content Expertise</h3>
            <h3 className="jobs">Prompt Engeenering</h3>
            <h3 className="jobs">Creative Writing for AI Training</h3>
          </section>
          <section className="flex flex-col justify-center">
            <img src={portrait} alt="portrait" className="w-48 flex" />
          </section>
          <section className="flex flex-col justify-end">
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
    <div className="flex flex-col bg-white w-2/4">
      <h2 className="title text-left uppercase">About Me</h2>
      <p className="text-left">
        I am a 29 years old creative mind, sociology bachelor,
        passionated by social sciences and communication. Most of all, 
        I’m a passionate freelance professional with a deep curiosity 
        for new technologies, always eager to learn quickly and adapt 
        to fresh challenges. My expertise lies in artificial intelligence, 
        with a strong focus on inclusivity. I believe that technology should 
        be accessible to everyone and truly reflect the diversity of our 
        world. I bring this vision to life in every project I work on, 
        collaborating creatively to design innovative and inclusive solutions.
      </p>
      <br />
      <p className="text-left">
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

    <div className="flex flex-col w-2/4 justify-end bg-white self-end">
      <h2 className="title text-right uppercase">About my work</h2>
      <p className="text-right">
        My need of discovery pushed me to the medical field from the moment I
        was able to work. I began by medical secretary before the legal age in
        my country to become paramedic. I worked hand in hand with my teammates
        and patients, when during Covid I took a major interest in social
        sciences, communication and medias. I began a Sociology Licence, mention
        Social Sciences, and changed career.
      </p>
      <br />
      <p className="text-right">
        After moving to Paris, I took the time to explore the many museums the
        city proposes, and took a deep interest into the link between design and
        the effectiveness of the message. I began a bootcamp of UX/UI Design
        with Iron Hack and got the chance to work on projects, being the member
        of a team, and meet clients actually trusting me and my skills. During
        this bootcamp, I learnt how to adapt a design to a client by using the
        Design Thinking Process. I also got the luck to be taught some basics in
        Web Development, and meet some of the alumni of the Web Dev cursus. I
        took the opportunity, after many tries and a personal training with
        HarvardX and its lessons 'Introduction to Web Development' and
        'Introduction to Computer Sciences', to enter in the Web Dev Bootcamp I
        wanted to.
      </p>
      <br />
      <p className="text-right">
        It was a surprise for me to arrive in the international session of this
        bootcamp. I had to adapt and learn from scratch, in another language,
        but I managed without taking a step back. I learn the AGILE methodology,
        how to use my design skills in my development, how to build websites and
        actually took pleasure to solve problems. I discovered a new way to
        express my creativity and my need to learn every day being confronted
        with errors and infinite loops. But as every step of my career until
        then, I never gave up and continued to improve myself by a lot of hard
        work, long hours of code, and quantity of monologues.{" "}
      </p>
      <br />
      <p className="text-right">
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
    <Timeline />
    <br />
    <div className="flex justify-start flex-col">
      <h2 className="title text-left uppercase">Want to see more ?</h2>

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
        <a href="https://drive.google.com/file/d/1XCE_umMIKSnXxnVklcoRwFvIiKMhSBQl/view?usp=drive_link">
          <LuPaperclip />
        </a>
        <p>Get my complete resume</p>
      </div>

      <div className='flex flex-row items-center gap-2'>
        <a href="https://www.linkedin.com/in/paulinechevalliot">
          <FaLinkedin />
        </a>
        <p>Visit my Linkedi and read more about me</p>
      </div>

      <div className='flex flex-row items-center gap-2'>
        <a href="https://github.com/Paulinecvt">
          <FaGithub />
        </a>
        <p>Visit my Github</p>
      </div>

    </div>
  </div>
);
