import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CVRaterAI",
      description: "Yapay zeka destekli CV analiz platformu. Hem mobil hem web tabanlı olarak geliştirildi. CV'leri analiz ederek puanlama ve öneriler sunuyor.",
      technologies: ["TypeScript", "Kotlin", "Retrofit", "Docker", "React", "Next.js"],
      image: "🤖",
      github: "https://github.com/YunusYesilordek",
      live: "#"
    },
    {
      id: 2,
      title: "Veteriner Takip Sistemi",
      description: "Mobil tabanlı veteriner hasta takip uygulaması. Hasta kayıtları, randevu yönetimi, tedavi geçmişi ve ilaç takibi özellikleri.",
      technologies: ["React Native", "Geolocation API", "Expo", "Cloudinary", "Node.js", "Swagger"],
      image: "🐾",
      github: "https://github.com/YunusYesilordek",
      live: "#"
    },
    {
      id: 3,
      title: "Hikaye Tabanlı Dil Öğrenme",
      description: "Mobil tabanlı interaktif dil öğrenme uygulaması. Hikayeler üzerinden kelime öğrenme, telaffuz pratiği ve seviye bazlı ilerleme.",
      technologies: ["Kotlin", "Java", "Retrofit", "Audio API"],
      image: "📚",
      github: "https://github.com/YunusYesilordek",
      live: "#"
    }
  ]

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 50,
        damping: 10
      }
    }),
    hover: {
      y: -15,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  const emojiVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 }
    },
    hover: {
      scale: 1.2,
      rotate: [0, 10, 0, -10, 0],
      transition: { duration: 0.5, repeat: 1 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 400 }
    },
    tap: { scale: 0.95 }
  };

  const techTagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        type: 'spring',
        stiffness: 200
      }
    })
  };

  return (
    <motion.section 
      className="projects section" 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Projelerim
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card card"
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="project-image"
                whileHover="hover"
              >
                <motion.span 
                  className="project-emoji"
                  variants={emojiVariants}
                >
                  {project.image}
                </motion.span>
              </motion.div>
              <div className="project-content">
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + (index * 0.2) }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + (index * 0.2) }}
                >
                  {project.description}
                </motion.p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="tech-tag"
                      custom={techIndex}
                      variants={techTagVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a 
                    href={project.github} 
                    className="btn btn-secondary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    GitHub
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    className="btn btn-primary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Canlı Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
