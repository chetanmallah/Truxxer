import React from 'react'
import DriverPage from '../../components/HiringDriver/DriverPage'
import DriverForm from '../../components/HiringDriver/DriverForm'
import ThreeStepProcess from '../../components/HiringDriver/ThreeStepProcess'
import Faq from '../../components/HiringDriver/Faq'
import Footer from '../../components/Footer/Footer'

const DriverHiring = () => {
  return (
    <div>
      <DriverForm/>
      <DriverPage/>
      <ThreeStepProcess/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default DriverHiring
