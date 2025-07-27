import React from 'react'
import Header from './components/Header'
import AnimatedCounter from './components/AnimatedCounter'
import About from './components/About'
import ToolsIUsed from './components/ToolsIUsed'
import MyWorks from './components/MyWorks'

const App = () => {
  return (
    <div>
     <Header />
     <AnimatedCounter />
     <About />
     <ToolsIUsed />
     <MyWorks />
    </div>
  )
}

export default App
