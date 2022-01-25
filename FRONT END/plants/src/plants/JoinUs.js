import React, { useState } from "react";
import axios from "axios"




export default function Joinus() {
   

//Table 1
  let [id, setId] = useState("")
  let [name, setName] = useState("")
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let [picture, setPicture] = useState("")
  let [username ,setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [submit , setSubmit] = useState("")
 

//Table 1
  function handleId(event) {setId((id = event.target.value));}
  function handleName(event) {setName((name = event.target.value));}
  function handlePhone(event) {setPhone((phone = event.target.value));}
  function handleEmail(event) {setEmail((email = event.target.value));}
  function handlePicture(event) {setPicture((picture = event.target.value));}
  function handleUserame(event) {setUsername((username = event.target.value));}
  function handlePassword(event) {setPassword((password = event.target.value));}


 // Table 1 
  let NueUsers = { 
    id: id,
    name:name,
    phone:phone,
    email:email,
    picture:picture,
    username:username,
    password:password,
    
  }


//  Table 1 add
function handleSubmit(){
    
    console.log("insid function");
        console.log(NueUsers)
        axios({
            method: 'post',
            url: 'https://plant-friend-backend.herokuapp.com/api/users/add',
            data: NueUsers,
        });
    
      }



  return (
    
    <main className="input1" >

      
    <div>
 
          <label>  id:  </label>
          <input type="" name="id" placeholder="" onChange={handleId}  /><br/>

          <label> NAME : </label>
          <input type="text" name="name" onChange={handleName} /><br/> 

          <label> phone : </label> 
          <input  name="phone"  onChange={handlePhone} /><br/>

          <label> email : </label> 
          <input type="text" name="email" onChange={handleEmail} size="10" /><br/>

          <label> picture : </label> 
          <input  name="text" type="picture" onChange={handlePicture} size="10" /><br/> 

          <label> usename : </label> 
          <input type="text" name="username" onChange={handleUserame} size="10" /><br/>

          <label> password :  </label> 
          <input type="password" name="password" onChange={handlePassword} size="10" /><br/>
          <button onClick={handleSubmit} class="bubbly"   > submit1   </button> <br/>
   </div> 
    </main>

   
  );

 }