// Components
import Card from "./components/Card"
import LogoCarousel from "./components/LogoCarousel"
import PostCard from "./components/PostCard"
import Carousel from "./components/MainCarousel"
import Link from "next/link"

// Lib
import { client } from "@/app/lib/client"

const industrias = [
    {
        name: "Automotriz",
        icon: "/img/icon-automotriz.svg"
    },
    {
        name: "Comunicaciones",
        icon: "/img/icon-comunicaciones.svg"
    },
    {
        name: "Consumidor y minorista",
        icon: "/img/icon-consumidor.svg"
    },
    {
        name: "Fabricación e industria",
        icon: "/img/icon-fabricacion.svg"
    },
    {
        name: "Servicios financieros",
        icon: "/img/icon-servicios.svg"
    },
    {
        name: "Medios",
        icon: "/img/icon-medios.svg"
    },
    {
        name: "Tecnología",
        icon: "/img/icon-tecnologia.svg"
    },
    {
        name: "Tecnología Médica",
        icon: "/img/icon-tecnologiamedica.svg"
    },
]

export default async function Home() {
    const { posts, carousel, clients } = await client.fetch(
        `
            {
                "posts": *[_type == 'post'],
                "carousel": *[_type == 'carousel'],
                "clients": *[_type == 'clients']
            }
        `
    )

    return (
        <>
            <Carousel slides={carousel} />
            <section className="industrias">
                <h2 className="section-title">Industrias en las que nos especializamos</h2>
                <div className="card-wrapper">
                    { industrias.map(({ name, icon }) => (
                        <Card
                            key={name}
                            title={name}
                            icon={icon}
                        />
                    )) }
                </div>
            </section>

            <LogoCarousel clients={clients} />

            <section className="posts">
                <h2 className="section-title">Nuestra experiencia</h2>
                <div className="posts-wrapper">
                    { posts?.map(({ _id, image, title }) => (
                        <PostCard
                            key={_id}
                            id={_id}
                            image={image}
                            title={title}
                        />
                    )) }
                </div>
            </section>

            <section className="contactanos">
                <div className="contactanos-wrapper">
                    <h3>Contactanos</h3>
                    <div className="links">
                        <Link href="#">Futuros clientes</Link>
                        <Link href="#">Futuros colaboradores</Link>
                    </div>
                </div>
            </section>
        </>
    )
}