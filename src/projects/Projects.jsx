// projects page

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

//ICONS
import { FaLaptopCode } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";
import './projects.css';

export function Projects() {
const [web, setWeb] = useState([]);
const [design, setDesign] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/web/`)
    .then((response) => {
        console.log(response.data);
        setWeb(response.data);
        setLoading(false);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/design/`)
    .then((response) => {
        console.log(response.data);
        setDesign(response.data);
        setLoading(false);
    })
    .catch((error) => {
        console.log(error);
    });
}, []);

return (
    <div className='flex flex-col'>
        <h2 className="title text-left uppercase">My Web Projects</h2>
        <br/>
        <br/>
        <br/>
        {loading && <p>Loading projects from database...</p>}

        {web.map((project, index) => (
            <div key={project._id} className={`container flex flex-row border-b-2 pb-6 m-2 gap-12 h-5/6 ${index !== web.length - 1 ? '' : 'border-b-0'}`}>
                <div className='flex flex-col w-3/5 justify-center'>
                    <br/>
                <h3 className='event uppercase'>{project.title}</h3>
                <br/>
                <p className='text-justify'>{project.description}</p>
                <br/>
                <div className='flex flex-row gap-6 justify-center'>
                {project.linkToWeb ? (
                    <a href={project.linkToWeb}>
                        <CgBrowser style={{ color: 'black', fontSize: '28px' }} />
                    </a>
                ) : (
                    <CgBrowser style={{ color: 'grey', fontSize: '28px' }} />
                )}
                {project.linkToCode ? (
                    <a href={project.linkToCode}>
                        <FaLaptopCode style={{ color: 'black', fontSize: '28px' }} />
                    </a>
                ) : (
                    <FaLaptopCode style={{ color: 'grey', fontSize: '28px' }} />
                )}
                </div>
                <br/>
                <div>
                    {project.languages.length > 0 && (
                        <div  className='flex flex-row gap-4 justify-center flex-wrap'>
                            {project.languages.map((language, index) => (
                                <p key={index} className='bg-slate-200 pr-4 pl-4' >{language}</p>
                            ))}
                        </div>
                    )}
                </div>
                </div>
                <div className='flex flex-col justify-center'>
                {project.images.length > 0 && project.images.map((image, index) => (
                    <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={project.title} className='h-56 w-auto' />
                    </a>
                ))}
                </div>
            </div>
        ))}

        <br />
        <h2 className="title text-right uppercase">My Design Projects</h2>
        <br/>
        <br/>
        <br/>
        {design.map((project, index) => (
            <div key={project._id} className={`container flex flex-row border-b-2 pb-6 m-2 gap-4 h-5/6 ${index !== design.length - 1 ? '' : 'border-b-0'}`}>
                <div className='flex flex-col justify-center'>
                {project.images.length > 0 && project.images.map((image, index) => (
                    <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={project.title} className='h-56 w-auto' />
                    </a>
                ))}
                </div>
                <div className='flex flex-col w-3/5 h-auto justify-center'>
                    <br/>
                <h3 className='event text-end uppercase'>{project.title}</h3>
                <br/>
                <p className='text-end'>{project.description}</p>
                <br/>
                <div className='flex flex-row gap-6 justify-center'>
                {project.linkToWeb ? (
                    <a href={project.linkToWeb}>
                        <CgBrowser style={{ color: 'black', fontSize: '28px' }} />
                    </a>
                ) : (
                    <CgBrowser style={{ color: 'grey', fontSize: '28px' }} />
                )}
                {project.linkToCode ? (
                    <a href={project.linkToCode}>
                        <FaLaptopCode style={{ color: 'black', fontSize: '28px' }} />
                    </a>
                ) : (
                    <FaLaptopCode style={{ color: 'grey', fontSize: '28px' }} />
                )}
                </div>
                <br/>
                <div>
                    {project.languages.length > 0 && (
                        <div  className='flex flex-row gap-4 justify-center flex-wrap'>
                            {project.languages.map((language, index) => (
                                <p key={index} className='bg-slate-200 pr-4 pl-4' >{language}</p>
                            ))}
                        </div>
                    )}
                </div>
                </div>
            </div>
        ))}
    </div>
);
            };

