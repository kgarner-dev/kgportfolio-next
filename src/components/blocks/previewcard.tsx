import Link from "next/link";
import "./styles/previewcard.scss";

interface Content { 
    title: string, 
    tag: string, 
    description: string, 
    date: string, 
    thumbnail: string, 
    cardSize: string, 
    url: string 
}

export function PreviewCard( props: Content ) {
    return (
        <Link 
            className={ `preview__card ${ props.cardSize }__card` } 
            href={ `/projects/${ props.url }` }
            style={{ backgroundImage: `url("${ props.thumbnail }")` }}
        >
            <div className="card__headline">
                <h2>{ props.title }</h2>
                <p>{ props.date }</p>
                <p>{ props.tag }</p>
            </div>

            <p className="card__description">{ props.description }</p>
        </Link> 
    );
}