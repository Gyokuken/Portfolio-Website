"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Calendar, 
  MapPin, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Globe, 
  Github, 
  ExternalLink,
  Cpu,
  Brain,
  Code,
  Wifi,
  Blocks,
  MessageSquare
} from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "National Institute of Technology Delhi",
    role: "B.Tech in Computer Science",
    period: "2022 - Present",
    location: "New Delhi, India",
    type: "Education",
    logo: "/placeholder.svg?height=100&width=100",
    skills: ["Data Structures", "Algorithms", "Web Development"],
  },
  {
    id: 2,
    company: "Company A",
    role: "Software Engineering Intern",
    period: "Summer 2023",
    location: "Remote",
    type: "Internship",
    logo: "/placeholder.svg?height=100&width=100",
    skills: ["React", "Node.js", "MongoDB"],
  },
]

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Solidity", proficiency: 70 },
    { name: "Python", proficiency: 85 },
    { name: "C++", proficiency: 75 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 85 },
    { name: "Node.js", proficiency: 75 },
    { name: "Express.js", proficiency: 65 },
  ],
  Tools: [
    { name: "Git", proficiency: 98 },
    { name: "Docker", proficiency: 88 },
    { name: "Kubernetes", proficiency: 78 },
  ],
}

// Add type definition for SkillBar props
interface SkillBarProps {
  name: string;
  proficiency: number;
}

