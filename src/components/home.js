import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaPercent } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import './home.css'

const Home = () => {
  return (
<>
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Laptop Colletion 2024</h2>
               {/* <BrowserRouter> */}
              <Link to='/prouct' className='link'>Shop Now <FaArrowRightLong /> </Link>
              {/* </BrowserRouter> */}
            </div>
            <div className='img_box'>
                 <img src='./img/71kOH3in8TL._AC_SX466_-removebg-preview.png' alt=''></img>
            </div>
        </div>
    </div> 
  <div className='product_type'>
    <div className='container'>
      <div className='box'>
        <div className='img_box'>
          <img src='./img/s24-removebg-preview.png' alt='mobil'></img>
        </div>
        <div className='detail'>
          <p>27 products</p>
        </div>
      </div>
      <div className='box'>
        <div className='img_box'>
          <img src='./img/watch-removebg-preview.png'  alt='watch'></img>
        </div>
        <div className='detail'>
          <p>12 products</p>
        </div>
      </div>
      <div className='box'>
        <div className='img_box'>
          <img src='./img/headset-removebg-preview.png' alt='headset'></img>
        </div>
        <div className='detail'>
          <p>37 products</p>
        </div>
      </div>
      <div className='box'>
        <div className='img_box'>
          <img src='./img/drone-removebg-preview.png' alt='drone'></img>
        </div>
        <div className='detail'>
          <p>8 products</p>
        </div>
      </div>
    </div>
  </div>
  <div className='about'>
    <div className='container'>
      <div className='box'>
        <div  className='icon'>
        <FiTruck />
        </div>
        <div className='detail'>
          <h3>Free Shipping</h3>
          <p>Oder above $1000</p>
        </div>
      </div>
      <div className='box'>
        <div  className='icon'>
        <BsCurrencyDollar />
        </div>
        <div className='detail'>
          <h3>Return & Refund</h3>
          <p>Money Back Gaurenty</p>
        </div>
      </div>
      <div className='box'>
        <div  className='icon'>
        <FaPercent />
        </div>
        <div className='detail'>
          <h3>Member Discount</h3>
          <p>On every Oder</p>
        </div>
      </div>
      <div className='box'>
        <div  className='icon'>
        <FaHeadphones />
        </div>
        <div className='detail'>
          <h3>Customer Support</h3>
          <p>24/7 Call Support</p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Home;