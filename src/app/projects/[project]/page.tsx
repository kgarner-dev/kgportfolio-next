'use client'

import { Masthead } from '@/components/masthead';
import { useState, useEffect, use } from 'react';
import * as All from '@/components/custombody';

interface ProjectItem {
    id: string;
    title: string;
    description: string;
    date: string;
    masthead: string;
    skills: string[];
    body: keyof typeof All;
    url: string | string[];
}

export default function Project({ params }: { params: Promise<{ project: string }> }) {

    const [data, setData] = useState<ProjectItem[]>([]);
    const name = use(params)

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('/content/projects.json');
            const jsonData = await response.json();
            setData(jsonData.filter( (project: { url: string | string[]; }) => project.url.includes(`${[name.project]}`) ));
        };

        fetchData();
    }, []);

    return (
       <div>
         {data.map((item) => {
            const BodyComponent = All[item.body]; 
            
            return (
                <section key={item.id}>
                    <Masthead
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        masthead={item.masthead}
                        skills={item.skills}
                    />
                    {BodyComponent ? <BodyComponent /> : null}
                </section>
            );
            })}
       </div>
    )
}