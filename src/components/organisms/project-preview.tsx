'use client'

import React, { useState, useEffect } from 'react';
import { PreviewCard } from '../molecules/previewcards';
import "./project-preview.scss"

export function ProjectPreview() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('/content/projects.json');
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-wide mx-auto w-full py-10 px-5">
        <div className="preview">
            {data.map((item) => (
                <PreviewCard key={item.id} title={item.title} tag={item.tag} description={item.description} date={item.date} thumbnail={item.thumbnail} cardSize={item.card_size} url={item.url} />
            ))}
        </div>
        </div>
    )
}