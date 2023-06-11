import React from 'react'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from 'react';
import auth from '../../firebase.init';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

export default function Login() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
   
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const predefinedEmail = 'boss@gmail.com';
      const predefinedPassword = 'l123k456@#';
    
      if (email === predefinedEmail && password === predefinedPassword) {
       
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
         
          router.push('/admin/addproduct');
       

        
      } else {
       
        console.log('Invalid email or password');
       
      }
    };
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email && password) {
      setIsLoggedIn(true);
    }
  }, []);
    return (
       
       

        <div>
        {isLoggedIn ? (
          <div className='w-100 h-[100vh] flex justify-center items-center'>

          <div>
              <form onSubmit={handleSubmit} className='bg-slate-400 p-10 rounded'>
                  <div className='w-full'>
                      <label htmlFor="Email"
                          class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                          Email
                      </label>
                      <input type="email" placeholder="Login Email"
                          name="email"
                          
                          onChange={e => setEmail(e.target.value)}
                          required
                          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                  </div>
                  <div className='w-full'>
                      <label htmlFor="Email"
                          class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                          Password
                      </label>
                      <input type="password" placeholder="Login password"
                          name="password"
                      
                          onChange={e => setPassword(e.target.value)}
                          required
                          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                  </div>
                  <div class="mt-10">
                      <button
                          class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                          Send
                      </button>
                  </div>
              </form>


          </div>

      </div>
        ) : (
           <div className='w-100 h-[100vh] flex justify-center items-center'>

            <div>
                <form onSubmit={handleSubmit} className='bg-slate-400 p-10 rounded'>
                    <div className='w-full'>
                        <label htmlFor="Email"
                            class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Email
                        </label>
                        <input type="email" placeholder="Login Email"
                            name="email"
                            
                            onChange={e => setEmail(e.target.value)}
                            required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="Email"
                            class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Password
                        </label>
                        <input type="password" placeholder="Login password"
                            name="password"
                        
                            onChange={e => setPassword(e.target.value)}
                            required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                    </div>
                    <div class="mt-10">
                        <button
                            class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                            Send
                        </button>
                    </div>
                </form>


            </div>

        </div>
        )}
      </div>
    )
}
