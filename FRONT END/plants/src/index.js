import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  "./plants/Home";
import JoinUs from "./plants/JoinUs";
import PlantFriends from "./plants/PlantFriends";
import UserProfile from "./plants/UserProfile";
import AddPlant from "./plants/AddPlant";
import MyGarden from "./plants/MyGarden";
 import Login  from "./plants/Login";





ReactDOM.render(

<BrowserRouter>
     <Routes>
       <Route path="/" element={<App />}>
         <Route path="home" element={<Home />}>
           <Route path="" element={<Home />} />
          </Route>

          <Route path="Login" element={<Login />} />
          <Route path=":NationalId" element={<Login />} />


          <Route path="joinus" element={<JoinUs />} />
          <Route path=":NationalId" element={<JoinUs />} />
          
          <Route path="plantfriends" element={<PlantFriends />} >
          <Route path=":NationalId" element={<PlantFriends />} />
          </Route>
         
          <Route path="UserProfile" element={<UserProfile />} />
      
         

          

          <Route path="AddPlant" element={<AddPlant />} >
     
          </Route>

          <Route path="MyGarden" element={<MyGarden />} >
     
          </Route>
          
         
       </Route>
     </Routes>
   </BrowserRouter>,
   document.getElementById('root'));