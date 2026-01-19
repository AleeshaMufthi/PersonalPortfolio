import React from 'react'
import react from '../assets/react.png'
import css3 from '../assets/CSS3..png'
import express from '../assets/Express..png'
import Git from '../assets/Git..png'
import Html5 from '../assets/HTML5..png'
import javascript from '../assets/JavaScript..png'
import mongodb from '../assets/MongoDB..png'
import nginx from '../assets/NGINX..png'
import node from '../assets/nodejs.jpg'
import redux from '../assets/Redux..png'
import typescript from '../assets/TypeScript..png'
import vite from '../assets/Vite.js..png'
import aws from '../assets/Aws.svg'
import next from '../assets/nextjs.avif'
import clerk from '../assets/clerk.png'
import convex from '../assets/convex.svg'
import psql from '../assets/PostgreSQL.png'
import mysql from '../assets/mysql.png'

const TechStack = () => {

      const skills = [
    { name: 'JavaScript', icon: javascript },
    { name: 'TypeScript', icon: typescript },
    { name: 'Node.js', icon: node },
    { name: 'Express.js', icon: express },
    { name: 'MongoDB', icon: mongodb },
    { name: 'React', icon: react },
    { name: 'Redux', icon: redux },
    { name: 'aws', icon: aws},
    { name: 'Next.js', icon: next},
    { name: 'Vite', icon: vite },
    { name: 'Clerk', icon: clerk},
    { name: 'Convex', icon: convex},
    { name: 'PostgreSQL', icon: psql},
    { name: 'MySQL', icon: mysql},
    { name: 'Git', icon: Git },
    { name: 'Nginx', icon: nginx },
    { name: 'HTML5', icon: Html5 },
    { name: 'CSS3', icon: css3 },
  ];
  
  return (
  <section id="skills" className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Stack</h2>
          </div>

         <div className="relative overflow-hidden w-full">
  <div className="flex w-max animate-marquee gap-8">
    
    {[...skills, ...skills].map((skill, index) => (
      <div
        key={index}
        className="p-5 rounded-lg flex flex-col items-center justify-center
                   hover:shadow-xl transition-all duration-300 transform hover:scale-110 min-w-[140px]"
      >
        <div className="mb-2 w-16 h-16 flex items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h3 className="text-sm font-semibold text-center text-gray-800">
          {skill.name}
        </h3>
      </div>
    ))}

  </div>
</div>

        </div>
      </section>
  )
}

export default TechStack
