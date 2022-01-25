import React, { Component } from "react";
import axios from "axios"
import { Link , Outlet} from "react-router-dom";




export default class UserProfile extends Component {


    constructor(props) {
        super(props);

        this.state = {

            useTrees: [],

        };
    }

    
    componentDidMount() {
        axios.get("https://plant-friend-backend.herokuapp.com/api/users").then(response => {
            const useTrees = response.data
            this.setState({ useTrees });
        });
    }



    deleteUseTrees(id) {
        console.log("Delete after Entering")
        axios.delete(`https://plant-friend-backend.herokuapp.com/api/users/delete/${id}`)
            .then(res => {
                const useTrees = this.state.useTrees.filter(item => item.id !== id);
                this.setState({ useTrees });
            })
    }



    render() {
        return (


    <div className="Home" >
        <div className="Home2"> 
             <div class="W1" id="W2">
                 {this.state.useTrees.map((item => (
                     <tr key={item.id}>
                           <div class="card">
                            <div class="card-header"></div>
                             <div class="card-img-container">
                               <div class="card-image">
                                <img height="200" width="200" src={item.picture} />
                                 </div>   
                                 </div>
                               <div class="card-name">
                             <p>NAME :{item.name} </p>
                          </div>
                         <div class="card-info">
                       <p>@{item.username}</p>
                      <p>id :{item.id} </p>
                      </div>
                     <div class="card-social">
                     <Link to="/AddPlant"><button class="bubbly1"> add Plant </button> </Link>
                     <Link to="/MyGarden"><button class="bubbly1"> My Garden </button> </Link>
                     <button  class="bubbly" onClick={(e) => this.deleteUseTrees(item.id, e)}>delete</button>
                       <Outlet />
                         </div>
                           </div>
                           </tr>
                        )))
                        }
                 </div> 
                 </div> 
                    </div> 
      )
  
    }
  }


