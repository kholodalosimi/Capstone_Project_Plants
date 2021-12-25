import React, { useState } from "react";
 import axios from "axios"



export default function Joinus() {
   

  
  let [id, setId] = useState("")
  let [name, setName] = useState("")
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let [numberOfPlants, setNumberOfPlants] = useState("")
  let [picture, setPicture] = useState("")
  let [username ,setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [Submit , setSubmit] = useState("")
  // let [Confirm, setConfirm] = useState(false)

 
  function handleId(event) {setId((id = event.target.value));}
  function handleName(event) {setName((name = event.target.value));}
  function handlePhone(event) {setPhone((phone = event.target.value));}
  function handleEmail(event) {setEmail((email = event.target.value));}
  function handleNumberOfPlants(event) {setNumberOfPlants((numberOfPlants = event.target.value));}
  function handlePicture(event) {setPicture((picture = event.target.value));}
  function handleUserame(event) {setUsername((username = event.target.value));}
  function handlePassword(event) {setPassword((password = event.target.value));}



function handleSubmit(){
    let NueUsers = { 
        id: id,
        name:name,
        phone:phone,
        email:email,
        numberOfPlants:numberOfPlants,
        picture:picture,
        username:username,
        password:password
    }
    console.log("insid function");
        console.log(NueUsers)
        axios({
            method: 'post',
            url: 'api/users/add',
            data: NueUsers,
        });
    }


  
  return (
   <div style={{display:"inherit",background: '6d93a1', color: 'black' ,}}>

{/* <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Add To  </button>

{Confirm && */}
     <form >
      
        <hr /> 
          <label>  id </label>
          <input type="text" name="firsid" placeholder="" onChange={handleId} /><br/> <hr />

          <hr /> 
          <label> NAME </label>
          <input type="text" name="name" placeholder="" onChange={handleName} /><br/> <hr />

          <label> phone </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePhone} /><br/><hr />

          <label> email </label> 
          <input type="text" name="email"placeholder="" onChange={handleEmail} size="10" /><br/> <hr />

          <label> number Of Plants </label> 
          <input type="text" name="numberOfPlants"placeholder="" onChange={handleNumberOfPlants} size="10" /><br/> <hr />

          <label> picture </label> 
          <input type="text" name="picture"placeholder="" onChange={handlePicture} size="10" /><br/> <hr />

          <label> username </label> 
          <input type="text" name="username"placeholder="" onChange={handleUserame} size="10" /><br/> <hr />

          <label> password </label> 
          <input type="text" name="password"placeholder="" onChange={handlePassword} size="10" /><br/> <hr />


          <button onClick={handleSubmit} > submit  </button> 

       
    
      </form>
    </div>

  );

  }


          
