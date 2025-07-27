import React from 'react'
import { contactMethods } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-32'>
      <h1 className='text-center text-4xl font-bold tracking-widest'>Asjad Ahamed</h1>
      <div className='border-t mt-8 py-4 flex flex-col lg:flex-row items-center lg:justify-between justify-center '>
    <p>ⓒ 2025 Asjad Ahamed. All rights reserved.</p>
    <div className='flex items-center gap-2'>
{
    contactMethods.map((item,index)=>(
        <a key={index} href={item.link} target='_blank'>
            {
                item.name
            }
        </a>
    ))
}
    </div>
      </div>
    </div>
  )
}

export default Footer
