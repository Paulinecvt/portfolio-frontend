import portrait from '../img/portrait.png';
import { IoIosMail } from "react-icons/io";
import { MdOutlineVoicemail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuPaperclip } from "react-icons/lu";


export const Contact = () => (
    <div>
        <div className='cover flex flex-col items-center'>
            <h1 className='name uppercase m-0 p-0'>Pauline Chevalliot</h1>

            <div className="flex flex-row gap-8 items-center">
                <section className='flex flex-col justify-start'>
                    <h3 className='jobs'>UX Writer</h3>
                    <h3 className='jobs'>UX/UI Designer</h3>
                </section>
                <section className='flex flex-col justify-center '>
                    <img src={portrait} alt="portrait" className="w-48 flex"/>
                </section>
                <section className='flex flex-col justify-end'>
                    <h3 className='jobs'>Frontend Developer</h3>
                    <h3 className='jobs'>Backend Developer</h3>
                </section>
            </div>
        </div>
        <br/>
        <br/>
        <br/>

        <div className="contact flex flex-row bg-white justify-around">

            <div className='flex flex-row items-center gap-2'>
                <a href="mailto:paulinecvt.wd@gmail.com?subject=Mail from PaulineCVT-Portfolio"><IoIosMail /></a>
                <p className='text-left'>Mail me</p> 
            </div>

            <div className='flex flex-row items-center gap-2'>
                <a href="tel:(+33)611404422"><MdOutlineVoicemail /></a>
                <p className='text-left'>Phone me</p> 
            </div>

            <div className='flex flex-row items-center gap-2'>
            <a href='https://www.linkedin.com/in/paulinechevalliot'><FaLinkedin /></a>
                <p className='text-left'>Linkedin me</p> 
            </div>

            <div className='flex flex-row items-center gap-2'>
            <a href='https://github.com/Paulinecvt'><FaGithub /></a>
                <p className='text-left'>Github me</p> 
            </div>

            <div className='flex flex-row items-center gap-2'>
            <a href='https://drive.google.com/file/d/1C1kAHlORHRdvJPFhOIjqSkZCYTHme4lp/view?usp=sharing'><LuPaperclip /></a>
                <p className='text-left'>Get my resume</p> 
            </div>
     
        </div>
    </div>
);
