import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

function SignIn(props) {
  console.log(props.URL);

  let history = useHistory();

  const responseGoogle = (response) => {
    console.log("log out failed");
  };

  const logout = (response) => {
    localStorage.removeItem("sessionEmail");
    localStorage.removeItem("ProfileImg");
    history.push("/");
  };

  const responseGoogleSuccess = (response) => {
    
    console.log(response);
    fetch(props.URL + "SignIn/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: response.profileObj.email,
        lastName: response.profileObj.familyName,
        firstName: response.profileObj.givenName,
        imageUrl: response.profileObj.imageUrl,
        fullName: response.profileObj.name,
      }),
    });

    localStorage.setItem("sessionEmail", response.profileObj.email);
    localStorage.setItem("ProfileImg", response.profileObj.imageUrl);
    console.log(response);
    console.log(response.profileObj);

    history.push("/");
  };

  return (
    <div>
      {localStorage.getItem("sessionEmail") === null ? (
        <h2>Welcome Back!</h2>
      ) : (
        <h2>We'll Miss You!</h2>
      )}

      {localStorage.getItem("sessionEmail") === null ? (
        <GoogleLogin
          clientId="1079871584428-l65m8fmrboqneo4ap0l4752qcsf4jn6r.apps.googleusercontent.com"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogle}
        />
      ) : (
        ""
      )}

      {localStorage.getItem("sessionEmail") !== null ? (
        <GoogleLogout
          clientId="1079871584428-l65m8fmrboqneo4ap0l4752qcsf4jn6r.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignIn;
