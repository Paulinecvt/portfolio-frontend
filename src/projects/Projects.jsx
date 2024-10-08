// projects page

import React from 'react';


//ICONS
import { FaLaptopCode } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";
import '../index.css';
import portrait from "../img/portrait.png";

export const Projects = () => (
    <div>




        <div className='flex flex-col'>

            <div>
            <h2 className="title text-left uppercase">My Web Projects</h2>
            <p>I have a strong foundation in web development gained through a bootcamp where I worked on both back-end and 
                front-end projects, primarily using React, Express, and Vite. Leveraging my design background, 
                I quickly took the lead on projects, emphasizing the importance of accessibility and sharing my knowledge with my peers. 
                This experience not only immersed me in the tech world but also sparked my interest in AI, which I began using daily to 
                enhance my work and creativity. Studying internationally presented numerous challenges, but it was an enriching 
                experience that broadened my perspective.</p>
            <br/>
            </div>
            <div>
            <h2 className="title text-left uppercase">My Design Projects</h2>
                <p>In UX/UI Design, I dove into the tech landscape, honing my creativity and passion for art and design. 
                    This phase allowed me to explore typography and color theory while uncovering crucial 
                    issues related to accessibility and inclusivity. I discovered tools like Figma and 
                    digital drawing, which enabled me to collaborate effectively with clients and develop 
                    user-centered designs.</p>
            <br/>
            </div>

            <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                <div className='flex flex-col w-3/5 justify-center'>
                    <br/>
                    <h3 className='projecttitle uppercase'>FullStyle - Website</h3>
                    <br/>
                    <p className='text-justify'> <em>Empowering developers to enhance web design through code-sharing ! </em></p>
                    <p className='text-justify'>FullStyle is a fully-featured web platform that connects to a back-end database, 
                        offering a comprehensive resource for developers to stylize their websites with ready-to-use code snippets. 
                        The site promotes a community-driven approach by providing user login functionality, public profiles, as 
                        well as a like and comment system to encourage collaboration. Additionally, users can upload images directly 
                        from their devices, offering more personalized and detailed styling examples. This project reflects my commitment 
                        to creating tools that foster inclusivity within developer communities, supporting individuals of varying skill 
                        levels to easily access resources and contribute to the growth of accessible web design.</p>
                    <br/>
                    <div className='flex flex-row gap-6 justify-center'>
                        <p>This project link is not accessible anymore. Please refer to the screenshots to 
                        appreciate the work.</p>
                        <FaLaptopCode style={{ color: 'grey', fontSize: '28px' }} />
                    </div>
                    <br/>
                    <div className='flex flex-row gap-4 justify-center flex-wrap'>
                        <p className='bg-slate-200 pr-4 pl-4'>React</p>
                        <p className='bg-slate-200 pr-4 pl-4'>Vite</p>
                        <p className='bg-slate-200 pr-4 pl-4'>Responsive Design</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <a href='https://ibb.co/12Z5cGT' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/VBVZ6YT/fullstyle-1.png' alt='FullStyle' className='h-56 w-auto' />
                    </a>
                    <a href='https://i.ibb.co/mhxPFCf/fullstyle-2.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/mhxPFCf/fullstyle-2.png' alt='FullStyle Mobile' className='h-56 w-auto' />
                    </a>
                    <a href='https://i.ibb.co/bQvCcvR/17.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/bQvCcvR/17.png' alt='FullStyle Details' className='h-56 w-auto' />
                    </a>
                </div>
            </div>

            <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                <div className='flex flex-col w-3/5 justify-center'>
                    <br/>
                    <h3 className='projecttitle uppercase'>Lavatory Legends - Website</h3>
                    <br/>
                    <p className='text-justify'><em>Promoting global restroom accessibility and inclusivity !</em> </p>
                    <p className='text-justify'>Lavatory Legends is a back-end powered web platform where users can share information 
                        about restrooms encountered across the globe. The project places a strong emphasis on 
                        inclusivity by highlighting accessible restrooms and providing critical details about 
                        their access, ensuring that all individuals, regardless of ability, can find the facilities 
                        they need. This initiative aligns closely with my values of social equity and my background 
                        in sociology, which drives my mission to create digital spaces that consider and promote 
                        the needs of marginalized groups. Lavatory Legends aspires to raise awareness of the importance 
                        of inclusive infrastructure, fostering a more accessible and designed world.</p>
                    <br/>
                    <div className='flex flex-row gap-6 justify-center'>
                        <p>This project link is not accessible anymore. Please refer to the screenshots to 
                        appreciate the work.</p>
                        <FaLaptopCode style={{ color: 'grey', fontSize: '28px' }} />
                    </div>
                    <br/>
                    <div className='flex flex-row gap-4 justify-center flex-wrap'>
                        <p className='bg-slate-200 pr-4 pl-4'>React</p>
                        <p className='bg-slate-200 pr-4 pl-4'>Vite</p>
                        <p className='bg-slate-200 pr-4 pl-4'>Responsive Design</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <a href='https://i.ibb.co/m5bQ6G5/lavatory-1.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/m5bQ6G5/lavatory-1.png' alt='Lavatory Legends' className='h-56 w-auto' />
                    </a>
                    <a href='https://i.ibb.co/3p7bRL7/lavatory-2.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/3p7bRL7/lavatory-2.png' alt='Lavatory Legends Mobile' className='h-56 w-auto' />
                    </a>
                    <a href='https://i.ibb.co/N3NWzpj/lavatory-3.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/N3NWzpj/lavatory-3.png' alt='Lavatory Legends Details' className='h-56 w-auto' />
                    </a>
                </div>
            </div>

            <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                <div className='flex flex-col w-3/5 justify-center'>
                    <br/>
                    <h3 className='projecttitle uppercase'>Nyearth - Online Game</h3>
                    <br/>
                    <p className='text-justify'> <em>A playful yet urgent reminder of environmental responsibility !</em> </p>
                    <p className='text-justify'>Inspired by the iconic Nyan Cat, Nyearth is a game that imagines 
                        a whimsical planet trying to escape pollution and harmful obstacles to delay its “overshoot day.” 
                        Players can choose between normal and hard modes, and upon completing the game, they are connected 
                        to a real-world environmental organization that raises awareness of ecological challenges. 
                        This project not only provides an engaging experience but also serves as an educational tool, 
                        encouraging players to reflect on modern ecological crises. It reflects my commitment to combining 
                        creativity with advocacy, promoting sustainability and environmental responsibility through inclusive and 
                        accessible game design.</p>
                    <br/>
                    <div className='flex flex-row gap-6 justify-center'>
                        <p>This project link is accessible.</p>
                        <a href='https://paulinecvt.github.io/Nyearth-game/' target="_blank" rel="noopener noreferrer">
                            <FaLaptopCode style={{ color: 'black', fontSize: '28px' }} />
                        </a>
                    </div>
                    <br/>
                    <div className='flex flex-row gap-4 justify-center flex-wrap'>
                        <p className='bg-slate-200 pr-4 pl-4'>React</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <a href='https://i.ibb.co/rvStHYZ/nyearth-1.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/rvStHYZ/nyearth-1.png' alt='Nyeart Game' className='h-56 w-auto' />
                    </a>
                    <a href='https://i.ibb.co/Pj4sJCf/nyearth-2.png' target="_blank" rel="noopener noreferrer">
                        <img src='https://i.ibb.co/Pj4sJCf/nyearth-2.png' alt='Nyearth Game' className='h-56 w-auto' />
                    </a>
                </div>
            </div>

            <br />
            <div>
                
                <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                    <div className='flex flex-col w-3/5 justify-center'>
                        <br/>
                        <h3 className='projecttitle uppercase'>21Days - Fictive</h3>
                        <br/>
                        <p className='text-justify'> <em>Fostering Healthy Habits through Gamification !</em> </p>
                        <p>The 21Days application is designed to support users in cultivating healthy habits through 
                            a gamified experience. The interface incorporates engaging challenges that encourage 
                            users to adopt new routines while fostering a sense of community by allowing them to 
                            share their progress with friends. The predominant use of green hues not only reinforces 
                            the theme of health and wellness but also creates an inviting and energizing atmosphere. 
                            This design emphasizes inclusivity by ensuring that all users, regardless of their 
                            background or tech-savviness, can easily navigate the app and participate in 
                            habit-forming challenges, making healthy living accessible for everyone.</p>
                        <br/>
                        <div className='flex flex-row gap-6 justify-center'>
                            <p>This design project is not accessible.</p>
                            <CgBrowser style={{ color: 'grey', fontSize: '28px' }} />
                        </div>
                        <br/>
                        <div className='flex flex-row gap-4 justify-center flex-wrap'>
                            <p className='bg-slate-200 pr-4 pl-4'>Figma</p>
                            <p className='bg-slate-200 pr-4 pl-4'>Procreate</p>
                        </div>
                        </div>
                    <div className='flex flex-col justify-center'>
                        <a href='https://i.ibb.co/Byshgmk/21Days-1.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/Byshgmk/21Days-1.png' alt='21Days Mobile' className='h-56 w-auto' />
                        </a>
                        <a href='https://i.ibb.co/LdDhpFk/21Days-2.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/LdDhpFk/21Days-2.png' alt='21Days Details' className='h-56 w-auto' />
                        </a>
                    </div>
                    </div>
                    
                
                    <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                <div className='flex flex-col w-3/5 justify-center'>
                        <br/>
                        <h3 className='projecttitle uppercase'>L'endroit par Fée - Wireframes</h3>
                        <br/>
                        <p className='text-justify'> <em>Enhancing Online Shopping for Pet Lovers !</em> </p>
                        <p>In this project, I created wireframes to improve the online store for a pet sitter who 
                            operates a boarding facility for animals, offering natural and suitable products for dogs, 
                            cats, and small pets. The primary objective was to design a clearer and more accessible website 
                            that caters to a diverse rural clientele, including various age groups. By focusing on 
                            intuitive navigation and user-friendly layouts, I aimed to simplify the shopping 
                            experience for all users, regardless of their technical expertise or familiarity with 
                            online shopping. This design underscores my commitment to inclusivity, ensuring that 
                            every pet owner can easily find and purchase the products that best meet their pets’ 
                            needs.</p>
                        <br/>
                        <div className='flex flex-row gap-6 justify-center'>
                            <p>This design project was not implemented as the owner of the website needed a web developper to make the changes.</p>
                            <CgBrowser style={{ color: 'grey', fontSize: '28px' }} />
                        </div>
                        <br/>
                        <div className='flex flex-row gap-4 justify-center flex-wrap'>
                            <p className='bg-slate-200 pr-4 pl-4'>Figma</p>
                            <p className='bg-slate-200 pr-4 pl-4'>Procreate</p>
                        </div>
                        </div>
                    <div className='flex flex-col justify-center'>
                        <a href='https://i.ibb.co/VMmJ9KS/lendroitparfee-1.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/VMmJ9KS/lendroitparfee-1.png' alt='Endroit par fée' className='h-56 w-auto' />
                        </a>
                    </div>
                    </div>

                    <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                <div className='flex flex-col w-3/5 justify-center'>
                        <br/>
                        <h3 className='projecttitle uppercase'>Let's Loot - Implemented</h3>
                        <br/>
                        <p className='text-justify'> <em>Empowering Small Creators with an Intuitive Marketplace !</em> </p>
                        <p>Let’s Loot is a marketplace design that was implemented in a now-defunct application 
                            dedicated to supporting small creators. The design features a scrolling interface that
                            allows for effortless navigation, ensuring users can browse and purchase items with ease. 
                            By incorporating demo screens and various sliding mechanisms, the design prioritizes 
                            usability, allowing for one-handed operation across diverse user demographics. 
                            This project embodies my dedication to inclusivity, ensuring that all individuals, 
                            regardless of their dexterity or experience with digital marketplaces, can enjoy a 
                            seamless shopping experience.</p>
                        <br/>
                        <div className='flex flex-row gap-6 justify-center'>
                            <p>This design project has been implemented, but the owner company stoped its activity (2024).</p>
                            <CgBrowser style={{ color: 'grey', fontSize: '28px' }} />
                        </div>
                        <br/>
                        <div className='flex flex-row gap-4 justify-center flex-wrap'>
                            <p className='bg-slate-200 pr-4 pl-4'>Figma</p>
                            <p className='bg-slate-200 pr-4 pl-4'>Procreate</p>
                        </div>
                        </div>
                    <div className='flex flex-col justify-center'>
                        <a href='https://i.ibb.co/n713yGL/letsloot-1.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/n713yGL/letsloot-1.png' alt='Lets loot presentation' className='h-56 w-auto' />
                        </a>
                        <a href='https://i.ibb.co/1nLKm42/letsloot-2.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/1nLKm42/letsloot-2.png' alt='Lets loot details' className='h-56 w-auto' />
                        </a>
                    </div>
                </div>

                <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                <div className='flex flex-col w-3/5 justify-center'>
                        <br/>
                        <h3 className='projecttitle uppercase'>Reddit Dark Mode - Redesign / Fictive</h3>
                        <br/>
                        <p className='text-justify'> <em>Enhancing Accessibility through Improved Contrast !</em> </p>
                        <p>In this project, I focused on redesigning the Reddit app to enhance accessibility 
                            for users with vision and reading challenges. By increasing the contrast within the 
                            dark mode, I aimed to create a more comfortable reading experience for individuals 
                            with visual impairments. The design exclusively utilizes shades of black and gray, 
                            ensuring that the text is easily distinguishable from the background, thereby reducing 
                            eye strain. This redesign not only prioritizes inclusivity but also reflects my 
                            commitment to creating digital spaces where all users can engage with content 
                            seamlessly and enjoyably.</p>
                        <br/>
                        <div className='flex flex-row gap-6 justify-center'>
                            <p>This design project was not implemented.</p>
                            <CgBrowser style={{ color: 'grey', fontSize: '28px' }} />
                        </div>
                        <br/>
                        <div className='flex flex-row gap-4 justify-center flex-wrap'>
                            <p className='bg-slate-200 pr-4 pl-4'>Figma</p>
                            <p className='bg-slate-200 pr-4 pl-4'>Procreate</p>
                        </div>
                        </div>
                    <div className='flex flex-col justify-center'>
                        <a href='https://i.ibb.co/c3sdsDg/Reddit-1.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/c3sdsDg/Reddit-1.png' alt='Reddit Redesign' className='h-56 w-auto' />
                        </a>
                        <a href='https://i.ibb.co/GH7HK5M/Reddit-2.png' target="_blank" rel="noopener noreferrer">
                            <img src='https://i.ibb.co/GH7HK5M/Reddit-2.png' alt='Reddit Inspo' className='h-56 w-auto' />
                        </a>
                    </div>
                </div>





            </div> 
        </div> 
        </div>
);


