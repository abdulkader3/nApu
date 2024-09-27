import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosLogIn } from "react-icons/io";
import { useSelector } from 'react-redux';
import { BsPersonVcardFill, BsPersonCheckFill  } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";

export const Navbar = () => {
  // =========== get data from slices
  const sliceUser = useSelector((state)=>state.counter.value)
  return (
    <>
    <nav className="bg-[#074173] h-screen w-[200px] px-5 flex flex-col justify-between absolute top-0 left-0 ">
      <div className="mt-5 ">
        <h1 className='text-white text-[35px] font-sevillana font-bold '>Chatify</h1>
      </div>
      <div className="main">
        <ul className="flex-col flex gap-4">
          <li><NavLink to="/" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg flex items-center gap-2 " : " text-[18px] text-white font-normal flex items-center gap-2 "}><BsPersonVcardFill />Profile</NavLink></li>
          <li><NavLink to="/friendPage" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg flex items-center gap-2 " : " text-[18px] text-white font-normal flex items-center gap-2 "}><BsPersonCheckFill /> Friends</NavLink></li>
          <li><NavLink to="/userPage" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg flex items-center gap-2 " : " text-[18px] text-white font-normal flex items-center gap-2 "}><IoMdPersonAdd  />All User</NavLink></li>
          <li><NavLink to="/chatPage" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg flex items-center gap-2 " : " text-[18px] text-white font-normal flex items-center gap-2 "}>< AiFillMessage /> Massages</NavLink></li>
          <li><NavLink to="/notificationPage" className={({ isActive }) => isActive ? " text-[18px] text-white font-medium bg-slate-400 px-3 py-1 rounded-lg flex items-center gap-2 " : " text-[18px] text-white font-normal flex items-center gap-2 "}><IoNotificationsCircleSharp  /> Notification</NavLink></li>
        </ul>
      </div>
      <div className="mb-5 flex flex-col gap-3  ">
        <div className="div">
          <div className="w-[80px] h-[80px] rounded-full ">
            <img className='w-full h-full rounded-full ' src={sliceUser?.photoURL} alt="photo" />
          </div>
          <h4 className="text-white  ">{sliceUser?.displayName} </h4>
        </div>
        <Link to="#" className='text-white flex items-center gap-2' >Log Out <IoIosLogIn /></Link>
      </div>
    </nav>
    </>
  )
}
