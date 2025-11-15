import React from 'react'
import Header from '../components/Header'
import AnimatedCounter from '../components/AnimatedCounter'
import About from '../components/About'
import ToolsIUsed from '../components/ToolsIUsed'
import MyWorks from '../components/MyWorks'
import ScrollingTools from '../components/ScrollingTools'
import Values from '../components/Values'
import Experience from '../components/Experience'
import MySkills from '../components/MySkills'
import ContactMe from '../components/ContactMe'
import Navbar from '../components/Navbar'


const Homepage = () => {
  return (
    <div>
       <Navbar />
       <Header />
      <AnimatedCounter />
      <About />
      <ToolsIUsed />
      <MyWorks />
      <ScrollingTools />
      <Values />
      <Experience />
      <MySkills />
      <ContactMe />
    </div>
  )
}

export default Homepage
