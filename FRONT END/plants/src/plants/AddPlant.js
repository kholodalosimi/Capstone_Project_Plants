import React, { useState } from "react";
import axios from "axios"



export default function AddPlant() {
   







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

  
}

         // Table 3


let  NueTreetype = {
  treetypeId : treetypeId,
  named : named,
  type : type,
  //  numberOfPlants:numberOfPlants,
  image : image
}



 // Table 2 


 let NueTrees = 
 {treesId: treesId,
  location : location,
   plantingtime : plantingtime,
  //  users : NueUsers,
   treetype : NueTreetype
  
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

    // function handleClickDel1(){
    //   axios({
    //     method: 'delete' ,
    //     url: "api/trees/delete/",

    //   });
    // }


    
  

// table 3 add

    function handleSubmit3(){
    
      console.log("insid function");
          console.log(NueTreetype)
          axios({
              method: 'post',
              url: 'api/Treetype/add',
              data: NueTreetype,
          });
      
        }
  
  
  
  

  // // table 3 Del


  //     function handleClickDel2(){
   
  //       axios({
  //         method:'delete',
  //         url:`/api/Treetype/delete/${del}`,
  
  //       });}



  return (
    <main className="input1" >
     
    <div  >

        <div >
       

        
        <label> treetypeId :  </label> 
          <input type="text" name="treetypeId"placeholder="" onChange={handleTreetypeId} size="10" /><br/> <hr />

          <label> named :  </label> 
          <input type="text" name="named"placeholder="" onChange={handleNamed} size="10" /><br/> <hr />

          <label> type :  </label> 
          <input type="text" name="type"placeholder="" onChange={handleType} size="10" /><br/> <hr />

                    <label> number Of Plants : </label> 
          <input name="numberOfPlants"placeholder="" onChange={handleNumberOfPlants} size="10" /><br/> 

         <label> image : </label> 
         <input  name="picture" placeholder="" onChange={handleImage} size="10" /><br/> 

         <button onClick={handleSubmit3} > submit3  </button> <br/> <hr />

<br></br>
<br></br>
        {/* 2 */}
        <label> Location </label>
          <input type="text" name="name" placeholder="" onChange={handleLocation} /><br/> 

          <label> Planting Time  </label> 
          <input type="text" name="phone" placeholder="" onChange={handlePlantingtime} /><br/>
          <label>  treesId:  </label>
          <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> 

          
 
          <button onClick={handleSubmit1} > submit2  </button> <br/> 

          </div>
      </div>
    
    </main>

   
  );

 }