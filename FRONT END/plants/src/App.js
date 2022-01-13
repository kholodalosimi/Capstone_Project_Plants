import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';
import Logo from "./plants/image/Logo.png";
import Logo2 from "./plants/image/Logo2.png";
import T from "./plants/image/T.png";
import Y from "./plants/image/Y.png";
import N from "./plants/image/N.png";
import Tl from "./plants/image/Tl.png";
import F from "./plants/image/F.png";
import Login from './plants/Login';




export default function App() {



// Login

  // let [Authentication,setAuthentication]= useState(false);
  //   function handleLogin(){
  //       setAuthentication(true);
  //   }
  //   if(!Authentication){
  //       return<Login handleLogin = {handleLogin} />
  //   }




  
  return (
    <div >

    

      
       <img src={Logo} alt="logo" className="logo" />
<div>
         {/* Social Media */}
      <img src={T} alt="Social Media" className="Social_Media" />
      <img src={F} alt="Social Media" className="Social_Media" />
      <img src={Tl} alt="Social Media" className="Social_Media" />
      <img src={N} alt="Social Media" className="Social_Media" />
      <img src={Y} alt="Social Media" className="Social_Media" />
      </div>
      <nav >

        
          <Link to="/home">< button class="bubbly"> Home </button>  </Link>           
          <Link to="/Login"><button class="bubbly"> Login </button>  </Link> 
          <Link to="/joinus"><button class="bubbly"> JoinUs </button>  </Link> 

          <Link to="/plantfriends"><button class="bubbly"> Plant Friends </button> </Link> 
          <Link to="/UserProfile"><button class="bubbly"> User Profile </button> </Link>


          {/* <Link  className="Home" to="/TreesKsa"><button class="bubbly" > trees in saudi arabia</button>  </Link> 
          <Link className="Home"  to="/TheFlowers"><button class="bubbly"> The Flowers</button> </Link> 
          <Link className="Home" to="/world"><button class="bubbly1"> The strangest trees in the world</button>  </Link>       */}
              
      </nav>
      <Outlet />



<div></div>
      <img src={Logo2} alt="logo2" className="logo2" />

    </div>
    
  )
}




