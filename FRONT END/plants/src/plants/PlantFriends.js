
import React, { Component } from "react";
import axios, { Axios } from "axios"



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
                        {this.state.useFriends.map((item => (
                            <tr key={item.treetypeId}>
                                <td>{item.treetype}</td>
                                <td>{item.named}</td>
                                <td>{item.type}</td>
                                <td><img height="200" width="200" src={item.image} /></td>
                                <td>{item.numberOfPlants}</td>  
                             
                            </tr>
                        )))
                        }
            </div>
            </div>
           
      )
    }
  }