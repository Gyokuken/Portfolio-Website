"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
  Mail,
  Phone,
  MapPin,
  Send,
  Brain,
  CircuitBoard,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import ProjectsSection from "@/components/projects-section"
import emailjs from '@emailjs/browser';
import { Terminal } from "@/components/Terminal"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [firstLineComplete, setFirstLineComplete] = useState(false)
  const [secondLineComplete, setSecondLineComplete] = useState(false)
  
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Initialize EmailJS
    emailjs.init("-sll3K81l6AmxAsOA");

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_t6p95cc',
        'template_uv5cqbg',
        e.currentTarget,
        '-sll3K81l6AmxAsOA'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1729] text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Hey! I'm Amitanshu
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-8 text-white">
              🚀 AI/ML and Web Enthusiast
            </h2>
            
            <Terminal
              text="Hey! I'm Amitanshu Lal — a curious mind exploring the worlds of machine learning and web development. I enjoy building smart systems, solving real-world problems, and constantly learning new things."
              className="mb-8"
              showPrompt={true}
              contentType="description"
              hideHeader={false}
            />

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-blue-600 text-white hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#111827]">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#0f1729]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-blue-500" />}
                title="Data Analysis"
                description="Comprehensive data analysis and visualization using modern tools and techniques."
              />
              <ServiceCard
                icon={<Brain className="w-10 h-10 text-indigo-500" />}
                title="Machine Learning and Deep Learning"
                description="Development and implementation of ML/DL models for various applications."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-blue-500" />}
                title="Web Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              <ServiceCard
                icon={<CircuitBoard className="w-10 h-10 text-indigo-500" />}
                title="IoT"
                description="Design and implementation of Internet of Things solutions and smart systems."
              />
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-blue-500" />}
                title="Web3 Integration"
                description="Seamless integration of Web3 technologies into existing applications and platforms."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-indigo-500" />}
                title="Technical Consultation"
                description="Expert advice on technology stack selection, architecture design, and implementation strategies."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-[#0f1729]">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Get In Touch</h2>

            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
              {/* Left Column - Contact Information */}
              <div className="w-full md:w-1/2 space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="text-indigo-400" size={24} />
                      <a
                        href="mailto:amitanshulal1681@gmail.com"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        amitanshulal1681@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-indigo-400" size={24} />
                      <a href="tel:+919041454703" className="text-gray-300 hover:text-white transition-colors">
                        +91 9041454703
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="text-indigo-400" size={24} />
                      <span className="text-gray-300">New Delhi, India</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/amitanshu-lal-611248244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded border border-gray-700 hover:border-indigo-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/Gyokuken"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded border border-gray-700 hover:border-indigo-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="mailto:amitanshulal1681@gmail.com"
                      className="w-12 h-12 flex items-center justify-center rounded border border-gray-700 hover:border-indigo-500 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="w-full md:w-1/2">
                <div className="p-8 rounded-lg border border-indigo-500/30 bg-black/40 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
                  <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-black/50 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                        className="w-full bg-black/50 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Your message"
                        required
                        className="w-full bg-black/50 border border-gray-800 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      ></textarea>
                    </div>
                    {submitStatus.type && (
                      <div className={`p-4 rounded-md ${
                        submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-[#111827]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/Gyokuken" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/amitanshu-lal-611248244" label="LinkedIn" />
            <SocialIcon icon={<Twitter />} href="https://x.com/KIRITO_PANDA" label="Twitter" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-blue-400 text-sm">
            <p>© {new Date().getFullYear()} Amitanshu. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

// Add type definition for ServiceCard props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-lg bg-[#111827] border border-gray-800 hover:border-indigo-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:amitanshulal1681@gmail.com" className="text-blue-400 hover:text-blue-300">
        amitanshulal1681@gmail.com
      </a>
    </div>
  )
}
