import React from 'react'
import { Download } from 'lucide-react'
import award from '../assets/award.jpg'
import session from '../assets/session.jpg'
import office from '../assets/office.jpeg'
import cakecutting from '../assets/cake-cutting.jpeg'

const Experience = () => {
  return (
         
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-32">
            <h2 className="text-5xl font-bold mb-8 animate-fade-in-up">Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-28 items-center">

             <div className="relative h-64 md:h-80 lg:h-96 w-full animate-fade-in-left"> {/* Added relative sizing for the container */}
              {/* First Image - Slightly rotated counter-clockwise */}
                 <img
                src={award} // REPLACE with your first image path
                alt="About me 1"
                className="absolute w-3/4 h-3/4 object-cover rounded-xl shadow-xl
                           transform -rotate-6 top-0 -left-10 z-10"
              />
              {/* Second Image - Slightly rotated clockwise, overlapping */}
              <img
                src={session}
                alt="About me 2"
                className="absolute w-3/4 h-3/4 object-cover rounded-xl shadow-xl
                           transform rotate-3 bottom-0 right-0 z-20" // rotate-3 for slight clockwise rotation, z-20 brings it to front
              />
            </div>

            <div className="animate-fade-in-right">
              <h3 className="font-bold mb-6 space-y-6 md:space-y-8 font-['Be_Vietnam'] text-[20px] md:text-[36px] leading-[120%] md:leading-[100%] tracking-[-0.06em]">Professional Development Program, <span className='font-normal'>Brototype</span></h3>
              <p className="text-gray-800 mb-4 text-xl space-y-6 md:space-y-8 font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.04em]">
                Engaged in a structured self-learning program with a strong focus on hands-on projects, 
                personalized mentorship from industry professionals, weekly performance reviews, and real-world problem solving, 
                strengthening technical proficiency and a commitment to continuous improvement.
              </p>
            <span className='text-gray-800 text-lg mb-6 leading-[120%] md:leading-[108%] font-normal tracking-[-0.04em]'>September 2023 – June 2025</span>
            </div>

          </div>


            <div className="grid md:grid-cols-2 gap-32 items-center mt-32">

              <div className="animate-fade-in-right">
                
              <h3 className="mb-6 space-y-6 md:space-y-8 font-['Be_Vietnam'] text-[20px] md:text-[36px] leading-[120%] md:leading-[108%] font-bold tracking-[-0.06em]">Software Development Engineer, <span className='font-normal'>Algon Solutions</span></h3>
              <p className="text-gray-800 mb-4 text-xl space-y-6 md:space-y-8 font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.04em]">
                Building scalable web applications and delivering end-to-end solutions. 
                Actively involved in live client projects, focusing on performance, maintainability, and user experience. <br /> 
               Contributed to multiple production-ready projects through client interactions, and full-stack implementation using the MERN stack
              </p>
            <span className='text-gray-800 text-lg mb-6 leading-[120%] md:leading-[108%] font-normal tracking-[-0.04em]'>July 2025 – Present</span>
            </div>

             <div className="relative h-64 md:h-80 lg:h-96 w-full animate-fade-in-left"> {/* Added relative sizing for the container */}
              {/* First Image - Slightly rotated counter-clockwise */}
                 <img
                src={cakecutting} // REPLACE with your first image path
                alt="About me 1"
                className="absolute w-3/4 h-3/4 object-cover rounded-xl shadow-xl
                           transform -rotate-6 top-0 -left-10 z-10"
              />
              {/* Second Image - Slightly rotated clockwise, overlapping */}
              <img
                src={office}
                alt="About me 2"
                className="absolute w-3/4 h-3/4 object-cover rounded-xl shadow-xl
                           transform rotate-3 bottom-0 right-0 z-20" // rotate-3 for slight clockwise rotation, z-20 brings it to front
              />
            </div>

          </div>


        </div>
      </section>
  )
}

export default Experience
