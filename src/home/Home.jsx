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
        <h1 className="name uppercase m-0 p-0">Pauline Chevalliot</h1>

        <div className="flex flex-row gap-8 items-center">
          <section className="flex flex-col justify-start">
            <h3 className="jobs">UX Writer</h3>
            <h3 className="jobs">UX/UI Designer</h3>
          </section>
          <section className="flex flex-col justify-center">
            <img src={portrait} alt="portrait" className="w-48 flex" />
          </section>
          <section className="flex flex-col justify-end">
            <h3 className="jobs">Frontend Developer</h3>
            <h3 className="jobs">Backend Developer</h3>
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
        I am a 28 years old creative mind, sociology student in my last year,
        passionated by social sciences and communication. Most, I am a full
        stack developer with a strengh interest for design and user experience.
        To meet my need to create an effective and well designed product, I have
        a background in UX/UI design and UX writing. I am looking for
        opportunities to work on projects that will allow me to combine my
        skills in design and development. I'm a digital nomad leaving in Paris,
        France, open to move abroad and discover new horizons. I am french
        native and english-speaker.
      </p>
      <br />
      <p className="text-left">
        In my personal life, I live, play and dream about forms and colors. I
        have interest in arts, travels and the discovery of cultures I don't
        know. I have plenty of interests and live my passions 100%. I am
        passionated about every thing I begin, read a lot, and have a strong
        need to learn all along my days.
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
        Today, I'd like to find a place where I can live my passions, continue
        to learn, and build websites I am proud of.
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
        <p>See my Projects</p>
      </div>

      <div className='flex flex-row items-center gap-2'>
        <a href="https://www.linkedin.com/in/paulinechevalliot">
          <FaLinkedin />
        </a>
        <p>Visit my Linkedin</p>
      </div>

      <div className='flex flex-row items-center gap-2'>
        <a href="https://github.com/Paulinecvt">
          <FaGithub />
        </a>
        <p>Visit my Github</p>
      </div>

      <div className='flex flex-row items-center gap-2'>
        <a href="https://drive.google.com/open?id=16HDWvozaap2iJZGw_1uW0sNf33x3ZpzM&usp=drive_fs">
          <LuPaperclip />
        </a>
        <p>Get my resume</p>
      </div>
    </div>
  </div>
);
