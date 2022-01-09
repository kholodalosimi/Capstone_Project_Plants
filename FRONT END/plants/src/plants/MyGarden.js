
import React, { Component } from "react";
import axios from "axios"




export default class MyGarden extends Component {


    constructor(props) {
        super(props);

        this.state = {

            useGarden: [],

        };
    }




    componentDidMount() {
        axios.get("api/trees").then(response => {
            const useGarden = response.data
            this.setState({ useGarden });
        });
    }

    deleteUseGarden(treesId) {
        console.log("Delete after Entering")
        axios.delete(`api/trees/delete/${treesId}`)
            .then(res => {
                const useGarden = this.state.useGarden.filter(item => item.treesId !== treesId);
                this.setState({ useGarden });
            })
    }



    


render() {
    return (


        <div className="Home" >
            <div className="Home2">
               <p></p>
                    {this.state.useGarden.map((item => (
                        <tr key={item.treesId}>


                       <div class="card">
                        <div class="card-header"></div>
                         <div class="card-img-container">
                           <div class="card-image">
                      <img height="250" width="250" src={item.treetype.image} />
                         </div>
                        </div>
                      <div class="card-name">
                      </div>
                        <div class="card-info">
                        <p>location :{item.location} </p>
                        <p> Time : {item.plantingtime}</p>
                        <p>named :{item.treetype.named} </p>
                        <p>type :{item.treetype.type} </p>
                        </div>
                       <div class="card-social">
<button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.treesId, e)}>delete</button>
</div>
</div>

                 
                        </tr>
                    )))
                    }
        
        </div>
        </div>
       
  )
}
}



// import React, { Component } from "react";
// import axios from "axios"




// export default class MyGarden extends Component {


//     constructor(props) {
//         super(props);

//         this.state = {

//             useGarden: [],

//         };
//     }






//     componentDidMount() {
//         axios.get("api/trees").then(response => {
//             const useGarden = response.data
//             this.setState({ useGarden });
//         });
//     }

//     deleteUseGarden(treesId) {
//         console.log("Delete after Entering")
//         axios.delete(`api/trees/delete/${treesId}`)
//             .then(res => {
//                 const useGarden = this.state.useGarden.filter(item => item.treesId !== treesId);
//                 this.setState({ useGarden });
//             })
//     }



    





// render() {
//     return (


//         <div className="Home" >
//             <div className="Home2">
//                <p></p>
//                     {this.state.useGarden.map((item => (
//                         <tr key={item.treesId}>


//                        <div class="card">
//                         <div class="card-header"></div>
//                          <div class="card-img-container">
//                            <div class="card-image">
//                       <img height="200" width="200" src={item.treetype.image} />
//                          </div>
//                         </div>
//                       <div class="card-name">
//                       </div>
//                         <div class="card-info">
//                         <p>location :{item.location} </p>
//                         <p> Time : {item.plantingtime}</p>
//                         <p>named :{item.treetype.named} </p>
//                         <p>type :{item.treetype.type} </p>
//                         {/* <p>{item.treetype.type}</p> */}
//                         </div>
//                        <div class="card-social">

// </div>
// </div>

//                  <button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.treesId, e)}>delete</button>
//                         </tr>
//                     )))
//                     }
        
//         </div>
//         </div>
       
//   )
// }
// }