import React from 'react'
import yahooLogo from '../assets/yahoo.png'
import YahooBody from '../components/YahooBody'

const YahooMail = () => {
  return (
    <div>
        <div className='hidden sm:flex justify-between py-[1.6rem] px-[3rem] w-full'>
            <img src={yahooLogo} width={120} alt='logo' />
            <div className='flex items-center'>
                <span className='ml-[1rem] text-blue-500 text-sm'>Help</span>
                <span className='ml-[1rem] text-blue-500 text-sm'>Terms</span>
                <span className='ml-[1rem] text-blue-500 text-sm'>Privacy</span>
            </div>
        </div>
        <YahooBody logo={yahooLogo} />
    </div>
  )
}

export default YahooMail
