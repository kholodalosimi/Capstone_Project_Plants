import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css';





export default function App() {


  
  return (
    <div>
           <h1 style={{fontFamily:"unset" ,fontSize:"40px",textAlign:"center" , backgroundColor: "6d93a1" }}> plants </h1> 
      <h1 > </h1>
      <nav

        
 style={{}} >
          <Link to="/home"><button> home </button>  </Link> 
          <Link to="/joinus"><button> JoinUs </button>  </Link> 
          <Link to="/plantfriends"><button> Plant Friends </button> </Link> 
          <Link to="/Login"><button> Login</button>  </Link> 
          <Link to="/PlantsInSaudiArabia"><button> Plants In Saudi Arabia </button> </Link> 
          <Link to="/TheStrangestPlantsInTheWorld"><button> The Strangest Plants In The World</button>  </Link> 
      </nav>
      <Outlet />
      


    </div>
  )
}




