// Lib
import { urlFor } from "@/app/lib/client"
import Link from "next/link"

export default function PostCard({ id, title, image }) {
    return (
        <article className="post-card">
            <img src={urlFor(image).url()} alt={title} />
            <span>{title}</span>
            <Link href={`/posts/${id}`}>Leer más</Link>
        </article>
    )
}