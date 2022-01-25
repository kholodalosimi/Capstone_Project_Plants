
import React, { Component } from "react";
import axios from 'axios';
import { Link , Outlet} from "react-router-dom";



export default class PlantFriends extends Component {


 
    constructor(props) {
        super(props);

        this.state = {

            useFriends: [],

        };
    }



    componentDidMount() {
        axios.get("https://plant-friend-backend.herokuapp.com/api/trees").then(response => {
            const useFriends = response.data
            this.setState({ useFriends });

        });
    }




    render() {
        return (
    

            <div className="bubbly33" > 
             <Link to="/JoinUs"><button class="bubbly4"> Join Us </button> </Link>
                <Outlet />
              <p></p>
              
                <div className="Home2" >
             
                      {this.state.useFriends.map((item => (
                            <tr key={item.treesId}>
                           <div class="card">
                            <div class="card-header"></div>
                             <div class="card-img-container">
                               <div class="card-image">
                              <img height="200" width="200" src={item.treetype.image} />
                             </div>
                            </div>
                          <div class="card-name">
                          </div>
                            <div class="card-info">
                            <h3>name :{item.users.name}</h3>
                             <p>named :{item.treetype.named} </p>
                             <p>location :{item.location} </p>
                             <p>type :{item.treetype.type} </p>
                            </div>
                            
                           <div class="card-social">
    
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
   

