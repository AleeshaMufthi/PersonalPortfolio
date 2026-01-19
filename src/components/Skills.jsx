import React from 'react'
import { Code, Palette, Laptop, Server, Database, Cloud } from 'lucide-react';

const Skills = () => { 
  const skillsCategories = [
    {
      title: "Frontend Development",
      description: "Building interactive user interfaces with modern frameworks and libraries.",
      icon: <Laptop className="w-10 h-8" />,
      technologies: ["React.js", "CSS3", "Redux", "HTML5", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs.",
      icon: <Server className="w-10 h-8" />,
      technologies: ["Node.js", "Express.js", "REST API", "Authentication", "Authorization"],
    },
    {
      title: "Database Management",
      description: "Designing and implementing efficient database structures.",
      icon: <Database className="w-10 h-8" />,
      technologies: ["MongoDB", "MySQL","PostgreSQL"],
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user experiences.",
      icon: <Palette className="w-10 h-8" />,
      technologies: ["Responsive Design", "Prototyping", "Figma"],
    },
    {
      title: "Deployment",
      description: "Automating workflows and deploying applications to production.",
      icon: <Cloud className="w-10 h-8" />,
      technologies: ["Git/GitHub", "Vercel", "AWS", "Amplify"],
    },
    {
      title: "Programming Languages",
      description: "Multiple programming languages.",
      icon: <Code className="w-10 h-8" />,
      technologies: ["JavaScript", "TypeScript", "React", "HTML", "CSS"],
    },
  ];
  return (
         
           <section id="skills" className="py-20 bg-white"> {/* Changed background and text color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Skills</h2>
          </div>

          {/* Grid for 2 columns on medium, 3 columns on large screens for categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-gray-600 mr-4">{category.icon}</div> {/* Icon for category */}
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{category.description}</p>
             <ul className="text-md grid grid-cols-2 gap-x-4 gap-y-2"> {/* Use grid for 2 columns within the list */}
                  {category.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center text-gray-800">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></span> 
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills
