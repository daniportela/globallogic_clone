"use client"

// Hooks
import { useState } from "react"

// Lib
import { urlFor } from "@/app/lib/client"

// Components
import { motion, AnimatePresence} from "framer-motion"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

const slideVariants = {
  hiddenTop: {
    y: "-100%",
    opacity: 0
  },
  hiddenBottom: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 1
    }
  }
}

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState("top")

    function handleNext() {
      setDirection("bottom")
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === slides.length ? 0 : prevIndex + 1
      )
    }

    function handlePrevious() {
      setDirection("top")
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
      )
    }

    function handleDotClick(index) {
        setDirection(index > currentIndex ? "top" : "bottom")
        setCurrentIndex(index)
    }

    return (
        <main className="carousel">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial={direction === "top" ? "hiddenTop" : "hiddenBottom"}
              animate="visible"
              exit="exit"
              className="slides-wrapper"
            >

              <motion.img
                src={urlFor(slides[currentIndex].image).url()}
              />
              
              <motion.div className="slide-content">
                <h1>{slides[currentIndex].title}</h1>
                <p>{slides[currentIndex].content}</p>
                <a href="">{slides[currentIndex].link}</a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="indicator">
            <div className="nextprev" onClick={handlePrevious}>
              <ExpandLess />
            </div>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}

            <div className="nextprev" onClick={handleNext}>
              <ExpandMore />
            </div>
          </div>
      </main>
    )
}