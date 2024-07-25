import React from 'react'
import { features } from '../constants/constant'

const List = () => {
  return (
    <div className='hidden sm:hidden md:hidden lg:hidden xl:block'>
      <div className='ml-[32%] mt-4'>
        <div className='text-stone-50 font-semibold text-lg mb-3'>Do more for free. Sign in or create a free account.</div>
        <ul className='mb-12'>
            {features.map(item => (
                <li key={item.id} className='flex justify-start mb-2'>
                    <img src={item.icon} alt={item.icon} width={18} height={18} />
                    <div className='ml-2 text-sm font-semibold text-stone-50'>{item.title}</div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default List
