// Components
import { motion } from "framer-motion"
import Image from "next/image"

// Lib
import { urlFor } from "../lib/client"

export default function ClientRow({ clients, direction, className }) {
    return (
        <motion.div style={{ direction }} className={className}>
            { clients.map(client => (
                <Image key={client.name} src={urlFor(client.image).url()} width={150} height={150} alt={client.name} />
            )) }
        </motion.div>
    )
}