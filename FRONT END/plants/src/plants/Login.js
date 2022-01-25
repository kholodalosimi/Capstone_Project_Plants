import React,{useState,useContext} from 'react'
import { Route, Redirect } from 'react-router'
import axios from "axios"




export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  function handleSubmitUser(event) {
    event.preventDefault();
    axios({

        method: "get",
        url: "https://plant-friend-backend.herokuapp.com/api/users/login",
        params: { username: username, password: password }

    })
        .then((res => {
            console.log(res.data)
            if (res.data == "welcome you Authentication ") {
                // props.handleLogin(res.data);
               localStorage.setItem("login", "welcome you Authentication")
            }
            else {
                alert(res.data)
            }
        }))
  }



 return (
    
  <main  class="bubbly3">
  <h2>Login</h2>
    <form >

 <div>
          <label> username </label>
          <input type="username" id="#{label}" required="required" onChange={ e=>setUsername(e.target.value)}/>
          
          <label> password</label>
          <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
          <hr></hr>
          <div class="button-container">
           <button  type="submit" onClick={handleSubmitUser} class="bubbly" >Login</button>
                 
                 
           </div>
          <div class="bubbly"><a >Forgot your password</a></div>
       </div>
       </form>

</main>
)
}
