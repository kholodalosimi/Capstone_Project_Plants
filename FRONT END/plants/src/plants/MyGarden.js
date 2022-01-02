
import React, { Component } from "react";
import axios from "axios"




export default class MyGarden extends Component {


    constructor(props) {
        super(props);

        this.state = {

            useType: [],

        };
    }




    componentDidMount() {
        axios.get("api/trees").then(response => {
            const usetree = response.data
            this.setState({ usetree });
        });
    }




    

    deleteUsetree(treesId) {
        console.log("Delete after Entering")
        axios.delete(`api/trees/delete/${treesId}`)
            .then(res => {
                const usetree = this.state.useType.filter(item => item.treesId !== treesId);
                this.setState({ usetree });
            })
    }






    // componentDidMount() {
    //     axios.get("api/Treetype").then(response => {
    //         const useType = response.data
    //         this.setState({ useType });
    //     });
    // }

    // deleteUseType(treetypeId) {
    //     console.log("Delete after Entering")
    //     axios.delete(`api/users/delete/${treetypeId}`)
    //         .then(res => {
    //             const useType = this.state.useType.filter(item => item.treetypeId !== treetypeId);
    //             this.setState({ useType });
    //         })
    // }



    

    // deleteUseType(id) {
    //     console.log("Delete after Entering")
    //     axios.delete(`api/Treetype/delete/${id}`)
    //         .then(res => {
    //             const useType = this.state.useType.filter(item => item.id !== id);
    //             this.setState({ useType });
    //         })
    // }





render() {
    return (


        <div className="Home" >
            <div className="Home2">
               <p></p>
                    {this.state.useType.map((item => (
                        <tr key={item.treetypeId}>


                       <div class="card">
                        <div class="card-header"></div>
                         <div class="card-img-container">
                           <div class="card-image">
                      <img height="200" width="200" src={item.image} />
                         </div>
                        </div>
                      <div class="card-name">
                       <p>location :{item.location} </p>
                      </div>
                        <div class="card-info">
                        <p>name :{item.named} </p>
                        <p> Time : {item.plantingtime}</p>
                        <p>type :{item.type} </p>
                        </div>
                       <div class="card-social">

</div>
</div>

                 <td><button button class="bubbly" onClick={(e) => this.deleteUsetree(item.id, e)}>delete</button></td>

                        </tr>
                    )))
                    }
        
        </div>
        </div>
       
  )
}
}