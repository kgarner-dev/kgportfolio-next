import Link from "next/link";
import { Button } from "../atoms/button";

interface Content { headline: string, subheadline: string, text: string }

export function Hero( props: Content ) {
    return (
        <section className="max-w-wide mx-auto w-full h-1/2 px-5 flex">
            <div className="w-1/2 h-full flex flex-col items-start">
                <h1 className="text-7xl">{ props.headline }</h1>
                <h2 className="text-3xl">{ props.subheadline }</h2>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-end">
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