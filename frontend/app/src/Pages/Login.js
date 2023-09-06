// import React from "react";
// import * as Components from '../Components/Components';
// function Login() {
//     const [signIn, toggle] = React.useState(true);
//      return(
//          <Components.Container>
//              <Components.SignUpContainer signinIn={signIn}>
//                  <Components.Form>
//                      <Components.Title>Create Account</Components.Title>
//                      <Components.Input type='text' placeholder='Name' />
//                      <Components.Input type='email' placeholder='Email' />
//                      <Components.Input type='password' placeholder='Password' />
//                      <Components.Button>Sign Up</Components.Button>
//                  </Components.Form>
//              </Components.SignUpContainer>

//              <Components.SignInContainer signinIn={signIn}>
//                   <Components.Form>
//                       <Components.Title>Sign in</Components.Title>
//                       <Components.Input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
//                       <Components.Input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
//                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
//                       <Components.Button onClick={submit}>Sigin In</Components.Button>
//                   </Components.Form>
//              </Components.SignInContainer>

//              <Components.OverlayContainer signinIn={signIn}>
//                  <Components.Overlay signinIn={signIn}>

//                  <Components.LeftOverlayPanel signinIn={signIn}>
//                      <Components.Title>Welcome Back!</Components.Title>
//                      <Components.Paragraph>
//                          To keep connected with us please login with your personal info
//                      </Components.Paragraph>
//                      <Components.GhostButton onClick={() => toggle(true)}>
//                          Sign In
//                      </Components.GhostButton>
//                      </Components.LeftOverlayPanel>

//                      <Components.RightOverlayPanel signinIn={signIn}>
//                        <Components.Title>Hello, Friend!</Components.Title>
//                        <Components.Paragraph>
//                            Enter Your personal details and start journey with us
//                        </Components.Paragraph>
//                            <Components.GhostButton onClick={() => toggle(false)}>
//                                Sign Up
//                            </Components.GhostButton> 
//                      </Components.RightOverlayPanel>
 
//                  </Components.Overlay>
//              </Components.OverlayContainer>

//          </Components.Container>
//      )
// }

// export default Login;

import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Signup">Signup Page</Link>

        </div>
    )
}

export default Login