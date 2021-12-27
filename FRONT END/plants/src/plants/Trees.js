// import React, { useState } from "react";
//  import axios from "axios"




 


// export default function Trees () {
   
//   let [displayBorder, setDisplayBorder] = useState(false)
//   let [treesId, setTreesId] = useState("")
//   let [location, setLocation] = useState("")
//   let [plantingtime, setPlantingtime] = useState("")


 
//   function handleTreesId(event) {setTreesId((id = event.target.value));}
//   function handleLocation(event) {setLocation((location = event.target.value));}
//   function handlePlantingtime(event) {setPlantingtime((plantingtime = event.target.value));}




// function handleSubmit(){
//     let NueTrees = { 
//         treesId: treesId,
//         location:location,
//         plantingtime:plantingtime,
      
//     }
//     console.log("insid function");
//         console.log(NueTrees)
//         axios({
//             method: 'post',
//             url: 'api/trees/add',
//             data: NueTrees,
//         });
//     }


  
//   return (
//    <div >

//      <form >
      
//         <hr /> 
//         {/* {displayBorder && */}
//           <label>  id </label>
//           <input type="text" name="firsid" placeholder="" onChange={handleTreesId} /><br/> <hr />

//           <hr /> 
//           <label> Location </label>
//           <input type="text" name="name" placeholder="" onChange={handleLocation} /><br/> <hr />

//           <label> Planting Time  </label> 
//           <input type="text" name="phone" placeholder="" onChange={handlePlantingtime} /><br/><hr />


//           <button onClick={handleSubmit} > submit  </button> 

        
    
//       </form>
//     </div>

//   );

//   }

