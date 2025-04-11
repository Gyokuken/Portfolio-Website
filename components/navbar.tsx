"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Calendar } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "$ home", href: "#home" },
    { name: "$ projects", href: "#projects" },
    { name: "$ about", href: "#about" },
    { name: "$ contact", href: "#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    if (elem) {
      const offset = 80 // Adjust this value based on your navbar height
      const elementPosition = elem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsOpen(false)
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "dark-overlay py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold text-[#00ff95]" onClick={(e) => scrollToSection(e, "#home")}>
          Amyzz_zz<span className="text-white">_</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#8892b0] hover:text-[#00ff95] transition-colors duration-300 relative group font-mono text-sm"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff95] transition-all duration-300 group-hover:w-full opacity-50"></span>
            </Link>
          ))}
          <motion.a
            href="https://calendly.com/amitanshulal1681/quickchat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff95] hover:text-white transition-colors duration-300"
            aria-label="Schedule a meeting"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://calendly.com/amitanshulal1681/quickchat", "_blank");
            }}
          >
            <Calendar size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/Gyokuken"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff95] hover:text-white transition-colors duration-300"
            aria-label="GitHub"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/Gyokuken", "_blank");
            }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/amitanshu-lal-611248244"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff95] hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://linkedin.com/in/amitanshu-lal-611248244", "_blank");
            }}
          >
            <Linkedin size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00ff95] hover:text-white transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 dark-overlay py-3 md:hidden"
            >
              <div className="container mx-auto px-4 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#8892b0] hover:text-[#00ff95] transition-colors duration-300 font-mono text-sm"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
