"use client";

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'

import { Project } from '@/app/types';

function DummyPage() {
    const [projects, setProjects]  = useState<AxiosResponse<Project[]>['data']>([] as Project[]);

    useEffect(() => {
        axios.get<Project[]>('/api/projects').then((res) => {
            setProjects(res.data);
            console.log(res);
        })
    }, [])
  return (
    <div>
        <h1>Projects</h1>
        <ul>
            {projects.map((project) => (
                <li key={project.id}>{project.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default DummyPage

