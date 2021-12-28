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
  let[del,setdel]= useState("")// del

  // treesId
  let [treesId , setTreesId] = useState("")









// Table 2
  let [displayBorder, setDisplayBorder] = useState(false)
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
  function handleClickDel(event) {setdel((del= event.target.value))}//del TADAY n


  // treesId
  function handleTreesId(event) {setTreesId((treesId = event.target.value));}




  // Table 2
  function handleLocation(event) {setLocation((location = event.target.value));}
  function handlePlantingtime(event) {setPlantingtime((plantingtime = event.target.value));}


 // Table 2 
 let NueTrees = 
 {"treesId": treesId,
  location : location,
   plantingtime : plantingtime}


   
 

 // Table 1 
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
    function handleClickDel2(){
 
      axios({
        method:'delete',
        url:`/api/users/delete/${del}`,

      });}




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

    // function handleClickDel1(){
    //   axios({
    //     method: 'delete' ,
    //     url: "api/trees/delete/",

    //   });
    // }






  return (
    <main class="input1" >
     
    <div >

    {/* Table 1 */}
          <label>  id:  </label>
          <input c   type="text" name="firsid" placeholder="" onChange={handleId} /><br/>

           
          <label> NAME : </label>
          <input type="text" name="name" placeholder="" onChange={handleName} /><br/> 

          <label> phone : </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePhone} /><br/>

          <label> email : </label> 
          <input type="text" name="email"placeholder="" onChange={handleEmail} size="10" /><br/>

          <label> number Of Plants : </label> 
          <input name="numberOfPlants"placeholder="" onChange={handleNumberOfPlants} size="10" /><br/> 

          <label> picture : </label> 
          <input  name="picture"placeholder="" onChange={handlePicture} size="10" /><br/> 

          <label> usename : </label> 
          <input type="text" name="username"placeholder="" onChange={handleUserame} size="10" /><br/>

          <label> password :  </label> 
          <input type="password" name="password"placeholder="" onChange={handlePassword} size="10" /><br/> <hr />

          <label>  treesId:  </label>
          <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> <hr />

          <input type="text" id="id" name="id" onChange={handleClickDel} /><br />



         <input type="submit" value="Delete" onClick={handleClickDel2}></input> <br />

          <button onClick={handleSubmit} > submit  </button> <br/> <hr />
          <button type ="submit" onClick={()=>setDisplayBorder(!displayBorder)} >Location and time{ displayBorder } </button> <br/> <hr />








 



          {/* Table 2 */}
        {displayBorder &&

        <div >


          <label> Location </label>
          <input type="text" name="name" placeholder="" onChange={handleLocation} /><br/> 

          <label> Planting Time  </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePlantingtime} /><br/>
 
          <button onClick={handleSubmit1} > submit  </button> <br/> <hr />

        

          </div>}
      </div>
    
    </main>

   
  );

 }