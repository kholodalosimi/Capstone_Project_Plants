
// import React from 'react';
import React, { Component } from "react";
import axios from 'axios';
// import axios, { Axios } from "axios"



export default class PlantFriends extends Component {


    constructor(props) {
        super(props);

        this.state = {

            useFriends: [],

        };
    }







    componentDidMount() {
        axios.get("api/trees").then(response => {
            const useFriends = response.data
            this.setState({ useFriends });

        });
    }






    render() {
        return (
    
    
            <div className="Home" >
                <div className="Home2">
                   <p></p>
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
                            <p> Time : {item.plantingtime}</p>
                            <p>type :{item.treetype.type} </p>
                            {/* <p>{item.treetype.type}</p> */}
                            </div>
                            
                           <div class="card-social">
    
    </div>
    </div>
    
                     <td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.treesId, e)}>delete</button></td>
    
                            </tr>
                        )))
                        }
            
            </div>
            </div>
           
      )
    }
    }
   
  
                       



