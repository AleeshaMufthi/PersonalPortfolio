import React from "react"
import { Github, ExternalLink } from "lucide-react"
// import dating from '../assets/Dating.jpg'
// import learn from '../assets/E-Learning.jpg'
// import event from '../assets/Event.jpg'
// import plant from '../assets/Plant.jpg'

const projects = [
  {
    title: "Brain Booster",
    description:
      "A full-stack e-learning application with authentication, payments, and admin dashboard.",
    image: "/src/assets/Brainbooster.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/AleeshaMufthi/Learning-front",
    live: "#",
  },
  {
    title: "Grew It Up",
    description:
      "An E-Commerce Application with real-time updates and team workflows.",
    image: "/src/assets/Grewitup.png",
    tech: ["Ejs", "Node", "MongoDB"],
    github: "https://github.com/AleeshaMufthi/Grew-It-Up",
    live: "#",
  },
  {
    title: "TTB",
    description:
      "A fully designed Static Trip planner site",
    image: "/src/assets/TripPlanner.png",
    tech: ["React"],
    github: "https://github.com/AleeshaMufthi/ToursandTravels-React",
    live: "https://toursand-travels-react-6nij.vercel.app/home",
  },
  {
    title: "Travel Buddy",
    description:
      "Find perfect travel match with AI Features",
    image: "/src/assets/Travelbuddy.png",
    tech: ["Convex", "Clerk"],
    github: "https://github.com/AleeshaMufthi/Trip-planner",
    live: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold mb-4">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
           <div
  key={project.title}
  className="group relative overflow-hidden border border-gray-500 hover:border-gray-400 transition-all duration-300"
>
  {/* Image */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300" />

  {/* Hover Content */}
  <div className="absolute inset-0 flex flex-col justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h3 className="text-2xl font-semibold mb-2">
      {project.title}
    </h3>

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

    {/* Links */}
    <div className="flex items-center gap-6">
      <a
        href={project.github}
        className="flex items-center gap-2 text-sm hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-4 h-4" />
        Code
      </a>

      {/* <a
        href={project.live}
        className="flex items-center gap-2 text-sm hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="w-4 h-4" />
        Live
      </a> */}
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
