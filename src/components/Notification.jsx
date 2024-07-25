import React from 'react'

const Notification = ({ title, children }) => {
  return (
    <div>
      <div className='fixed z-30 shadow-md rounded-sm top-4 cursor-pointer right-5 bg-white w-[12rem]'>
        <div className='px-3 text-center py-2 text-sm font-semibold border-b-[1px] border-b-stone-200'>{title}</div>
        <ul className='px-2 py-3 text-xs border-b-4 border-b-green-500'>
            <li className=' font-[500]'>{children}</li>
        </ul>
      </div>
    </div>
  )
}

export default Notification
