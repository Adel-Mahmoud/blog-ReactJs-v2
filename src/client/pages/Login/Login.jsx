import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null); 

  const handleLoginSuccess = (response) => {
    try {
      const decodedUser = jwt_decode(response.credential);
      console.log("User Info:", decodedUser);
      setUser(decodedUser); 
      localStorage.setItem("user", JSON.stringify(decodedUser)); 
      toast.success("Login is successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  // const handleLogout = () => {
  //   googleLogout(); 
  //   setUser(null); 
  //   console.log("User logged out");
  // };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
      <GoogleOAuthProvider clientId="946638547062-vg32bjleb7nk0a1mda76mp7aerh5ir80.apps.googleusercontent.com">
        <div className="App">
          <h1>Login with Google</h1>
          {!user ? (
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
            />
          ) : (
            <div>
              <div style={{display:'flex'}}>
                <h3>Welcome, {user.name}</h3> <img src={user.picture} style={{width:"60px"}}/>
              </div>
              {/* <br/>
              <button className="btn btn-warning" onClick={handleLogout}>
                Logout
              </button> */}
            </div>
          )}
        </div>
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;