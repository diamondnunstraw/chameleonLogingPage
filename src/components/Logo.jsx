import React from 'react'
import { acrobat } from '../constants/constant'

const Logo = ({imgSize, textClass, mainClass}) => {
  return (
    <div className={`justify-start align-middle aspect-auto ${mainClass}`}>
      <img src={acrobat} width={imgSize} height={imgSize} alt="Acr Logo" />
      <div 
        className={`font-[600] fontFamily ${textClass}`}
        style={{
          lineWeight: 1.3,
          letterSpacing: 0,
          textTransform: "none"
        }}
      >Adobe Acrobat</div>
    </div>
  )
}

export default Logo
