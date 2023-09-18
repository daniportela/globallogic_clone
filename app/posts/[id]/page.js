// Lib
import { client, urlFor } from "@/app/lib/client"

// Components
import Image from "next/image"

export default async function Post({ params }) {
    const postId = params.id
    const [post] = await client.fetch("*[_type == 'post' && _id == $postId]{..., author-> {...}}", { postId })

    console.log(post)

    return (
        <>
            <section className="post-hero" style={{ background: `url(${urlFor(post.image).url()}) no-repeat center`, backgroundSize: "cover" }}>
                <h1>{post.title}</h1>
            </section>

            <section className="post-content">
                <p>{post.content}</p>
                <div className="author-card">
                    <Image src={urlFor(post.author.profilepic).url()} width={120} height={120} />
                    <h2>{post.author.name}</h2>
                    <span>{post.author.role} at {post.author.company}</span>
                </div>
            </section>
        </>
    )
}