import React from 'react'
import './Map.css'

const Maps = () => {
  return (
    <section className='map_section'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.106296707847!2d39.46495205075631!3d13.467195530451693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd0069652387%3A0xdef3cddc6c3879b9!2z4Ymk4Ym1IOGImOGMjeGJoiDhiLThiJzhibLhiq0gLyBTZW1pdGljIFJlc3RhdXJhbnQ!5e1!3m2!1sen!2set!4v1721632481976!5m2!1sen!2set" width={600} height={450}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Maps