"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  XIcon,
  MapPin,
  Download,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import keyBoard from '../assets/keyboard.jpg'

import TechStack from "../components/TechStack"
import AboutMe from "../components/AboutMe"
import Skills from '../components/Skills'
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import { motion } from "framer-motion"
import Quote from "../components/Quote"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}


  return (
<div className="bg-white text-gray-900">
  {/* Navigation */}
  <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-8"> {/* This py-8 adds significant height */}
        <div className="text-2xl font-bold text-gray-900">P<span className="text-gray-500">ortfolio</span>.</div>

        {/* Desktop Navigation */}
        {/* <div className="hidden font-semibold md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors duration-300 hover:text-gray-600 ${
                activeSection === item ? "text-gray-900 font-bold" : "text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div> */}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 animate-fade-in">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left py-2 capitalize text-gray-700 hover:text-gray-900"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>

  {/* Hero Section */}
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-white pt-24"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* This div contains all the main visible content of your hero section */}
      <div className="animate-fade-in-up">
        {/* Profile Picture with Animation */}
        <div className="relative">
          <div className="w-56 h-56 mx-auto relative">
            <div className="animate-bounce-subtle">
              <div className="absolute inset-0 rounded-full border-4 border-gray-300 opacity-50"></div>
              <div className="absolute inset-2 rounded-full border-2 border-gray-500"></div>
              <div className="absolute inset-5 rounded-full flex items-center justify-center">
                <img
                  src={keyBoard}
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-['Be_Vietnam'] leading-[100%] tracking-[-0.04em] text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-gray-700">Hi, I'm </span>
          <span className="text-black">Aleesha Mufthi</span>
        </h1>
        <p className="font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.04em] text-3xl md:text-4xl text-gray-900 mb-6 animate-fade-in-up animation-delay-400">
          Software Development Engineer & Technology Enthusiast
        </p>
        <p className="font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.04em] text-xl text-gray-800 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
         Focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
          <button
            onClick={() => scrollToSection("projects")}
            className="font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.06em] px-8 md:px-12 py-3 md:py-4 bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
          MY WORKS
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-['Be_Vietnam'] font-semibold text-[20px] md:text-[25px] leading-[100%] tracking-[-0.06em] px-8 md:px-12 py-3 md:py-4 border-2 text-lg border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            GET IN TOUCH
          </button>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          {[
            { icon: Github, href: 'https://github.com/AleeshaMufthi', color: 'hover:text-gray-800' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/aleesha-mufthi-19405128b/', color: 'hover:text-gray-800' },
            { icon: Mail, href: 'mailto:aleeshamufthi@gmail.com', color: 'hover:text-gray-800' },
            { icon: Phone, href: 'tel:+91 6238149448', color: 'hover:text-gray-800' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-10 h-10" />
            </a>
          ))}
        </div>
      </div>
            <div
        className="mt-6 flex justify-center animate-bounce"
        onClick={() => scrollToSection("about")} 
      >
        <ChevronDown className="w-8 h-8 text-black" />
      </div>
    </div> 
  </section>

<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  variants={fadeUp}
>
     
     <AboutMe/>

    </motion.section>

         <Experience />

         <Quote />

    <Projects />

      <TechStack />

      {/* <Skills /> */}

{/* 
     <Contact /> */}
      

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-12">
<div className="text-center mb-5">
          <p className="text-lg">Have a project in mind?</p>
        <h1 className="text-2xl mt-1">aleeshamufthi@gmail.com</h1>
</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-md">Built and Designed by Aleesha Mufthi</p>
        </div>
      </footer>
    </div>
  )
}
