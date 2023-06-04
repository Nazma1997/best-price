import React from 'react'
import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useRouter } from 'next/router';
import auth from '../../../firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
export default function Sidebar() {
    // const [signOut, loading, error] = useSignOut(auth);
    // useEffect(() => {
    //     if (loading) {
    //         toast("login out")
    //     }
    // }, [loading])
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
  
      if (email && password) {
        setIsLoggedIn(true);
      }
    }, []);
    const router = useRouter()
    const handleSignOut = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        toast("login out")
        router.push('/admin')
      };
    
   
   
     
    
    return (
        <div>
        {isLoggedIn ? (
           <main className='py-1 bg-white shadow  z-10 sticky top-[45px]'>
           <main className="min-w-fit p-5 shadow-2xl rounded-sm flex flex-col justify-between h-[93.1vh] ">
               
               <section className="flex flex-col gap-4">
                   <div onClick={() => router.push('/admin/addproduct')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                       <AiOutlineHome size={20} />
                       <span className="text-[20px]"> Dashboard</span>
                   </div>
                   <div onClick={() => router.push('/admin/addproduct')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                       <MdOutlineProductionQuantityLimits size={20} />
                       <span className="text-[20px]">Add Product</span>
                   </div>
                   <div onClick={() => router.push('/admin/category')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                       <AiOutlineUsergroupAdd size={20} />
                       <span className="text-[20px]">Category </span>
                   </div>
                   <div onClick={() => router.push('/admin/brand')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                       <RiSendPlaneFill size={20} />
                       <span className="text-[20px]">Brand</span>
                   </div>
                   <div onClick={() => router.push('/admin/homeporductadd')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                       <RiSendPlaneFill size={20} />
                       <span className="text-[20px]">HomeProductType</span>
                   </div>
                   <div onClick={handleSignOut} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                       <FiLogOut size={20} />
                       <span className="text-[20px]">Log out</span>
                   </div>
               </section>
           </main >

       </main>
        ) : (
          <p></p>
        )}
      </div>
       
      
    )
}
