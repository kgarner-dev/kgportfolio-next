'use client'

import { Masthead } from '@/components/masthead';
import { PageBody } from '@/components/pagebody';
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
            <section key={item.id}>
                <Masthead title={ item.title } description={ item.description} date={ item.date } masthead={ item.masthead } skills={ item.skills }/>

                <PageBody content={ item.body } />
            </section>
        ))}
       </div>
    )
}