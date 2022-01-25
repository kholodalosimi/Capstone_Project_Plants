import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';
import Logo from "./plants/image/Logo.png";
import Logo2 from "./plants/image/Logo2.png";
import T from "./plants/image/T.png";
import Y from "./plants/image/Y.png";
import N from "./plants/image/N.png";
import Tl from "./plants/image/Tl.png";
import G from "./plants/image/G.png";



export default function App() {

  return (

    
    <div >


       <img src={Logo} alt="logo" className="logo" />
       <div>
         {/* Social Media */}
         <a href="https://twitter.com/">
      <img src={T} alt="Social Media" className="Social_Media" /> 
       </a>

       <a href="https://web.telegram.org/">
      <img src={Tl} alt="Social Media" className="Social_Media" />
      </a>

      <a href="https://github.com/kholodalosimi">
      <img src={G} alt="Social Media" className="Social_Media" />
      </a>

      <a href="https://www.instagram.com/">
      <img src={N} alt="Social Media" className="Social_Media" />
      </a>

      <a href="https://youtu.be/Dvfz58emgpA">
      <img src={Y} alt="Social Media" className="Social_Media" />
      </a>
      </div>
      <nav >

          <Link to="/home">< button class="bubbly"> Home </button>  </Link>           
          <Link to="/Login"><button class="bubbly"> Login </button>  </Link> 
          <Link to="/joinus"><button class="bubbly"> JoinUs </button>  </Link> 

          <Link to="/plantfriends"><button class="bubbly"> Plant Friends </button> </Link> 
          <Link to="/UserProfile"><button class="bubbly"> User Profile </button> </Link>        
      </nav>
      <Outlet />




<div>






</div>
      <img src={Logo2} alt="logo2" className="logo2" />

    </div>
    
  )
}




