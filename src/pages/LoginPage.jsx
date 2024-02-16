import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const emailRegexp = /^(?=.*[a-zA-Z])(?=.*\d).{4,}@(mail\.ru|gmail\.com)$/;
  const passwordRegexp = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const isRegister = JSON.parse(localStorage.getItem('reg'));

  const handleLogin = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '' &&
      emailRegexp.test(email) && passwordRegexp.test(password) &&
      isRegister.email === email && isRegister.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/')
    }
    if (email === '' || !emailRegexp.test(email) || isRegister.email !== email) {
      setEmailError(true);
    } else {
      setEmailError(false)
    }
    if (password === '' || !passwordRegexp.test(password) || isRegister.password !== password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <>
      {
        !localStorage.getItem('isLoggedIn') ? <div className='bg-header h-screen flex justify-center items-center'>
          <form className='w-[420px] h-[560px] border-[3px] border-main rounded flex flex-col justify-center items-center'>
            <h2 className='text-main text-[25px]'>Login</h2>
            <div className='m-[15px]'>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email...'
                className='px-[13px] py-[12px] bg-transparent text-white border-[2px] border-main rounded-[25px] outline-none'
              />
              {emailError ? <div className='text-red-600'>Неверный адресс.</div> : null}
            </div>

            <div className='m-[10px]'>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password...'
                className='px-[13px] py-[12px] bg-transparent text-white border-[2px] border-main rounded-[25px] outline-none'
              />
              {passwordError ? <div className='text-red-600'>Неверный пароль.</div> : null}
            </div>

            <div className='m-[20px] border-[2px] border-main py-[8px] px-[18px] rounded-[20px] text-white'>
              <button onClick={handleLogin} type="submit">Submit</button>
            </div>
          </form>
        </div> : location.href = '/'
      }
    </>
  )
}
