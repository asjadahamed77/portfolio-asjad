import React from 'react'
import { ShieldCheck } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Timer } from 'lucide-react';




const values = [
    {
        name: "Quality Focus",
        iconFile: <ShieldCheck size={60} color='#f34' />,
        desc: "Delivering high-quality results while maintaining attention to every detail."
    },
    {
        name: "Reliable Communication",
        iconFile: <MessageCircleMore size={60} color='#78C841' />,
        desc: "Keeping you updated at every step to ensure transparency and clarity."
    },
    {
        name: "On-Time Delivery",
        iconFile: <Timer size={60} color='#FEFAE0' />,
        desc: "Making sure projects are completed on schedule, with quality & attention to detail."
    }
]

const Values = () => {
  return (
    <div className='my-32 px-4 sm:px-20 flex flex-wrap lg:flex-nowrap w-full justify-center  items-center gap-8  xl:gap-24 '>
      {
        values.map((item,index)=>(
            <div key={index} className='flex flex-col items-start  sm:p-8 p-4 bg-zinc-900 rounded-xl border-2 border-transparent hover:border-white hover:shadow-[0px_4px_8px_2px]'>
               <p  className=''>{item.iconFile}</p>
                <h1 className='text-xl font-semibold tracking-wide mt-6'>{item.name}</h1>
                <p className='mt-4 text-white/70'>{item.desc}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Values
