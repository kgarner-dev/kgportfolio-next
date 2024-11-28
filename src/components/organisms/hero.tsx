interface Content { headline: string, subheadline: string, text: string }

export function Hero( props: Content ) {
    return (
        <section className="max-w-wide mx-auto w-full h-1/2 px-5 flex">
            <div className="w-1/2 h-full flex flex-col items-start">
                <h1 className="text-7xl">{ props.headline }</h1>
                <h2 className="text-3xl">{ props.subheadline }</h2>
            </div>
            <div className="w-1/2 h-full flex items-end">
                <p>{ props.text }</p>
            </div>
        </section>
    )
}