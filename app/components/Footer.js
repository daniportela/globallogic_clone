"use client"

import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material"
import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <Image src="/img/logo.svg" width={250} height={100} />
            <div className="nav-links">
                <a href="">Servicios</a>
                <a href="">Acerca de</a>
                <a href="">Trabajo</a>
                <a href="">Privacidad</a>
                <a href="">Perspectivas</a>
                <a href="">Compliance & Disclosures</a>
                <a href="">Carreras</a>
                <a href="">Contacto</a>
            </div>

            <div className="social-links">
                <div className="social-links-wrapper">
                    <LinkedIn />
                    <Facebook />
                    <YouTube />
                    <Instagram />
                </div>
                <span>2023 Copyright GlobalLogic Inc. <br /> All rights reserved.</span>
            </div>
        </footer>
    )
}