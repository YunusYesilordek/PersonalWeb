import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
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

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <h3>E-posta</h3>
              <p>yesilordekyunus0@gmail.com</p>
            </div>
            
            <div className="contact-card card">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <h3>Konum</h3>
              <p>Diyarbakır, Türkiye</p>
            </div>
            
            <a href="https://www.linkedin.com/in/yunus-yeşilördek-1a90a7334/" target="_blank" rel="noopener noreferrer" className="contact-card card clickable">
              <div className="contact-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </div>
              <h3>LinkedIn</h3>
              <p>Yunus Yeşilördek</p>
            </a>
            
            <a href="https://www.instagram.com/yunusyesilordek0/" target="_blank" rel="noopener noreferrer" className="contact-card card clickable">
              <div className="contact-icon">
                <img src={instagramIcon} alt="Instagram" />
              </div>
              <h3>Instagram</h3>
              <p>@yunusyesilordek0</p>
            </a>
          </div>
          
          <div className="contact-form-container card">
            <h3>Mesaj Gönder</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresiniz"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Mesaj konusu"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Mesajınız başarıyla gönderildi! Teşekkürler.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Mesaj gönderilemedi. Lütfen tekrar deneyin.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
