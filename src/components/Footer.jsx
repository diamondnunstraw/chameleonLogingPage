import React from 'react'
import { footer } from '../constants/constant'

const Footer = () => {
  return (
    <div className='relative bottom-0 z-20 flex justify-center w-full p-2 border-b-[0.6px] border-b-stone-300 bg-white sm:justify-end mb-0'>
      <ul className='flex w-full flex-wrap justify-center sm:justify-end'>
        {footer.map((item, index) => (
          <li key={index} className='text-stone-500 font-[500] list-none text-xs mr-3 flex'>
            <div className={`${item.href ? 'hover:underline cursor-pointer hover:text-blue-600' : ''}`}>{item.title}</div>
            {item.bar && <div className='ml-3'>|</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
