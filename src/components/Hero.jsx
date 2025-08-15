import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Merhaba, Ben <span className="highlight">Yunus Yeşilördek</span>
            </h1>
            <p className="hero-subtitle">
              <strong>Freelance Yazılım Geliştirici (2023-2025)</strong><br />
              Web ve mobil uygulamalar geliştirdim. Müşteri ihtiyaçlarına göre tasarım ve fonksiyon geliştirme yaptım. Projelerde problem çözme ve proje yönetimi deneyimi kazandım.
            </p>
            <p className="hero-subtitle">
              <strong>Kendi Projelerim (2024-2025)</strong><br />
              Takım çalışması, versiyon kontrol (Git) ve proje planlama deneyimi edindim. Yeni teknolojiler öğrenerek uygulamalara entegre ettim.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Hakkımda
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                Projelerimi Gör
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <div className="custom-logo">
                  <div className="logo-y1">Y</div>
                  <div className="logo-y2">Y</div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element" style={{ '--delay': '0s' }}>🚀</div>
              <div className="floating-element" style={{ '--delay': '1s' }}>💻</div>
              <div className="floating-element" style={{ '--delay': '2s' }}>⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
