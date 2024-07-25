import React from 'react'

const Background = ({ children, backgroundImg }) => {
  return (
    <div 
        style={{'--image-url': `url(${backgroundImg})`}} 
        className='fixed top-0 bottom-0 bg-[image:var(--image-url)] w-full h-full justify-center bg-no-repeat bg-cover bg-center rounded-lg'>
      <div className='fix bottom-0 top-0 left-0 right-0 overflow-y-scroll w-full h-full bg-stone-900/55'>
        {children}
      </div>
    </div>
  )
}

export default Background
