
import React, { Component } from "react";
import axios, { Axios } from "axios"
// import { Card } from "stream-chat-react";



export default class PlantFriends extends Component {


    constructor(props) {
        super(props);

        this.state = {

            useTrees: [],

        };
    }



    componentDidMount() {
        axios.get("api/users").then(response => {
            const useTrees = response.data
            this.setState({ useTrees });
        });
    }




    deleteUseTrees(id) {
        console.log("Delete after Entering")
        axios.delete(`api/users/delete/${id}`)
            .then(res => {
                const useTrees = this.state.useTrees.filter(item => item.id !== id);
                this.setState({ useTrees });
            })
    }






 

    render() {
        return (


            <div className="Home" >
                <table >
                    <thead>
                       
                            <th className="Home2" >id </th> 
                            <th >name </th>
                            <th >phone </th>
                            <th >email</th>
                            <th >image</th>
                            <th >number Of Plants</th>
                            <th >username</th>
                            <th >password</th>
                        
                    </thead>

                    <tbody>
                        {this.state.useTrees.map((item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.numberOfPlants}</td>
                                <td><img height="200" width="200" src={item.picture} /></td>
                                <td>{item.username}</td>  
                                <td>{item.password}</td>
                                <td><button onClick={(e) => this.deleteUseTrees(item.id, e)}>delete</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
            </div>
      )
    }
  }