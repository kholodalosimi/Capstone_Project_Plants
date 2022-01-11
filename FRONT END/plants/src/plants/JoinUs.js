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
  // let[del,setdel]= useState("")// del
  // treesId
  // let [treesId , setTreesId] = useState("")






// Table 2
  // let [displayBorder, setDisplayBorder] = useState(false)
  // let [location, setLocation] = useState("")
  // let [plantingtime, setPlantingtime] = useState("")
 




  
  // Table 3
  // let [treetypeId, setTreetypeId] = useState("")
  // let [named, setNamed] = useState("")
  // let [type, setType] = useState("")
  // let [numberOfPlants, setNumberOfPlants] = useState("")
  // let [image, setImage] = useState("")




//Table 1
  function handleId(event) {setId((id = event.target.value));}
  function handleName(event) {setName((name = event.target.value));}
  function handlePhone(event) {setPhone((phone = event.target.value));}
  function handleEmail(event) {setEmail((email = event.target.value));}
  function handlePicture(event) {setPicture((picture = event.target.value));}
  function handleUserame(event) {setUsername((username = event.target.value));}
  function handlePassword(event) {setPassword((password = event.target.value));}
  // function handleClickDel(event) {setdel((del= event.target.value))}//del 

  
  // treesId
  // function handleTreesId(event) {setTreesId((treesId = event.target.value));}





  // Table 2
  // function handleLocation(event) {setLocation((location = event.target.value));}
  // function handlePlantingtime(event) {setPlantingtime((plantingtime = event.target.value));}




    // Table 3
  // function handleTreetypeId(event) {setTreetypeId((treetypeId = event.target.value));}
  // function handleNamed(event) {setNamed((named = event.target.value));}
  // function handleType(event) {setType((type = event.target.value));}
  // function handleNumberOfPlants(event) {setNumberOfPlants((numberOfPlants = event.target.value));}
  // function handleImage(event) {setImage((image = event.target.value));}




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


       // Table 3


// let  NueTreetype = {
//   treetypeId : treetypeId,
//   named : named,
//   type : type,
//    numberOfPlants:numberOfPlants,
//   image : image
// }
 


 // Table 2 

//  let NueTrees = 
//  {treesId: treesId,
//   location : location,
//    plantingtime : plantingtime,
//    users : NueUsers,
//    Treetype : NueTreetype
  
//   }






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
    // function handleClickDel2(){
 
    //   axios({
    //     method:'delete',
    //     url:`/api/users/delete/${del}`,

    //   });}




    // Table 2 add 


// function handleSubmit1(){
//     }
//   console.log("insid function");
//       console.log(NueTrees)
//       axios({
//           method: 'post',
//           url: 'api/trees/add',
//           data: NueTrees,
          
//       });
  



// table 2 Del

    // function handleClickDel1(){
    //   axios({
    //     method: 'delete' ,
    //     url: "api/trees/delete/",

    //   });
    // }



// table 3 add


    // function handleSubmit3(){
    
    //   console.log("insid function");
    //       console.log(NueTreetype)
    //       axios({
    //           method: 'post',
    //           url: 'api/Treetype/add',
    //           data: NueTreetype,
    //       });
      
    //     }
  
  
  
  

  // // table 3 Del


  //     function handleClickDel2(){
   
  //       axios({
  //         method:'delete',
  //         url:`/api/Treetype/delete/${del}`,
  
  //       });}




  return (
    
    <main className="input1" >

      
    <div>
 

    {/* Table 1 */}


          <label>  id:  </label>
          <input type="text" name="id" placeholder="" onChange={handleId} /><br/>

          <label> NAME : </label>
          <input type="text" name="name" onChange={handleName} /><br/> 

          <label> phone : </label> 
          <input type="text" name="phone"  onChange={handlePhone} /><br/>

          <label> email : </label> 
          <input type="text" name="email" onChange={handleEmail} size="10" /><br/>

          <label> picture : </label> 
          <input  name="picture" type="file" onChange={handlePicture} size="10" /><br/> 

          <label> usename : </label> 
          <input type="text" name="username" onChange={handleUserame} size="10" /><br/>

          <label> password :  </label> 
          <input type="password" name="password" onChange={handlePassword} size="10" /><br/>


          {/* <label>  treesId:  </label>
          <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> <hr /> */}

          {/* <input type="text" id="id" name="id" onChange={handleClickDel} /><br />
         <input type="submit" value="Delete" onClick={handleClickDel2}></input> <br /> */}

          <button onClick={handleSubmit} class="bubbly" > submit1  </button> <br/>
          {/* <button type ="submit" onClick={()=>setDisplayBorder(!displayBorder)} >2+3{ displayBorder } </button> <br/> <hr /> */}








 




          {/* Table 2 */}
        {/* {displayBorder && */}

        <div >
          {/* <label> Location </label>
          <input type="text" name="name" placeholder="" onChange={handleLocation} /><br/> 

          <label> Planting Time  </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePlantingtime} /><br/>
 
          <button onClick={handleSubmit1} > submit2  </button> <br/> <hr /> */}



        {/* 3 */}
        {/* <label> treetypeId :  </label> 
          <input type="text" name="treetypeId"placeholder="" onChange={handleTreetypeId} size="10" /><br/> <hr />

          <label> named :  </label> 
          <input type="text" name="named"placeholder="" onChange={handleNamed} size="10" /><br/> <hr />

          <label> type :  </label> 
          <input type="text" name="type"placeholder="" onChange={handleType} size="10" /><br/> <hr />

                    <label> number Of Plants : </label> 
          <input name="numberOfPlants"placeholder="" onChange={handleNumberOfPlants} size="10" /><br/> 

         <label> image : </label> 
         <input  name="picture" placeholder="" onChange={handleImage} size="10" /><br/> 

         <button onClick={handleSubmit3} > submit3  </button> <br/> <hr /> */}

      </div>
   </div> 
 
    </main>
  

   
  );

 }