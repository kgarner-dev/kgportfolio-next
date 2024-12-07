import "./styles/hero.scss";
import Link from "next/link";

interface Content { headline: string, subheadline: string, text: string }

export function Hero( props: Content ) {
    return (
        <section className="hero">
            <div className="hero__headline">
                <h1>{ props.headline }</h1>
                <h2>{ props.subheadline }</h2>
            </div>
            <div className="hero__text">
                <p>{ props.text }</p>

                <div className="hero__btns">
                    <Link className="btn" href="/about">About Me</Link>
                    <Link className="btn" href="/resume">Resume</Link>
                </div>
            </div>
        </section>
    );
}