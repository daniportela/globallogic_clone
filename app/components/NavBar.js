"use client"

import Image from "next/image"
import { Language, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"

import { useState } from "react"
import Link from "next/link"

export default function NavBar() {
    const [dataVisible, setDataVisible] = useState(false)

    function handleMenuToggle() {
        setDataVisible(prevState => !prevState)
    }

    return (
        <header>
            <Link href="/">
                <Image src="/img/logo.svg" width={180} height={50} alt="GlobalLogic" />
            </Link>

            <button className="mobile-nav-toggle" onClick={handleMenuToggle}>
                {dataVisible
                    ? <KeyboardArrowRight fontSize="large"/>
                    : <KeyboardArrowLeft fontSize="large"/>
                }
            </button>

            <nav className="primary-nav" data-visible={`${dataVisible}`}>
                <ul>
                    <li>Servicios</li>
                    <li>Trabajo</li>
                    <li>Perspectivas</li>
                    <li>Carreras</li>
                    <li>Sobre nosotros</li>
                    <li>Contacto</li>
                </ul>
                
                <button className="language-change">
                    <Language />
                </button>
            </nav>

            <div>
                <button className="contact">Contacto</button>
                <button className="language-change">
                    <Language fontSize="large" />
                </button>
            </div>
        </header>
    )
}