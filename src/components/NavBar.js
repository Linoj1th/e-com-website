import React from 'react'
import { FaTruckMoving } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


function NavBar() {
  const { loginWithRedirect, logout,user,isAuthenticated} = useAuth0();
    return (
     <>
     <div className='free'>
        <div className='icon'> 
          <FaTruckMoving /> 
        </div>
        <p>Free Shipping When shopping upto $1000</p>
     </div>
     <div className='main_header'>
      <div className='container'>
      <div  className='logo'>
         <img src='./img/logo-black.png' alt='logo'></img>
      </div>
           <div className='search_box'>
             <input type='text' value='' placeholder='Search  your Product...' autoComplete='off'></input> 
             <button>search</button>
           </div>
      <div className='icon'>
        {
          isAuthenticated &&
          (
            <div className='account'>
          <div className='user_icon'> 
            <FaRegCircleUser/>
          </div>
          <p>Hello,{user.name}</p>
        </div>
          )
        }
        
          <div className='second_icon'>

            <Link to="/" className='link'><FaRegHeart /></Link>
            <Link to="/cart" className='link'><IoBagCheckOutline /></Link>
            
          </div>
      </div>
      </div>
     </div>
     <div className='header'>
      <div className='container'>
        <div className='nav'>
        <ul>
          <li>
            <Link to='/' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/product' className='link'>Product</Link>
          </li>
          <li>
            <Link to='/about' className='link'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
        </ul>
        </div>
        <div className='auth'>
          {
             isAuthenticated ?
             <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <CiLogout /></button>
             :
             <button onClick={() =>loginWithRedirect ()}><IoLogInOutline /></button>
          }
          
         
       
        </div>
      </div>
    </div>
     </>

     
    )
  }
  
  export default NavBar