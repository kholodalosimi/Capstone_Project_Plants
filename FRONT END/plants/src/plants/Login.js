import React,{useState,useContext} from 'react'
import { Route, Redirect } from 'react-router'
// import { Form, Button } from 'react-bootstrap'
import axios from "axios"
// import './App.css'






export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   /*  const authContext = useContext(AuthContext) */
    function login(e) {
        let employee = {
            username: username,
            password: password,
        }
        e.preventDefault();
        console.log({ username, password });
        //Send Api request to validate data and get token
        axios({
            method: 'post',
            url: 'login',
            data: employee
        }).then((response)=> alert(response.data));
    }
    return (
        <main  class="bubbly3">
        <h2>Login</h2>
          <form >
        <hr />
       <div>
                <label> username </label>
                <input type="username" id="#{label}" required="required" onChange={ e=>setUsername(e.target.value)}/>
                <hr />
                <label> password</label>
                <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
                <hr />
                <div class="button-container">
                            <button onClick={login} class="bubbly" ><span>Login</span></button>
                        </div>
                        {/* <div class="footer"><a href="#">Forgot your password</a></div> */}
             </div>
             </form>
      </main>
    )
}