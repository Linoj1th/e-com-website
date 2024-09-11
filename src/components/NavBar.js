import React from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import './NavBar.css'

function NavBar() {
    return (
     <>
     <div className='free'>
        <div className='icon'> 
          <FaTruckMoving /> 
        </div>
        <p>Free Shipping When shopping upto $1000</p>
     </div>
     <div className='main_header'>
      <div className='cntainer'>
      <div  className='logo'>
         <img src='./img/logo-black.png' alt='logo'></img>
      </div>
           <div className='search_box'>
             <input type='text' value='' placeholder='Eanter The Product Name' autoComplete='off'></input> 
             <button>search</button>
           </div>
      <div className='icon'>
        <div className='account'>
          <div className='user_icon'> 
            <FaRegCircleUser/>
          </div>
          <p>Hello user</p>
        </div>
             <FaRegHeart />
             <IoBagCheckOutline />
      </div>
      </div>
     </div>
     </>

     
    )
  }
  
  export default NavBar