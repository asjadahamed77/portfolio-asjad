import { Box } from 'lucide-react'
import React from 'react'
import react from '../assets/tools/reactjs.svg'
import node from '../assets/tools/nodejs.svg'
import next from '../assets/tools/nextjs.svg'
import spring from '../assets/tools/spring.svg'
import java from '../assets/tools/java.svg'


const skills = [
    {
        name: "React Developer",
        imgFile: react
    },
    {
        name: "Backend Developer",
        imgFile: node
    },
    {
        name: "Next.js Developer",
        imgFile: next
    },
    {
        name: "Spring Boot Developer",
        imgFile: spring
    },
    {
        name: "Java Developer",
        imgFile: java
    },

]

const MySkills = () => {
  return (
    <section id="skills" className="px-4 sm:px-20  bg-zinc-950 text-white">
  <div className="text-center">
    <p className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base tracking-wide px-6 py-2.5 bg-zinc-800 rounded-full shadow-sm">
      <Box /> What I Bring to the Table
    </p>
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
      How I Can Contribute & My Key Skills
    </h2>
  </div>
 
<div className='flex items-center justify-center'>
<div className='grid xl:grid-cols-5 sm:grid-cols-3 gap-8 space-y-4 mt-20 mb-12  '>
    {
        skills.map((skill,index)=>(
            <div
            key={index}
            className="relative group overflow-hidden px-16 text-center flex flex-col items-center justify-center py-20 h-[400px] bg-zinc-900 sm:rounded-full rounded-xl cursor-pointer transition-colors duration-500"
          >
            {/* Overlay Fill from Bottom */}
            <div className="absolute inset-0 z-0 before:absolute before:inset-x-0 before:bottom-0 before:h-0 before:bg-white before:z-[-1] before:transition-all before:duration-500 group-hover:before:h-full rounded-xl sm:rounded-full" />
          
            {/* Image */}
            <div className="w-[70%] h-auto z-10">
              <img src={skill.imgFile} alt="skill" className="w-full h-full" />
            </div>
          
            {/* Text */}
            <p className="mt-16 text-lg font-semibold z-10 transition-colors duration-500 group-hover:text-black">
              {skill.name}
            </p>
          </div>
        ))
    }
 </div>
</div>
  
</section>
  )
}

export default MySkills
