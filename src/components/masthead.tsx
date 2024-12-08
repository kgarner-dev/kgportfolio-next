import "./styles/masthead.scss";
import Link from "next/link"
import React, { useState, useEffect } from 'react';

interface Content {
    title: string,
    description: string,
    date: string,
    masthead: string,
    skills: string[]
}

export function Masthead( props: Content ) {
    return (
        <section className="masthead" style={{ backgroundImage: `url("${ props.masthead }")` }}>
            <div className="masthead__headline">
                <Link href="/">← Back Home</Link>
                <h1>{ props.title }</h1>
                <p>{ props.date }</p>
            </div>

            <div className="masthead__text">
                <div className="masthead__skills">
                    {props.skills.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                <p>{ props.description }</p>
            </div>
        </section>
    )
}