import React, { useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  // Animasyon kontrolleri
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });
  
  // Görünüme girdiğinde animasyonları başlat
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);
  
  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 300 }
    }
  };
  

  
  return (
    <motion.section 
      className="about section" 
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>Hakkımda</motion.h2>
        <motion.div className="about-content" variants={containerVariants}>
          <motion.div className="about-text" variants={containerVariants}>
            <motion.div 
              className="about-card card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h3 variants={itemVariants}>👨‍💻 Kimim?</motion.h3>
              <motion.p variants={itemVariants}>
                Merhaba! Ben Yunus Yeşilördek, yazılım mühendisliği alanında eğitim gören tutkulu bir öğrenciyim. 
                Teknoloji ve yazılım geliştirme konularına büyük ilgi duyuyorum ve sürekli kendimi geliştirmeye odaklanıyorum.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="about-card card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h3 variants={itemVariants}>🌟 İlgi Alanlarım</motion.h3>
              <motion.p variants={itemVariants}>
                <strong>Web Teknolojileri:</strong> Modern web geliştirme ekosisteminde kullanıcı 
                deneyimini ön planda tutan, responsive ve performanslı web uygulamaları geliştirmeye 
                odaklanıyorum.
              </motion.p>
              <motion.p variants={itemVariants}>
                <strong>Mobil Uygulama Geliştirme:</strong> Cross-platform teknolojiler ile iOS ve 
                Android platformları için native performanslı mobil uygulamalar geliştirmek benim için 
                büyük bir tutku.
              </motion.p>
              <motion.p variants={itemVariants}>
                <strong>Yapay Zeka Teknolojileri:</strong> Machine Learning, Deep Learning ve AI 
                entegrasyonları ile akıllı web ve mobil uygulamalar geliştirmek, kullanıcı deneyimini 
                kişiselleştirmek ve otomasyon süreçleri oluşturmak konularında sürekli kendimi 
                geliştiriyorum.
              </motion.p>
            </motion.div>
            

          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
