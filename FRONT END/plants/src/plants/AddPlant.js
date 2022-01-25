import React, { useState } from "react";
import axios from "axios"



export default function AddPlant() {
   



  //Table 1
  let [id, setId] = useState("")




// Table 2
  let [location, setLocation] = useState("")
  let [plantingtime, setPlantingtime] = useState("")
  let [treesId , setTreesId] = useState("")



   // Table 3
  let [treetypeId, setTreetypeId] = useState("")
  let [named, setNamed] = useState("")
  let [type, setType] = useState("")
  let [numberOfPlants, setNumberOfPlants] = useState("")
  let [image, setImage] = useState("")

  let [displayBorder, setDisplayBorder] = useState(false)



  // Table 1
  function handleId(event) {setId((id = event.target.value));}


  // Table 2
  function handleLocation(event) {setLocation((location = event.target.value));}
  function handlePlantingtime(event) {setPlantingtime((plantingtime = event.target.value));}
  function handleTreesId(event) {setTreesId((treesId = event.target.value));}



      // Table 3
  function handleTreetypeId(event) {setTreetypeId((treetypeId = event.target.value));}
  function handleNamed(event) {setNamed((named = event.target.value));}
  function handleType(event) {setType((type = event.target.value));}
  function handleNumberOfPlants(event) {setNumberOfPlants((numberOfPlants = event.target.value));}
  function handleImage(event) {setImage((image = event.target.value));}





 // Table 1  

let NueUsers = { 

  id: id
  
}

 // Table 3

let  NueTreetype = {
  treetypeId : treetypeId,
  named : named,
  type : type,
   numberOfPlants:numberOfPlants,
  image : image
}


 // Table 2 


 let NueTrees = {
   treesId: treesId,
  location : location,
   plantingtime : plantingtime,
   users : NueUsers,
   treetype : NueTreetype
  
  }




 // Table 2 add 



function handleSubmit1(){
    }
  console.log("insid function");
      console.log(NueTrees)
      axios({
          method: 'post',
          url: 'https://plant-friend-backend.herokuapp.com/api/trees/add',
          data: NueTrees,
          
      });







// table 3 add

    function handleSubmit3(){
    
      console.log("insid function");
          console.log(NueTreetype)
          axios({
              method: 'post',
              url: 'https://plant-friend-backend.herokuapp.com/api/Treetype/add',
              data: NueTreetype,
          });
      
        }
  




  return (
    <main className="input1" >
     
    <div >

        <div >
          <h3><i>Add Plant</i></h3>
        <label> treetypeId :  </label> 
          <input type="text" name="treetypeId"placeholder="" onChange={handleTreetypeId} size="10" /><br/> 

          <label> named :  </label> 
          <input type="text" name="named"placeholder="" onChange={handleNamed} size="10" /><br/> 

          <label> type :  </label> 
          <input type="text" name="type"placeholder="" onChange={handleType} size="10" /><br/> 

                    <label> number Of Plants : </label> 
          <input name="numberOfPlants"placeholder="" onChange={handleNumberOfPlants} size="10" /><br/> 

         <label> image : </label> 
         <input type="picture" name="picture" placeholder="" onChange={handleImage} size="10" /><br/> 

         <button onClick={handleSubmit3} class="bubbly" > submit3  </button> <br/> 

         <button type ="submit" onClick={()=>setDisplayBorder(!displayBorder)}  class="bubbly" >other details { displayBorder ?"Hide":"Show"} </button>
 </div>



        {/* 2 */}
        
        
        {displayBorder &&
       <div>
        <label> Location </label>
          <input type="text" name="name" placeholder="" onChange={handleLocation} /><br/> 

          <label> Planting Time  </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePlantingtime} /><br/>
          <label>  treesId:  </label>
          <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> 

          <label> treetypeId :  </label> 
          <input type="text" name="treetypeId"placeholder="" onChange={handleTreetypeId} size="10" /><br/> 
          <label>  id:  </label>
          <input type="text" name="id" placeholder="" onChange={handleId} /><br/>
    

          <button onClick={handleSubmit1} class="bubbly" > submit2  </button> <br/> 
        

          </div>}

    </div>

    </main>
  
   
  );

 }