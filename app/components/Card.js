import Image from "next/image";

export default function Card({ title, icon }) {
    return (
        <article>
            <Image src={ icon } width={70} height={70} alt={title} />
            <span>{ title }</span>
        </article>
    )
}