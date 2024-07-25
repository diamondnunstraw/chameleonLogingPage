import React from 'react'
import Logo from './Logo'
import Border from './Border'
import { accounts, avatar } from '../constants/constant'
import SocialButton from './SocialButton'
import { CgSpinner } from "react-icons/cg";


const FormContainer = ({ email, passShow, handleSubmit, setUserName, checkUser, password, setPassword, error, isLoading }) => {
  return (
    <div className='flex w-[510px] lg:w-[510px] md:w-[510px] sm:w-[510px] min-h-[630px] mt-0 mb-0 sm:mb-4 sm:mt-4 mx-auto xl:mr-[13%]'>
      <div className='sm:rounded-md w-full bg-white text-[#505050]'>
        <div className="px-[56px] py-[24px] xl:py-[40px]">
            <Logo 
                imgSize={20} 
                mainClass='flex xl:hidden' 
                textClass='py-[1px] ml-2 text-sm'
            />
            {!passShow ? 
              <>
                <div className='font-[500] text-[33px] text-[#323232] mt-[0.65rem] xl:mt-0' style={{letterSpacing: 0,textTransform: 'none',lineHeight:1.3}}>Sign in</div>
                <div className='font-[500] mt-3'>New user? <span className='text-blue-500 font-[500] hover:underline'>Create an account</span></div>
              </>
            :
            <>
              <div className='font-[500] text-[33px] text-[#323232] mt-[0.65rem] xl:mt-0' style={{letterSpacing: 0,textTransform: 'none',lineHeight:1.3}}>Enter your password</div>
              <div className='font-[500] mt-6 flex justify-start'>
                <img src={avatar} alt="avatar" />
                <div className='py-2 ml-4'>
                  <div className='text-sm'>{email}</div>
                  <div className='text-xs'>personal account</div>
                </div>
              </div>
            </>
            }

            {!passShow ? <div>
                <div className='mt-7'>
                    <label htmlFor="user" className='text-xs'>Email address</label>
                    <input type="text" autoFocus value={email} onChange={(e)=> setUserName(e.target.value)} id='user' autoCorrect='off' className={`w-full transition ${error ? 'border-b-red-500 border-b-2 focus:border-b-red-500 focus:border-b-2' : 'border-b-[0.6px] border-b-stone-200 focus:border-b-blue-500 focus:border-b-2'} outline-none`} />
                    <div className="flex justify-end mt-4">
                      {isLoading ? 
                        <button className='mt-2 flex py-1.5 px-4 cursor-pointer rounded-full font-[500] text-sm text-white transition-all bg-stone-300 hover:bg-stone-400 justify-center'>Continue <CgSpinner className='ml-2 mt-1 animate-spin text-blue-500' /></button>:
                        <button onClick={checkUser} className='mt-2 flex py-1.5 px-4 cursor-pointer rounded-full font-[500] text-sm text-white transition-all bg-blue-600 hover:bg-blue-700'>Continue</button>
                      }
                    </div>
                </div>
            </div>
            :
            <div>
                <div className='mt-7'>
                    <label htmlFor="password" className='text-xs'>password</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} id='password' autoCorrect='off' className={`w-full transition ${error ? 'border-b-red-500 border-b-2 focus:border-b-red-500 focus:border-b-2' : 'border-b-[0.6px] border-b-stone-200 focus:border-b-blue-500 focus:border-b-2'} outline-none`} />
                    <div className="flex justify-between mt-4">
                      <div>stay signed in</div>
                      {isLoading ? 
                        <button className='mt-2 flex py-1.5 px-4 cursor-pointer rounded-full font-[500] text-sm text-white transition-all bg-stone-300 hover:bg-stone-400 justify-center'>Continue <CgSpinner className='ml-2 mt-1 animate-spin text-blue-500' /></button>:
                        <button onClick={handleSubmit} className='mt-2 flex py-1.5 px-4 cursor-pointer rounded-full font-[500] text-sm text-white transition-all bg-blue-600 hover:bg-blue-700'>Continue</button>
                      }
                    </div>
                </div>
            </div>}


            <Border />
            <ul className='mt-8'>
                {accounts.map(account => (
                    <li key={account.id} className='mt-4'>
                        <SocialButton icon={account.icon} title={account.title}>Continue with {account.title}</SocialButton>
                    </li>
                    
                ))}
            </ul>

            <div className='mt-8'>
              <div className='text-xs font-[500] text-blue-500 transition hover:underline cursor-pointer'>Get help signing in</div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default FormContainer
