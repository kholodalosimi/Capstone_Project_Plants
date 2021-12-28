import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  "./plants/Home";
import JoinUs from "./plants/JoinUs";
import PlantFriends from "./plants/PlantFriends";
// import Login from "./plants/Login";
import TreesKsa from "./plants/TreesKsa";
import TheFlowers from "./plants/TheFlowers";
import World from "./plants/world";






ReactDOM.render(

<BrowserRouter>
     <Routes>
       <Route path="/" element={<App />}>
         <Route path="home" element={<Home />}>
           <Route path="" element={<Home />} />
          </Route>


          <Route path="joinus" element={<JoinUs />} />
          <Route path=":NationalId" element={<JoinUs />} />
          
          <Route path="plantfriends" element={<PlantFriends />} >
          <Route path=":NationalId" element={<PlantFriends />} />
          </Route>

          {/* <Route path="Login" element={<Login />} >
          <Route path=":NationalId" element={<Login />} />
          </Route> */}


          <Route path="TreesKsa" element={<TreesKsa />} >
          {/* <Route path="NationalId" element={<TreesKsa />} /> */}
          </Route>


          <Route path="TheFlowers" element={<TheFlowers />} >
          {/* <Route path=":NationalId" element={< TheFlowers />} /> */}
          </Route>

          <Route path="world" element={<World />} >
          {/* <Route path=":NationalId" element={<World />} /> */}
          </Route>
          
         
       </Route>
     </Routes>
   </BrowserRouter>,
   document.getElementById('root'));