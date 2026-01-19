import React from 'react'
import { Download } from 'lucide-react'

const AboutMe = () => {
  return (
         <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">About Me</h2>
          </div>

        <div className="max-w-8xl mx-auto">
         <div className="space-y-6 md:space-y-8 font-['Be_Vietnam'] font-normal text-[20px] md:text-[36px] leading-[120%] md:leading-[108%] max-w-5xl">
          <p>
            Self-taught full-stack developer with <span className="font-bold tracking-[-0.06em]">2+ years</span>of hands-on experience, 
                passionate about <span className="font-bold tracking-[-0.06em]">solving real-world problems</span>using modern web technologies.
          </p>
          <p>
            Skilled in <span className="font-bold tracking-[-0.06em]">Node.js, React, Next.js, TypeScript, 
                Express, MongoDB, PostgreSQL, Socket.io, WebRTC, AWS, and Git.</span> 
          </p>
          <p>
            My journey began during my <span className="font-bold tracking-[-0.06em]">Computer Applications degree </span>at <span className="font-bold tracking-[-0.06em]">MG University</span>, where project work sparked my love for building scalable, 
             maintainable applications. I enjoy working in
             <span className="font-bold tracking-[-0.06em]">fast-paced </span>environments, taking products from <span className="font-bold tracking-[-0.06em]">concept to deployment </span>, and <span className="font-bold tracking-[-0.06em]">collaborating with teams </span>
              to deliver <span className="font-bold tracking-[-0.06em]">high-performance </span>, user-focused solutions.
          </p>
          <p>Let's <span className="font-bold tracking-[-0.06em]">connect and explore</span> how we can innovate together!</p>
        </div>
      </div>
          

            <div className="animate-fade-in-right">
            
            <a
              href="/Aleesha_Mufthi_CV.pdf"
              download="Aleesha_Mufthi_CV.pdf"
              className="font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.06em] px-8 md:px-12 py-3 md:py-4 mt-8 inline-flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-6 h-6" />
              RESUME
            </a>


            </div>
          </div>

      </section>
  )
}

export default AboutMe
