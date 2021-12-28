import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';






export default function App() {



  
  return (
    <div >
           <h1 style={{fontFamily:"unset" ,fontSize:"40px",textAlign:"center" , backgroundColor: "6d93a1" }}> plants 🌱 </h1> 
      <h1 > </h1>
      <nav 
     

        
 style={{}} >
          <Link to="/home"><button class="bubbly"> home </button>  </Link> 
          <Link to="/joinus"><button class="bubbly"> JoinUs </button>  </Link> 
          <Link to="/plantfriends"><button class="bubbly"> Plant Friends </button> </Link> 


          <Link  className="Home" to="/TreesKsa"><button class="bubbly" > trees in saudi arabia</button>  </Link> 
          <Link className="Home"  to="/TheFlowers"><button class="bubbly"> The Flowers</button> </Link> 
          <Link className="Home" to="/world"><button class="bubbly"> The strangest trees in the world</button>  </Link> 


{/* <h2><Link to="TreesKsa">trees in saudi arabia</Link></h2>
                <h2><Link to="TheFlowers">The Flowers</Link></h2>
                <h2><Link to="world">The strangest trees in the world</Link></h2> */}
              
              
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




