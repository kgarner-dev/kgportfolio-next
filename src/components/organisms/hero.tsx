import Link from "next/link";
import { Button } from "../atoms/button";

interface Content { headline: string, subheadline: string, text: string }

export function Hero( props: Content ) {
    return (
        <section className="max-w-wide mx-auto w-full md:h-1/2 px-5 flex flex-col md:flex-row">
            <div className="w-full h-full flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
                <h1 className="text-4xl md:text-7xl">{ props.headline }</h1>
                <h2 className="text-2xl md:text-3xl">{ props.subheadline }</h2>
            </div>
            <div className="w-full h-full flex flex-col justify-end mt-5 md:w-1/2 text-center md:text-left md:mt-0">
                <p>{ props.text }</p>
                <div className="flex flex-col mt-5 md:flex-row gap-3">
                    <Link href="/about">
                    <Button
                        variant="secondary"
                        className="text-base text-white bg-primary hover:bg-accent dark:bg-secondary dark:hover:bg-accent"
                    >
                        About Me
                    </Button>
                    </Link>
                    <Link href="resume">
                    <Button
                        variant="secondary"
                        className="text-base text-white bg-primary hover:bg-accent dark:bg-secondary dark:hover:bg-accent"
                    >
                        Resume
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}