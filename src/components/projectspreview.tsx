'use client'

import React, { useState, useEffect } from 'react';
import { PreviewCard } from './blocks/previewcard';
import "./styles/projectpreview.scss"

export function ProjectsPreview() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('/content/projects.json');
            const jsonData = await response.json();
            setData(jsonData.filter((project: { feature: boolean; }) => project.feature == true));
        };

        fetchData();
    }, []);

    return (
        <section className="preview__container">
        <div className="preview">
            {data.map((item) => (
                <PreviewCard key={item.id} title={item.title} tag={item.tag} description={item.description} date={item.date} thumbnail={item.thumbnail} cardSize={item.card_size} url={item.url} />
            ))}

            <PreviewCard key={999} title={"View All Projects"} tag={""} description={"Be on the lookout for more projects featured on this page."} date={""} thumbnail={"https://utfs.io/f/C3h9qu5XgJvHVbj5uQqW8bhg7kDjcYUI5le2ME3qfydFB04N"} cardSize={"small"} url={""} />
        </div>
    </section>
    );
}