import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { userData } from '../../slices/UserSlice';

export const Home = () => {
  // ========== slice part
  const currentUserData =useSelector((state)=>state.counter.value)




  // ======== console part
  console.log(currentUserData)
  return (
    <div className="max-w-sm mx-auto mt-6 bg-[#074173] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="h-40">
        <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x400.png?text=Cover+Photo" alt="Cover" />
      </div>
      <div className="flex justify-center -mt-16">
        <img className="w-32 h-32 object-cover rounded-full border-4 border-white transform transition duration-500 hover:scale-110" src={currentUserData?.photoURL} alt="Profile"/>
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl text-white leading-7 tracking-wider font-extrabold font-sevillana">{currentUserData?.displayName} </h2>
        <h2 className="text-lg text-white font-poppins font-medium"></h2>
        <div className="flex justify-center items-center text-black mt-1">
          <FaEnvelope className="mr-2 text-white" />
          <p className="text-white font-poppins">{currentUserData?.email} </p>
        </div>
        <div className="flex justify-center items-center text-black">
          <FaPhone className="mr-2 text-white" />
          <p className="text-white font-poppins">(+880) 01706226996 </p>
        </div>
      </div>
    </div>
  )
}
