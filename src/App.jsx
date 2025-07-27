import React from 'react'
import Header from './components/Header'
import AnimatedCounter from './components/AnimatedCounter'
import About from './components/About'
import ToolsIUsed from './components/ToolsIUsed'
import MyWorks from './components/MyWorks'
import ScrollingTools from './components/ScrollingTools'

const App = () => {
  return (
    <div>
     <Header />
     <AnimatedCounter />
     <About />
     <ToolsIUsed />
     <MyWorks />
     <ScrollingTools />
    </div>
  )
}

export default App
