import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Kotlin", icon: "🔷" },
    { name: "Java", icon: "☕" },
    { name: "Node.js", icon: "🟢" },
    { name: "SQL", icon: "🗄️" },
    { name: "Firebase", icon: "🔥" },
    { name: "Git", icon: "📚" },
    { name: "Figma", icon: "🎯" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Retrofit", icon: "🔄" },
    { name: "REST API", icon: "🌐" },
    { name: "Native", icon: "📱" }
  ]

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.section 
      className="skills section" 
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Yeteneklerim
        </motion.h2>
        <motion.div 
          className="skills-content"
          variants={containerVariants}
        >
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                custom={index}
                variants={skillItemVariants}
                whileHover="hover"
              >
                <motion.span 
                  className="skill-icon"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  {skill.icon}
                </motion.span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
