import "./styles/pagebody.scss";
import React from "react";

interface Content {
    content: { [tag: string]: string }[];
}

export function PageBody( props: Content ) {
    return (
        <section className="body__content">
            {props.content.map((item, index) => {
                    const [tag, content] = Object.entries(item)[0];

                    if (tag == "img" && typeof content == "object") {
                        return <img key={index} {...content} />;
                    }

                    if (tag === "a" && typeof content === "object") {
                        const { children, ...attrs } = content;
                        return <a key={index} {...attrs}>{children}</a>;
                    }

                    return React.createElement(tag, { key: index }, content);
                })}
        </section>
    )
}