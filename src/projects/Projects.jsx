// projects page

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import portrait from '../img/portrait.png'

//ICONS
import { FaLaptopCode } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";

export function Projects() {
const [web, setWeb] = useState([]);
const [design, setDesign] = useState([]);

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
        {web.map((project) => (
            <div key={project._id} className='border-black-1'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.linkToWeb}>
                    {project.impletented ? <CgBrowser /> : <CgBrowser style={{ color: 'grey' }} />}
                </a>
                <a href={project.linkToCode}>
                    <FaLaptopCode />
                </a>
                <div>
                    {project.languages.length > 0 && (
                        <div>
                            {project.languages.map((language) => (
                                <p>{language}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ))}

        <br />

        <div>
            <h2 className="title text-left uppercase">My Design Projects</h2>
            {design.map((project) => (
                <div key={project._id} className='flex flex-col'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
);
            };

