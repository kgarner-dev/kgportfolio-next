import "./styles/masthead.scss";
import Link from "next/link"

interface Content {
    title: string,
    description: string,
    date: string,
    masthead: string
}

export function Masthead( props: Content ) {
    return (
        <section className="masthead" style={{ backgroundImage: `url("${ props.masthead }")` }}>
            <div className="masthead__headline">
                <Link href="/">← Back Home</Link>
                <h1>{ props.title }</h1>
                <p>{ props.date }</p>
            </div>

            <p className="masthead__text">{ props.description }</p>
        </section>
    )
}