import React from 'react'

const SocialButton = ({ children, icon, title }) => {
  return (
    <div>
      <button className='flex w-full font-semibold text-sm justify-center py-4 border-[2px] border-stone-200 rounded-full'>
        <img src={icon} className='mr-3' width={20} height={20} alt={title} />
        {children}
      </button>
    </div>
  )
}

export default SocialButton
