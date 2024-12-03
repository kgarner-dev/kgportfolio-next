'use client'

import { useState, useEffect, use } from 'react';

export default function Project({ params }: { params: Promise<{ project: string }> }) {

    const [data, setData] = useState<any[]>([]);
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
        {data.map((item) => (
            <div key={item.id}>
                <h1>{ item.title }</h1>
                <p>{ item.description }</p>
            </div>
        ))}
       </div>
    )
}