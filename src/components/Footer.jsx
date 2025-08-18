import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'
import githubIcon from '../pic/github.png'
import linkedinIcon from '../pic/linkedin.png'
import instagramIcon from '../pic/instagram.png'

const Footer = () => {
  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#4db5ff",
      x: 5,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
        >
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <motion.h3 variants={itemVariants}>Yunus Yeşilördek</motion.h3>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <motion.h4 variants={itemVariants}>Hızlı Linkler</motion.h4>
            <motion.ul variants={containerVariants}>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#about" 
                  whileHover="hover"
                  variants={linkVariants}
                >
                  Hakkımda
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#skills" 
                  whileHover="hover"
                  variants={linkVariants}
                >
                  Yetenekler
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a 
                  href="#projects" 
                  whileHover="hover"
                  variants={linkVariants}
                >
                  Projeler
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <motion.h4 variants={itemVariants}>İletişim</motion.h4>
            <motion.ul variants={containerVariants}>
              <motion.li variants={itemVariants}>📧 yesilordekyunus0@gmail.com</motion.li>
              <motion.li variants={itemVariants}>📍 Diyarbakır, Türkiye</motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <motion.h4 variants={itemVariants}>Sosyal Medya</motion.h4>
            <motion.div 
              className="social-links"
              variants={containerVariants}
            >
              <motion.a 
                href="https://github.com/YunusYesilordek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={githubIcon} 
                  alt="GitHub" 
                  variants={iconVariants}
                />
                <motion.span variants={itemVariants}>GitHub</motion.span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/yunus-yeşilördek-1a90a7334/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={linkedinIcon} 
                  alt="LinkedIn" 
                  variants={iconVariants}
                />
                <motion.span variants={itemVariants}>LinkedIn</motion.span>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/yunusyesilordek0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={instagramIcon} 
                  alt="Instagram" 
                  variants={iconVariants}
                />
                <motion.span variants={itemVariants}>Instagram</motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p 
            variants={itemVariants}
            animate={{ 
              opacity: [0.8, 1, 0.8], 
              transition: { repeat: Infinity, duration: 3 } 
            }}
          >
            &copy; {new Date().getFullYear()} Yunus Yeşilördek. Tüm hakları saklıdır.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
