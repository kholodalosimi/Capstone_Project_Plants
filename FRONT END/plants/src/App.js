import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';
import Logo from "./plants/image/Logo.png";






export default function App() {



  
  return (
    <div >
       <img src={Logo} alt="logo" className="logo" />
      <nav >
             <Link to="/home">< button class="bubbly"> Home </button>  </Link> 
          <Link to="/joinus"><button class="bubbly"> JoinUs </button>  </Link> 
          <Link to="/plantfriends"><button class="bubbly"> Plant Friends </button> </Link> 
          <Link to="/UserProfile"><button class="bubbly"> User Profile </button> </Link>


          <Link  className="Home" to="/TreesKsa"><button class="bubbly1" > trees in saudi arabia</button>  </Link> 
          <Link className="Home"  to="/TheFlowers"><button class="bubbly1"> The Flowers</button> </Link> 
          <Link className="Home" to="/world"><button class="bubbly1"> The strangest trees in the world</button>  </Link>      
              
      </nav>
      <Outlet />

      

    <div>  
<h3>(Afforestation in Saudi Arabia)</h3>
<h5>the Volunteer work is intended for people who wish to contribute to the community and at
the same time to Learn about the types of plants in Saudi Arabia and the right place to grow them.
This volunteer work is suitable for all segments of society and for those who wish to plant trees.
For example, Planting trees and flowers in schools, public parks, or even in the desert All you have to do is Register with us to become a friend of plants .
</h5>
      </div> 


    </div>
  )
}




