import React from 'react'
import './Footer.css'
import githubIcon from '../pic/github.png'
import linkedinIcon from '../pic/linkedin.png'
import instagramIcon from '../pic/instagram.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yunus Yeşilördek</h3>
          </div>
          
          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><a href="#about">Hakkımda</a></li>
              <li><a href="#skills">Yetenekler</a></li>
              <li><a href="#projects">Projeler</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>İletişim</h4>
            <ul>
              <li>📧 yesilordekyunus0@gmail.com</li>
              <li>📍 Diyarbakır, Türkiye</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              <a href="https://github.com/YunusYesilordek" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={githubIcon} alt="GitHub" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/yunus-yeşilördek-1a90a7334/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={linkedinIcon} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/yunusyesilordek0/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={instagramIcon} alt="Instagram" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Yunus Yeşilördek. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
