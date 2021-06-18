import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import {GoogleLogin} from 'react-google-login'
import { GoogleLogout } from 'react-google-login';




function SignIn() {
  const [x, setx] = useState(0)
  let history = useHistory();
  
  const responseGoogle = (response) =>{
    console.log(response);
    console.log(response.profileObj)
  }
  
  const logout = (response) =>{
    console.log(response);
    console.log(response.profileObj)

  }

  const responseGoogleSuccess = (response) =>{
    console.log(response);
    console.log(response.profileObj)
    setx(1);
    history.push('/')
  }

    return (
      <div>
        <h2>Welcome Back!</h2>

        { x === 0 ? <GoogleLogin
        clientId="1079871584428-l65m8fmrboqneo4ap0l4752qcsf4jn6r.apps.googleusercontent.com"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogle}
        /> : '' }

        {x === 1 ? <GoogleLogout
      clientId="1079871584428-l65m8fmrboqneo4ap0l4752qcsf4jn6r.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={responseGoogle}
    >
    </GoogleLogout> : ''
}
      </div>
      
    )
}

export default SignIn
