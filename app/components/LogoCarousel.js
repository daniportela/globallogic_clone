"use client"

// Components
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import ClientRow from "./ClientRow"

// Hooks
import { useRef } from "react"

// Client
import { urlFor } from "../lib/client"

export default function LogoCarousel({ clients }) {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll();


  
    const xLeft = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])
    const xRight = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])

    return (
      <section className="clients">
          <div className="row-wrapper">
            <motion.div style={{ x: xLeft }} className="client-row">
                { clients.slice(0, Math.ceil(clients.length / 2)).map(client => (
                    <Image key={client.name} src={urlFor(client.image).url()} width={150} height={150} alt={client.name} />
                )) }
            </motion.div>
            <motion.div style={{ x: xRight }} className="client-row">
                { clients.slice(Math.ceil(clients.length / 2)).map(client => (
                    <Image key={client.name} src={urlFor(client.image).url()} width={150} height={150} alt={client.name} />
                )) }
            </motion.div>
          </div>
      </section>
    )
}