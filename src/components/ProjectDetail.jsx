import { ChevronLeft, Github } from "lucide-react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

import bb1 from '../assets/bb1.png'
import bb2 from '../assets/bb2.png'
import bb3 from '../assets/bb3.png'
import bb4 from '../assets/bb4.png'
import bb5 from '../assets/bb5.png'
import bb6 from '../assets/bb6.png'
import bb7 from '../assets/bb7.png'
import bb8 from '../assets/bb8.png'
import gw1 from '../assets/gw1.png'
import gw2 from '../assets/gw2.png'
import gw3 from '../assets/gw3.png'
import gw4 from '../assets/gw4.png'
import gw5 from '../assets/gw5.png'
import gw6 from '../assets/gw6.png'
import gw7 from '../assets/gw7.png'
import gw8 from '../assets/gw8.png'
import gw9 from '../assets/gw9.png'
import ttb1 from '../assets/ttb1.png'
import ttb2 from '../assets/ttb2.png'
import tp1 from '../assets/tp1.png'

const projectsData = {
  "brain-booster": {
    name: "Brain Booster",
    description:
      "A full-stack e-learning platform designed to deliver a high-quality educational experience by connecting passionate students with dedicated tutors through a role-based system.",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS EC2",
      "Nginx",
      "WebRTC",
    ],

    integrations: [
      "JWT-based role authentication",
      "Secure payment gateway",
      "Video meeting integration",
      "Real-time chat",
      "Quiz & certification system",
    ],

    keyFeatures: [
      "Role-based views (Admin, Tutor, Student)",
      "Secure authentication & authorization",
      "Video calls with tutors",
      "Real-time chat system",
      "Quiz-based certifications",
      "Payment & course enrollment",
    ],

    technicalHighlights: [
      "Clean Architecture with separation of concerns",
      "Scalable REST APIs",
      "CORS-secured API layer",
      "Deployed on AWS EC2 with Nginx & SSL",
    ],

    role:
      "Individually owned and developed the complete product lifecycle — system design, backend APIs, frontend UI, security, deployment, and testing.",

    images: [
      bb1, bb2, bb3, bb5, bb7, bb8
    ],
    github: "https://github.com/AleeshaMufthi/Learning-front",
  },

  "grew-it-up": {
    name: "Grew It Up",
    description:
      "A server-side rendered e-commerce platform for selling premium branded decor assets, focused on performance, security, and seamless user experience.",

    techStack: [
      "Node.js",
      "Express.js",
      "EJS",
      "Bootstrap",
      "MongoDB",
      "Nginx",
      "Git",
    ],

    integrations: [
      "OTP-based authentication (Nodemailer)",
      "Wallet-based checkout",
      "Invoice generation",
      "Order tracking system",
    ],

    keyFeatures: [
      "Admin & Customer dashboards",
      "Secure OTP-based login",
      "Wallet-based rapid checkout",
      "Product catalog management",
      "Order tracking & invoices",
    ],

    technicalHighlights: [
      "SSR multi-page architecture",
      "Session-based authentication",
      "Hosted on AWS EC2 with Nginx & Certbot SSL",
    ],

    role:
      "Designed and developed the complete SSR application independently, including backend, frontend templates, authentication, and deployment.",

    images: [
      gw1, gw2, gw3, gw4, gw5, gw6, gw7, gw8, gw9
    ],
    github: "https://github.com/AleeshaMufthi/Grew-It-Up",
  },

  "ttb": {
    name: "Tours & Travels (TTB)",
    description:
      "A fully responsive static trip planner website built with React and Tailwind CSS as part of a company technical assignment.",

    techStack: ["React", "Tailwind CSS"],

    integrations: [],

    keyFeatures: [
      "Static informational pages",
      "Smooth UI animations",
      "Fully responsive layout",
    ],

    technicalHighlights: [
      "Component-driven UI design",
      "Clean Tailwind utility usage",
      "Optimized build for fast load time",
    ],

    role:
      "Implemented the complete UI independently as part of a professional task assignment.",

    images: [
      ttb1, ttb2
    ],
    github: "https://github.com/AleeshaMufthi/ToursandTravels-React",
  },

  "travel-buddy": {
    name: "Travel Buddy",
    description:
      "An AI-powered trip planning application that provides personalized travel suggestions based on user preferences.",

    techStack: ["React", "Convex", "Clerk"],

    integrations: [
      "AI-based trip recommendations",
      "Authentication using Clerk",
      "Realtime backend using Convex",
    ],

    keyFeatures: [
      "AI-powered travel suggestions",
      "Secure authentication",
      "Realtime data updates",
    ],

    technicalHighlights: [
      "Serverless real-time backend using Convex",
      "Secure auth & user management via Clerk",
    ],

    role:
      "Handled end-to-end development including frontend, authentication, and AI integration.",

    images: [
      tp1,
    ],
    github: "https://github.com/AleeshaMufthi/Trip-planner",
  },
}


const Section = ({ title, children }) => (
  <div className="mb-12
      translate-y-6
      animate-sectionFade">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
)

const ProjectDetails = () => {

  const navigate = useNavigate()
  const { slug } = useParams()
  const project = projectsData[slug]

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" })
}, [])

  const goBackToProjects = () => {
    navigate("/#projects")
  }

  if (!project) {
    return <div className="p-10">Project not found</div>
  }

  return (
    <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="max-w-5xl mx-auto px-6 py-20"
>
    <div className="max-w-5xl mx-auto px-6 py-20 leading-[120%] md:leading-[108%] font-['Be_Vietnam'] tracking-[-0.03em] animate-fadeInUp">
{/* Header */}
<div className="relative mb-14">

  {/* Back Button */}
  <button
    onClick={goBackToProjects}
    className="absolute -left-14 top-4 p-2 rounded-full
               hover:bg-gray-200 transition
               hover:-translate-x-1 transition-transform"
    title="Back to Projects"
  >
    <ChevronLeft className="w-7 h-7 text-black" />
  </button>

  {/* Title + GitHub */}
  <div className="flex items-center justify-between gap-6">
    <h1 className="text-5xl font-bold">
      {project.name}
    </h1>

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 top-10 rounded-full bg-white text-black border border-gray-400
                   hover:bg-white hover:text-black
                   hover:scale-110 transition"
        title="View Source Code"
      >
        <Github className="w-7 h-7" />
      </a>
    )}
  </div>

  {/* Description (MOVED OUT) */}
  <p className="text-gray-800 mt-6 text-xl max-w-3xl">
    {project.description}
  </p>
</div>



      {/* Tech Stack */}
      <Section className="text-xl" title="Tech Stack & Integrations">
        <div className="flex flex-wrap gap-3 mt-5">
          {[...project.techStack, ...project.integrations].map((item) => (
            <span
              key={item}
              className="px-5 py-3 text-md bg-gray-200 rounded-full text-black"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      {/* Key Features */}
      <Section title="Key Features">
        <ul className="list-disc mt-4 pl-6 space-y-2 text-gray-800 text-lg">
          {project.keyFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Section>

      {/* Technical Highlights */}
      <Section title="Technical Highlights">
        <ul className="list-disc mt-4 pl-6 space-y-2 text-gray-800 text-lg">
          {project.technicalHighlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

      {/* Role */}
      <Section title="My Role">
        <p className="text-gray-800 text-lg">
          {project.role}
        </p>
      </Section>

      {/* Images */}
      <Section title="Project Screens">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {project.images.map((img) => (
            <img
              key={img}
              src={img}
              alt={project.name}
              className="shadow"
            />
          ))}
        </div>
      </Section>
    </div>
    </motion.div>
  )
}

export default ProjectDetails
