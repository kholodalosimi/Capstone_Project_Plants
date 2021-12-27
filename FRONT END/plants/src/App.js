import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';






export default function App() {



  
  return (
    <div>
           <h1 style={{fontFamily:"unset" ,fontSize:"40px",textAlign:"center" , backgroundColor: "6d93a1" }}> plants 🌱 </h1> 
      <h1 > </h1>
      <nav

        
 style={{}} >
          <Link to="/home"><button> home </button>  </Link> 
          <Link to="/joinus"><button> JoinUs </button>  </Link> 
          <Link to="/plantfriends"><button> Plant Friends </button> </Link> 
          {/* <Link to="/Login"><button> Login</button>  </Link>  */}
          {/* <Link to="/PlantsInSaudiArabia"><button> Plants In Saudi Arabia </button> </Link> 
          <Link to="/TheStrangestPlantsInTheWorld"><button> The Strangest Plants In The World</button>  </Link>  */}
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




