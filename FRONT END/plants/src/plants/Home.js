import React from 'react'
import { Link  ,NavLink, Outlet } from "react-router-dom";

export default function Home (props){
    return (

<div>
    
        <div className="Home">
            <nav className="Home-nav">
              <h2 className="Home-heading"></h2>
              <ul>

        

                <h2><Link to="treesKsa">trees in saudi arabia</Link></h2>
                <h2><Link to="/home">The Flowers</Link></h2>
                <h2><Link to="/home">The strangest trees in the world</Link></h2>
              
              
   
              </ul>
            </nav></div>
   </div>
      );
    }
    
    
    
     
    









