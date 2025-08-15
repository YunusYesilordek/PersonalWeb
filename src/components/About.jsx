import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
                 <div className="about-content">
           <div className="about-text">
             <div className="about-card card">
               <h3>👨‍💻 Kimim?</h3>
               <p>
                 Merhaba! Ben Yunus Yeşilördek, yazılım mühendisliği alanında eğitim gören tutkulu bir öğrenciyim. 
                 Teknoloji ve yazılım geliştirme konularına büyük ilgi duyuyorum ve sürekli kendimi geliştirmeye odaklanıyorum.
               </p>
             </div>
             
             <div className="about-card card">
               <h3>🌟 İlgi Alanlarım</h3>
               <p>
                 <strong>Web Teknolojileri:</strong> Modern web geliştirme ekosisteminde kullanıcı 
                 deneyimini ön planda tutan, responsive ve performanslı web uygulamaları geliştirmeye 
                 odaklanıyorum.
               </p>
               <p>
                 <strong>Mobil Uygulama Geliştirme:</strong> Cross-platform teknolojiler ile iOS ve 
                 Android platformları için native performanslı mobil uygulamalar geliştirmek benim için 
                 büyük bir tutku.
               </p>
               <p>
                 <strong>Yapay Zeka Teknolojileri:</strong> Machine Learning, Deep Learning ve AI 
                 entegrasyonları ile akıllı web ve mobil uygulamalar geliştirmek, kullanıcı deneyimini 
                 kişiselleştirmek ve otomasyon süreçleri oluşturmak konularında sürekli kendimi 
                 geliştiriyorum.
               </p>
             </div>
           </div>
         </div>
      </div>
    </section>
  )
}

export default About
