import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
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
                 <img src='./img/71kOH3in8TL._AC_SX466_-removebg-preview.png'></img>
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default Home