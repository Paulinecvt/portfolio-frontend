// projects page

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

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
    <div>
        <h1>Projects</h1>
        <h2>Web</h2>
        <ul>
            {web.map((project) => (
                <li key={project._id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
        <h2>Design</h2>
        <ul>
            {design.map((project) => (
                <li key={project._id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    </div>

)

}

