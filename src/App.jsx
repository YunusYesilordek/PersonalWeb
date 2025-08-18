import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/Particles'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  // Sayfa yüklendiğinde yukarı kaydırma
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animasyon varyantları
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.95
    }
  };

  // Sayfa geçiş animasyonu
  const pageTransition = {
    type: "spring",
    stiffness: 100,
    mass: 0.5,
    damping: 15,
    duration: 0.8
  };
  
  // Bileşen geçiş animasyonları
  const sectionVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div 
          className="App"
          initial="initial"
          animate="in"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
        >
        <div className="particles-container">
          <ParticlesBackground />
        </div>
        <Header />
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
        
        <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
