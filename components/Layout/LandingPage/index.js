import React from 'react'
import Customer from './Custemer/customer'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import LookingDeft from './LookingDeft/LookingDeft'

function LandingPage() {
  return (
    <div className='landing_Page'>
      <Header/>
      <LookingDeft/>
      <Customer/>
      <Footer/>
    </div>
  )
}

export default LandingPage