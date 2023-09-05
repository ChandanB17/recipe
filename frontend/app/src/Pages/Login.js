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

import React, { Component, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:4000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}