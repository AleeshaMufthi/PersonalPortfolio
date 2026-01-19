
import { useState, useEffect } from 'react';
import profilePic from '../assets/B612_20250205_163141_359 2222.png'
import { Download, Github, Linkedin, Mail, Phone, Code, Palette, Database, Globe, ExternalLink, Star, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/button';
import { Card, CardContent } from '@/components/card';
import { Badge } from '@/components/badge';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'Express.js', level: 75, category: 'Backend' },
    { name: 'HTML5/CSS3', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with user authentication, payment gateway integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Socket.io', 'MongoDB', 'JWT'],
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts and beautiful data visualizations.',
      tech: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      status: 'Completed',
      link: '#'
    }
  ];

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Developing responsive web applications using React.js and modern JavaScript frameworks.'
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2022 - 2023',
      description: 'Built user interfaces and collaborated on full-stack projects using MERN stack.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">

      <div className="relative z-10">
        {/* Hero Section */}
        <section className={`min-h-screen flex items-center justify-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center space-y-8 max-w-4xl">
         
            {/* <div className="relative">
              <div className="w-56 h-56 mx-auto mb-8 relative">
                <div className="absolute inset-2 rounded-full flex items-center justify-center">
                  <img src={profilePic} className="w-52 h-52 rounded-full object-cover" alt="Profile" />
                </div>
              </div>
            </div> */}
            <div className="relative">
  <div className="w-56 h-56 mx-auto mb-8 relative">
    {/* Outer border ring */}
    <div className="absolute inset-0 rounded-full border-4 border-grey-500 opacity-30 animate-bounce-subtle"></div>
    
    {/* Inner border ring */}
    <div className="absolute inset-2 rounded-full border-2 border-grey-600 animate-bounce-subtle"></div>
    
    {/* Profile image with bounce animation */}
    <div className="absolute inset-4 rounded-full flex items-center justify-center animate-bounce-subtle">
      <img 
        src={profilePic || "/placeholder.svg"} 
        className="w-48 h-48 rounded-full object-cover shadow-lg" 
        alt="Profile" 
      />
    </div>
  </div>
</div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-semibold text-white animate-pulse">
                Aleesha Mufthi
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                 Software Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Kerala, India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           
              <a
  href="/public/AleeshaMufthi_CV.pdf"
  download
  className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 inline-flex items-center"
>
  <Download className="w-5 h-5 mr-2" />
  Download CV
</a>

              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  <Code className="w-5 h-5 mr-2" />
                  My Skills
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                  <Globe className="w-5 h-5 mr-2" />
                  Projects
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              {[
                { icon: Github, href: 'https://github.com/AleeshaMufthi', color: 'hover:text-purple-400' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/aleesha-mufthi-19405128b/', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'mailto:aleeshamufthi@gmail.com', color: 'hover:text-green-400' },
                { icon: Phone, href: 'tel:+91 6238149448', color: 'hover:text-orange-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>

          </div>
        </section>

          {/* About Me Section */}
           <section className="py-20 px-6">
             <div className="pt-12 text-left max-w-6xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
              <p className="text-gray-300 text-lg">
                I'm Aleesha Mufthi, a self-taught full-stack developer driven by a passion for solving digital challenges with cutting-edge technologies. My expertise spans Node.js, React.js, Express.js, JavaScript, Redux, MongoDB, PostgreSQL, Socket.io, and WebRTC.
</p>
<p className="text-gray-300 text-lg">My journey into development began during my Computer Applications degree at MG University, where project work ignited my love for coding and continuous learning. I'm committed to building scalable, maintainable code and excel in fast-paced environments, managing projects from concept to deployment. 
Committed to writing scalable, maintainable code, I thrive in fast-paced environments, driving projects from conception to deployment. My expertise extends to cloud services, ensuring seamless integration and performance optimization.</p>

<p className="text-gray-300 text-lg">Beyond technical skills, I am an advocate for collaboration and innovation. I enjoy working with teams to tackle challenging problems, explore new technologies, and push the boundaries of what's possible. My focus on performance optimization and scalability ensures that my projects are built to succeed in real-world scenarios.</p>
<p className="text-gray-300 text-lg">Let's connect and explore how we can innovate together!</p>
            </div>
           </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {skill.category === 'Frontend' && <Palette className="w-6 h-6 text-purple-400" />}
                      {skill.category === 'Backend' && <Database className="w-6 h-6 text-cyan-400" />}
                      {skill.category === 'Database' && <Database className="w-6 h-6 text-green-400" />}
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{skill.level}% Proficiency</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-purple-500 text-purple-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        className={`${project.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'} text-white`}
                      >
                        {project.status}
                      </Badge>
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Calendar className="w-6 h-6 text-purple-400 mt-1" />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-purple-400">{exp.role}</h3>
                          <Badge variant="outline" className="border-cyan-500 text-cyan-400 w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-lg text-gray-300 mb-3">{exp.company}</p>
                        <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can work together!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">aleeshamufthi@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+91 6238149448</p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-12 py-4 text-xl font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;