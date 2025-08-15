import React from 'react'
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

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projelerim</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Canlı Demo</a>
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
