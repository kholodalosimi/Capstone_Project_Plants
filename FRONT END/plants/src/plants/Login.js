import React,{useState,useContext} from 'react'
import { Route, Redirect } from 'react-router'
// import { Form, Button } from 'react-bootstrap'
import axios from "axios"
// import './App.css




export default function Login(props) {


    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")



    //  const authContext = useContext(AuthContext) 
    // function login(e) {
    //     let employee = {
    //         username: username,
    //         password: password,
    //     }


        
    //     e.preventDefault();
    //     console.log({ username, password });
    //     //Send Api request to validate data and get token
    //     axios({
    //         method: 'get',
    //         url: 'api/users/login',
    //         params:{username:username, password:password}
    //     }).then((res)=> alert(res.data));
    // }




    function handleUserame(event) {setUsername((username = event.target.value));}
    function handlePassword(event) {setPassword((password = event.target.value));}





function handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "get",
      url: "api/users/login",
      params: { username: username, password: password }
    })
      .then((res => {
        console.log(res.data)
        if (res.data == "welcome you Authentication") {
          props.handleLogin();
        }
        else {
          alert(res.data)
        }
      }))

    }  


 
    return (
    
        <div  class="bubbly3">
        <h2>Login</h2>
          <form >
      
       <div>
                <label> username </label>
                <input type="username" id="#{label}" required="required" onChange={ handleUserame}/>
                
                <label> password</label>
                <input type="password" id="#{label}" required="required" onChange={handlePassword}/>
                <hr></hr>
                <div class="button-container">
                 <button  type="submit" onClick={handleSubmit} class="bubbly" ><span>Login</span></button>
                       
                 </div>
                <div class="bubbly"><a >Forgot your password</a></div>
             </div>
             </form>
    
      </div>
    )
}
