import React from 'react'
import Navbar from '../Navbar./navbar'
import Footer from '../Footer/footer'
import HeroSection from '../HeroSectionForAll/heroSection'
import Form from './Form'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading={"Contact."} text={"Let's have a chat."} />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
