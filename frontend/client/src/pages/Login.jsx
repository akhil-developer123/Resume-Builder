// Login Page ka CSS import
import "../styles/Login.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {

  // Input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Message state
  const [message, setMessage] = useState("");

  // Navigate
  const navigate = useNavigate();


  // Login Function
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      console.log("Login Button Clicked");

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );


      console.log(response.data);


      // Token save karna
      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      console.log(
        "Token Saved:",
        localStorage.getItem("token")
      );

      console.log(
        "User Saved:",
        localStorage.getItem("user")
      );



      // User save karna
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );


      setMessage("Login Successful");


      // Dashboard redirect
      setTimeout(() => {

        navigate("/dashboard");

      }, 1000);


    }

    catch (error) {

      console.log(error.response);

      setMessage(
        error.response?.data?.message || "Login Failed"
      );

    }

  };


  return (

    <div className="login-container">


      <div className="login-box">


        <div className="login-header">

          <div className="logo-circle">
            📄
          </div>

          <h1>Resume Builder</h1>

          <h2>Welcome Back</h2>

          <p>
            Login to continue building your professional resume.
          </p>

        </div>


        <form onSubmit={handleSubmit}>


          <div className="input-group">

            <label>Email</label>

            <input

              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

            />

          </div>



          <div className="input-group">


            <label>Password</label>


            <input

              type="password"

              placeholder="Enter your password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

            />


          </div>



          <button type="submit">

            Login

          </button>



        </form>


        {/* Response Message */}

        {
          message && (

            <p>
              {message}
            </p>

          )
        }



        <p className="register-text">
          Don't have an account?
          <span
            className="register-link"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>


      </div>


    </div>

  );

}


export default Login;