'use client'

import { useState, useEffect, use } from 'react';

interface ProjectName {
    params:{
        project: string
    }
}

export default function Project( props: ProjectName ) {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('/content/projects.json');
            const jsonData = await response.json();
            setData(jsonData.filter( (project: { url: string | string[]; }) => project.url.includes(`${props.params.project}`) ));
        };

        fetchData();
    }, []);

    return (
       <div>
        {data.map((item) => (
            <div key={item.id}>
                <h1>{ item.title }</h1>
                <p>{ item.description }</p>
            </div>
        ))}
       </div>
    )
}