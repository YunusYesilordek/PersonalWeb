import React from 'react'
import { motion } from 'framer-motion'
import { Parallax, Background } from 'react-parallax'
import './Hero.css'

const Hero = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 400 }
    },
    tap: { scale: 0.95 }
  };

  const logoVariants = {
    animate: {
      rotateY: [0, 180, 360],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatType: "loop", 
        ease: "easeInOut",
        repeatDelay: 5
      }
    }
  };

  const floatingVariants = {
    animate: (i) => ({
      y: [0, -15, 0],
      x: [0, i * 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.5
      }
    })
  };

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      bgImageAlt="teknoloji arka planı"
      strength={300}
      className="hero"
      id="home"
    >
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text">
            <motion.h1 className="hero-title" variants={itemVariants}>
              Merhaba, Ben <span className="highlight">Yunus Yeşilördek</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              <strong>Freelance Yazılım Geliştirici (2023-2025)</strong><br />
              Web ve mobil uygulamalar geliştirdim. Müşteri ihtiyaçlarına göre tasarım ve fonksiyon geliştirme yaptım. Projelerde problem çözme ve proje yönetimi deneyimi kazandım.
            </motion.p>
            <motion.p className="hero-subtitle" variants={itemVariants}>
              <strong>Kendi Projelerim (2024-2025)</strong><br />
              Takım çalışması, versiyon kontrol (Git) ve proje planlama deneyimi edindim. Yeni teknolojiler öğrenerek uygulamalara entegre ettim.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button 
                className="btn btn-primary" 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Hakkımda
              </motion.button>
              <motion.button 
                className="btn btn-secondary" 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Projelerimi Gör
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div className="hero-avatar">
              <motion.div 
                className="avatar-placeholder"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="custom-logo"
                  variants={logoVariants}
                  animate="animate"
                >
                  <div className="logo-y1">Y</div>
                  <div className="logo-y2">Y</div>
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="floating-elements">
              <motion.div 
                className="floating-element" 
                custom={0}
                variants={floatingVariants}
                animate="animate"
              >🚀</motion.div>
              <motion.div 
                className="floating-element" 
                custom={1}
                variants={floatingVariants}
                animate="animate"
              >💻</motion.div>
              <motion.div 
                className="floating-element" 
                custom={2}
                variants={floatingVariants}
                animate="animate"
              >⚡</motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Parallax>
  )
}

export default Hero
