"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import Image from "next/image"

interface SlideProps {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

const slides: SlideProps[] = [
  {
    id: 1,
    title: "Serverless Web3 Blog",
    description: "Decentralized blogging platform with permanent storage on Arweave and crypto micropayments.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Firebase", "Arweave", "Web3"],
  },
  {
    id: 2,
    title: "Cross-Chain Bridge",
    description: "Secure bridge for asset transfers between different blockchain networks.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Cross-Chain", "Interoperability", "DeFi"],
  },
  {
    id: 3,
    title: "Decentralized Identity Solution",
    description: "Self-sovereign identity solution using blockchain technology.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["DID", "Identity", "Blockchain"],
  },
  {
    id: 4,
    title: "Solidity Code Generator",
    description: "Tool for rapid development and testing of secure smart contracts.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Solidity", "Smart Contracts", "Development"],
  },
]

export default function ParallaxSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const numberOfParticles = 20
  const particleYs = Array.from({ length: numberOfParticles }, (_, i) =>
    useTransform(scrollYProgress, [0, 1], [0, -100 * ((i % 3) + 1)]),
  )

  return (
    <div
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-blue-950 to-indigo-950"
    >
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y: smoothY }}>
        {Array.from({ length: numberOfParticles }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-600/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              y: particleYs[i],
            }}
          />
        ))}
      </motion.div>

      {/* Slider content */}
      <motion.div
        className="relative h-full w-full flex items-center justify-center"
        style={{
          opacity: smoothOpacity,
          scale: smoothScale,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/50"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{slides[currentSlide].title}</h3>
              <p className="text-lg text-blue-200 mb-6">{slides[currentSlide].description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {slides[currentSlide].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-300 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                >
                  →
                </button>
              </div>
            </motion.div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-400" : "bg-blue-800/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
