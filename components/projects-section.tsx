"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

type ProjectTag = "All" | "Web" | "Mobile" | "Blockchain" | "Design" | "AI"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: ProjectTag[]
  demoLink?: string
  githubLink?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network with Math",
    description: "Implementation of neural networks from scratch with mathematical foundations and visualizations.",
    image: "/projects/neural-network.jpg",
    tags: ["Python", "NumPy", "Mathematics", "Machine Learning"],
    category: ["AI", "All"],
    demoLink: "#",
    githubLink: "https://github.com/Gyokuken/Neural-network-with-math",
  },
  {
    id: 2,
    title: "Flashcard App",
    description: "Interactive flashcard application for efficient learning and memorization.",
    image: "/projects/flashcard.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: ["Web", "All"],
    demoLink: "#",
    githubLink: "https://github.com/Gyokuken/Flashcard-App",
  },
  {
    id: 3,
    title: "Valentine's Day Application",
    description: "A creative and interactive Valentine's Day themed web application.",
    image: "/projects/valentine.jpg",
    tags: ["React", "CSS", "Animations"],
    category: ["Web", "All"],
    demoLink: "#",
    githubLink: "https://github.com/Gyokuken/Valentines-Day-Application",
  },
  {
    id: 4,
    title: "Email Category Classifier",
    description: "Machine learning model for automatic email categorization and organization.",
    image: "/projects/email-classifier.jpg",
    tags: ["Python", "Machine Learning", "NLP"],
    category: ["AI", "All"],
    demoLink: "#",
    githubLink: "https://github.com/Gyokuken/Email-Category-Classifier",
  },
  {
    id: 5,
    title: "Resolution Enhancement of Solar Magnetograms",
    description: "AI-powered enhancement of solar magnetogram images for better analysis.",
    image: "/projects/solar-magnetogram.jpg",
    tags: ["Python", "Deep Learning", "Image Processing"],
    category: ["AI", "All"],
    demoLink: "#",
    githubLink: "https://github.com/Gyokuken/Resolution-Enhancement-of-Solar-Magnetograms",
  },
  {
    id: 6,
    title: "Weather Application",
    description: "Real-time weather tracking application with detailed forecasts and alerts.",
    image: "/projects/weather-app.jpg",
    tags: ["React", "API Integration", "Weather Data"],
    category: ["Web", "All"],
    demoLink: "#",
    githubLink: "https://github.com/Gyokuken/Weather-Application",
  },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectTag>("All")
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects)

  const handleFilterChange = (filter: ProjectTag) => {
    setActiveFilter(filter)
    if (filter === "All") {
      setVisibleProjects(projects)
    } else {
      setVisibleProjects(projects.filter((project) => project.category.includes(filter)))
    }
  }

  const filterOptions: ProjectTag[] = ["All", "Web", "Mobile", "Blockchain", "Design", "AI"]

  return (
    <section className="py-20 bg-[#0f1729]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="cyber-card p-6 flex flex-col space-y-5"
              >
                <div className="relative img-wrapper h-48 w-full mb-4 rounded-md overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-[#00ff95]">{project.title}</h3>
                <p className="text-[#8892b0] leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-[#00ff95] bg-[rgba(0,255,149,0.1)] px-3 py-1 rounded-md text-sm font-medium border border-[rgba(0,255,149,0.3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#00ff95] transition-colors duration-300 flex items-center gap-2 font-medium"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#00ff95] transition-colors duration-300 flex items-center gap-2 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