const projectsData = [
  {
    title: "Neural Network with Math",
    description: "Implementation of neural networks from scratch with mathematical foundations and visualizations.",
    image: "/projects/neural-network.jpg",
    tags: ["Python", "NumPy", "Mathematics", "Machine Learning"],
    github: "https://github.com/yourusername/neural-network",
    live: "https://your-neural-demo.com",
  },
  {
    title: "Flashcard App",
    description: "Interactive flashcard application for efficient learning and memorization.",
    image: "/projects/flashcard.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/flashcard-app",
    live: "https://your-flashcard-app.com",
  },
  {
    title: "Valentine's Day Application",
    description: "A creative and interactive Valentine's Day themed web application.",
    image: "/projects/valentine.jpg",
    tags: ["React", "CSS", "Animations"],
    github: "https://github.com/yourusername/valentine-app",
    live: "https://your-valentine-app.com",
  },
  {
    title: "Email Category Classifier",
    description: "Machine learning model for automatic email categorization using NLP techniques.",
    image: "/projects/email-classifier.jpg",
    tags: ["Python", "Machine Learning", "NLP", "scikit-learn"],
    github: "https://github.com/yourusername/email-classifier",
    live: "https://your-email-classifier.com",
  },
  {
    title: "Solar Magnetogram Enhancement",
    description: "AI-powered enhancement of solar magnetogram images for better scientific analysis.",
    image: "/projects/solar-magnetogram.jpg",
    tags: ["Python", "Deep Learning", "Image Processing", "PyTorch"],
    github: "https://github.com/yourusername/solar-magnetogram",
    live: "https://your-solar-magnetogram.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with detailed forecasts and interactive maps.",
    image: "/projects/weather-app.jpg",
    tags: ["React", "Next.js", "Weather API", "Maps"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://your-weather-dashboard.com",
  }
]

const expertiseData = [
  {
    title: "Data Analysis",
    description: "Comprehensive data analysis and visualization using modern tools and techniques.",
    icon: Cpu,
  },
  {
    title: "Machine Learning and Deep Learning",
    description: "Development and implementation of ML/DL models for various applications.",
    icon: Brain,
  },
  {
    title: "Web Development",
    description: "End-to-end web application development with modern frameworks and best practices.",
    icon: Code,
  },
  {
    title: "IoT",
    description: "Design and implementation of Internet of Things solutions and smart systems.",
    icon: Wifi,
  },
  {
    title: "Web3 Integration",
    description: "Seamless integration of Web3 technologies into existing applications and platforms.",
    icon: Blocks,
  },
  {
    title: "Technical Consultation",
    description: "Expert advice on technology stack selection, architecture design, and implementation strategies.",
    icon: MessageSquare,
  }
]

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <h2 className="section-title flex items-center justify-center gap-2">
          About Me
        </h2>
        
        {/* Education info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-[#00ff95]" />
            <span className="text-[#8892b0]">
              Sophomore in Computer Science at National Institute of Technology Delhi
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Rocket className="text-[#00ff95]" />
            <h3 className="text-2xl font-bold text-[#00ff95]">Hey, I'm Amitanshu!</h3>
          </div>
          
          <p className="text-[#8892b0]">
            A <span className="text-[#00ff95]">curious mind</span> exploring the worlds of <span className="text-[#00ff95]">machine learning</span> and <span className="text-[#00ff95]">web development</span>! 
            I enjoy building <span className="text-[#00ff95]">smart systems</span>, solving <span className="text-[#00ff95]">real-world problems</span>, 
            and constantly learning new things.
          </p>

          <p className="text-[#8892b0]">
            From <span className="text-[#00ff95]">deep learning models</span> to <span className="text-[#00ff95]">clean front-end interfaces</span>, I love turning 
            ideas into working projects. When I'm not coding, you'll probably catch 
            me playing guitar or cooking up the next side project.
          </p>

          <p className="text-[#8892b0]">
            Let's <span className="text-[#00ff95]">connect, build, and innovate</span>—because the <span className="text-[#00ff95]">
            future is digital, and I'm excited to be part of it!</span> 🚀 🔥
          </p>
        </div>

        {/* Education & Experience Section */}
        <div className="mt-16">
          <h2 className="section-title flex items-center justify-center gap-2">
            Education & Experience
          </h2>
          <div className="space-y-8">
            <div className="relative p-6 rounded-lg cyber-border">
              <div className="flex items-center gap-4 mb-2">
                <Image
                  src="/iit.png"
                  alt="IIT Delhi Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#00ff95]">B.Tech in Computer Science</h3>
                  <p className="text-[#8892b0]">National Institute of Technology Delhi</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#8892b0] mt-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-[#00ff95]" />
                  <span>2022 - Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-[#00ff95]" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Building2 size={16} className="text-[#00ff95]" />
                  <span>Education</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-md text-[#00ff95] border border-[#00ff95] bg-opacity-10">
                    Data Structures
                  </span>
                  <span className="px-2 py-1 text-xs rounded-md text-[#00ff95] border border-[#00ff95] bg-opacity-10">
                    Algorithms
                  </span>
                  <span className="px-2 py-1 text-xs rounded-md text-[#00ff95] border border-[#00ff95] bg-opacity-10">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-16">
          <h2 className="section-title flex items-center justify-center gap-2">
            My Expertise <span className="text-[#00ff95]">🛠️</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseData.map((item) => (
              <div key={item.title} className="cyber-card p-6 group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(139,167,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(0,255,149,0.1)] transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[rgb(139,167,255)] group-hover:text-[#00ff95] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[rgb(139,167,255)] group-hover:text-[#00ff95] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#8892b0]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16">
          <h2 className="section-title flex items-center justify-center gap-2">
            Featured Projects <span className="text-[#00ff95]">💻</span>
          </h2>
          <div id="projects" className="projects-container">
            <div className="projects-row">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card group p-6"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold text-[#00ff95]">
                      {project.title}
                    </h3>
                    <p className="text-[#8892b0] text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-md text-[#00ff95] border border-[#00ff95] bg-[rgba(0,255,149,0.1)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#8892b0] hover:text-[#00ff95] transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#8892b0] hover:text-[#00ff95] transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Gyokuken"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgb(139,167,255)] hover:text-[#00ff95] transition-colors duration-300"
          >
            <span>View More Projects</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-[#8892b0] group-hover:text-[#00ff95] transition-colors duration-300">{name}</span>
        <span className="text-[#00ff95]">{proficiency}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-[#00ff95]"
          style={{
            boxShadow: "0 0 10px rgba(0, 255, 149, 0.3)",
          }}
        />
      </div>
    </div>
  )
}
