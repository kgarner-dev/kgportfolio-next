import Link from "next/link";

interface Content { title: string, tag: string, description: string, date: string, thumbnail: string, cardSize: string, url:string }

export function PreviewCard( props: Content ) {
    return (
        <Link
            style={{ backgroundImage: `url('${ props.thumbnail }')` }}
            className={`p-4 bg-cover bg-no-repeat bg-center overflow-hidden rounded-xl duration-150 hover:shadow-xl preview-card ${ props.cardSize }-card flex flex-col justify-between`}
            href={`/projects/${ props.url }`}
        >
            <div className="grid grid-cols-2">
                <h2 className="text-xl text-white col-span-2 md:col-span-1">{ props.title }</h2>
                <p className="text-white col-span-2 md:col-span-1 md:text-right">{ props.date }</p>
                <p className="text-white col-span-2 md:col-span-1">{ props.tag }</p>
            </div>

            <p className="card-description text-white line-clamp-3">{ props.description }</p>
        </Link>
    )
}