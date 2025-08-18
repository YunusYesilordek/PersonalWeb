import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import './Contact.css'
import githubIcon from '../pic/github.png'
import linkedinIcon from '../pic/linkedin.png'
import instagramIcon from '../pic/instagram.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

          try {
        // EmailJS ile email gönderimi
        const result = await emailjs.send(
          'service_xp6bpje', // EmailJS Service ID
          'template_64pe85w', // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Yunus Yeşilördek'
                  },
          'sF5ZvQDwA0uMkaKnC' // EmailJS Public Key
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Email gönderimi başarısız:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, delay: 0.5 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      transition: { type: 'spring', stiffness: 400 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section 
      className="contact section" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          İletişim
        </motion.h2>
        <motion.div 
          className="contact-content"
          variants={containerVariants}
        >
          <motion.div 
            className="contact-info"
            variants={containerVariants}
          >
            <motion.div 
              className="contact-card card"
              custom={0}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span>📧</span>
              </motion.div>
              <h3>E-posta</h3>
              <p>yesilordekyunus0@gmail.com</p>
            </motion.div>
            
            <motion.div 
              className="contact-card card"
              custom={1}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span>📍</span>
              </motion.div>
              <h3>Konum</h3>
              <p>Diyarbakır, Türkiye</p>
            </motion.div>
            
            <motion.a 
              href="https://www.linkedin.com/in/yunus-yeşilördek-1a90a7334/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card card clickable"
              custom={2}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </motion.div>
              <h3>LinkedIn</h3>
              <p>Yunus Yeşilördek</p>
            </motion.a>
            
            <motion.a 
              href="https://www.instagram.com/yunusyesilordek0/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card card clickable"
              custom={3}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="contact-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img src={instagramIcon} alt="Instagram" />
              </motion.div>
              <h3>Instagram</h3>
              <p>@yunusyesilordek0</p>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="contact-form-container card"
            variants={formVariants}
          >
            <motion.h3 variants={itemVariants}>Mesaj Gönder</motion.h3>
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              variants={containerVariants}
            >
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name">Ad Soyad</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)" }}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">E-posta</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresiniz"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)" }}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="subject">Konu</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Mesaj konusu"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)" }}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message">Mesaj</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Mesajınızı buraya yazın..."
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)" }}
                ></motion.textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  ✅ Mesajınız başarıyla gönderildi! Teşekkürler.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  ❌ Mesaj gönderilemedi. Lütfen tekrar deneyin.
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
