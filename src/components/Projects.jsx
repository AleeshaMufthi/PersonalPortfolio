import React from "react"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import brainbooster from '../assets/Brainbooster.png'
import grewitup from '../assets/Grewitup.png'
import tripPlanner from '../assets/TripPlanner.png'
import travelbuddy from '../assets/Travelbuddy.png'
import { useNavigate } from "react-router-dom"

const projects = [
  {
    title: "Brain Booster",
    description:
      "A full-stack E-learning application.",
    image: brainbooster,
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/AleeshaMufthi/Learning-front",
    live: "#",
    slug: "brain-booster",
  },
  {
    title: "Grew It Up",
    description:
      "An E-Commerce Application with real-time updates.",
    image: grewitup,
    tech: ["Ejs", "Node", "MongoDB"],
    github: "https://github.com/AleeshaMufthi/Grew-It-Up",
    live: "#",
    slug: "grew-it-up",
  },
  {
    title: "TTB",
    description:
      "A fully designed Static Trip planner website",
    image: tripPlanner,
    tech: ["React"],
    github: "https://github.com/AleeshaMufthi/ToursandTravels-React",
    live: "https://toursand-travels-react-6nij.vercel.app/home",
    slug: "ttb",
  },
  {
    title: "Travel Buddy",
    description:
      "Find perfect travel match with AI Features",
    image: travelbuddy,
    tech: ["Convex", "Clerk"],
    github: "https://github.com/AleeshaMufthi/Trip-planner",
    live: "#",
    slug: "travel-buddy",
  },
]

const Projects = () => {

   const navigate = useNavigate()

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
           <div
            key={project.title}
            className="group relative overflow-hidden hover:border-gray-400 transition-all duration-300"
          >
  {/* Image */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300" />

  {/* Hover Content */}
  <div className="absolute inset-0 flex flex-col justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    
    <div className="flex items-center gap-3 mb-2">
  <h3 className="text-2xl font-semibold">
    {project.title}
  </h3>

  {/* Arrow */}
  <button
    onClick={() => navigate(`/project/${project.slug}`)}
    className="  p-2 rounded-full bg-white text-black
  transform
  translate-y-3 opacity-0
  group-hover:translate-y-0 group-hover:opacity-100
  transition-all duration-300 ease-out
  hover:scale-110"
  >
    <ArrowUpRight className="w-6 h-6" />
  </button>
</div>

 
    

    <p className="text-sm text-gray-200 mb-4">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
