import React from 'react'
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

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Yeteneklerim</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
