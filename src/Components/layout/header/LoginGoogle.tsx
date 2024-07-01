import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { CredentialResponse } from "@react-oauth/google"; // Import the type for the response

function LoginGoogle() {
  return (
    <GoogleLogin
      onSuccess={(response: CredentialResponse) => {
        console.log(response);
      }}
      onError={()=>{
        console.log("Error");
      }}
    />
  );
}

export default LoginGoogle;