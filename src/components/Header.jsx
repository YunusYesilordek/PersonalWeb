import React, { useState, useContext } from 'react'
import './Header.css'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Yunus Yeşilördek</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')}>Hakkımda</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Yetenekler</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projeler</button></li>
              <li><button onClick={() => scrollToSection('contact')}>İletişim</button></li>
              <li>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
