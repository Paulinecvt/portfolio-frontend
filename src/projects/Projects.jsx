// projects page

import React from 'react';


//ICONS
import { FaLaptopCode } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";
import '../index.css';

export const Projects = () => (
    <div>
        <div className='flex flex-col'>
            <h2 className="title text-left uppercase">My Web Projects</h2>
            <p>Little introduction to cut the page.</p>
            <br/>

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
                <h2 className="title text-left uppercase">My Design Projects</h2>
                <p>Little introduction to cut the page.</p>
            <br/>
                <div className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6`}>
                    <div className='flex flex-col w-3/5 justify-center'>
                        <br/>
                        <h3 className='projecttitle uppercase'>Design Project Title</h3>
                        <br/>
                        <p className='text-justify'>This is the description of the design project. It showcases creativity and design principles applied to the project.</p>
                        <br/>
                        <div className='flex flex-row gap-6 justify-center'>
                            <p>This design project link is not accessible anymore. Please refer to the images to appreciate the work.</p>
                            <FaLaptopCode style={{ color: 'grey', fontSize: '28px' }} />
                        </div>
                        <br/>
                        <div className='flex flex-row gap-4 justify-center flex-wrap'>
                            <p className='bg-slate-200 pr-4 pl-4'>Design Tools</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <a href='design-image.com' target="_blank" rel="noopener noreferrer">
                            <img src='design-image.com' alt='Design Project' className='h-56 w-auto' />
                        </a>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
);


