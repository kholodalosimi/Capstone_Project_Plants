import React, { useState } from "react";
 import axios from "axios"



export default function Joinus() {
   

  
//Table 1
  let [id, setId] = useState("")
  let [name, setName] = useState("")
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let [numberOfPlants, setNumberOfPlants] = useState("")
  let [picture, setPicture] = useState("")
  let [username ,setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [submit , setSubmit] = useState("")


  // treesId
  let [treesId , setTreesId] = useState("")




  // let [Confirm, setConfirm] = useState(false)





// Table 2
  let [displayBorder, setDisplayBorder] = useState(false)
  // let [treesId, setTreesId] = useState("")
  let [location, setLocation] = useState("")
  let [plantingtime, setPlantingtime] = useState("")
 




//Table 1
  function handleId(event) {setId((id = event.target.value));}
  function handleName(event) {setName((name = event.target.value));}
  function handlePhone(event) {setPhone((phone = event.target.value));}
  function handleEmail(event) {setEmail((email = event.target.value));}
  function handleNumberOfPlants(event) {setNumberOfPlants((numberOfPlants = event.target.value));}
  function handlePicture(event) {setPicture((picture = event.target.value));}
  function handleUserame(event) {setUsername((username = event.target.value));}
  function handlePassword(event) {setPassword((password = event.target.value));}



  // treesId
  function handleTreesId(event) {setTreesId((treesId = event.target.value));}




  // Table 2
  // function handleTreesId(event) {setTreesId((treesId = event.target.value));}
  function handleLocation(event) {setLocation((location = event.target.value));}
  function handlePlantingtime(event) {setPlantingtime((plantingtime = event.target.value));}




  // Table 2  >> Table 1
  let NueTrees = {"treesId": treesId,}


  let NueUsers = { 
    id: id,
    name:name,
    phone:phone,
    email:email,
    numberOfPlants:numberOfPlants,
    picture:picture,
    username:username,
    password:password,
    trees: NueTrees

}


//  Table 1 add
function handleSubmit(){
    

  


    console.log("insid function");
        console.log(NueUsers)
        axios({
            method: 'post',
            url: 'api/users/add',
            data: NueUsers,
        });
    
      }
// table 1 Del
    function handleClickDel(){

      axios({
        method: 'delete' ,
        url: "api/users/delete/10",

      });
    }




    // Table 2 add
    
function handleSubmit1(){
    }



  console.log("insid function");
      console.log(NueTrees)
      axios({
          method: 'post',
          url: 'api/trees/add',
          data: NueTrees,
      });
  


// table 2 Del
    function handleClickDel1(){


      axios({
        method: 'delete' ,
        url: "api/trees/delete/",

      });
    }





  return (
    <main style={{ }}>
     
    <div>

    {/* Table 1 */}
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

          <label> usename </label> 
          <input type="text" name="username"placeholder="" onChange={handleUserame} size="10" /><br/> <hr />

          <label> password </label> 
          <input type="text" name="password"placeholder="" onChange={handlePassword} size="10" /><br/> <hr />

          <label>  treesId:  </label>
          <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> <hr />


          <button type ="submit" onClick={()=>setDisplayBorder(!displayBorder)} >the details { displayBorder } </button>
          <button onClick={handleSubmit} > submit  </button> 
          <button onClick={handleClickDel} > delete  </button> 




 

          {/* Table 2 */}
        {displayBorder &&

        <div >
        {/* <label>  treesId:  </label>
          <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> <hr /> */}

          <label> Location </label>
          <input type="text" name="name" placeholder="" onChange={handleLocation} /><br/> <hr />

          <label> Planting Time  </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePlantingtime} /><br/><hr />
 
          <button onClick={handleSubmit1} > submit  </button> 
           <button onClick={handleClickDel1} > delete  </button> 

         

          </div>}
      </div>
    
    </main>

   
  );

 }