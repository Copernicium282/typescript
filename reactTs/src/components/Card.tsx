import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}

//write optional and default val at end
export function Card({title, children, footer}: CardProps){
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    )
}