// React useState import
import { useState } from "react";

// CSS import
import "../styles/Register.css";
import api from "../services/api";


// Register Component
function Register() {


  // Name State
  const [name, setName] = useState("");


  // Email State
  const [email, setEmail] = useState("");


  // Password State
  const [password, setPassword] = useState("");


  // Confirm Password State
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    // Page reload hone se rokega
    e.preventDefault();

    console.log("Register Button Clicked");

    // Purane messages clear
    setMessage("");
    setError("");


    // Password check
    if (password !== confirmPassword) {

      setError("Password does not match");

      return;

    }


    try {

      console.log("API Calling Started");

      // Backend API call
      const response = await api.post("/auth/register", {

        name,
        email,
        password

      });


      console.log(response.data);


      setMessage("Registration Successful");


    } catch (error) {

      console.log("API Error:", error);


      setError(
        error.response?.data?.message || "Something went wrong"
      );


    }

  };


  return (

    <div className="register-container">


      <div className="register-box">


        <div className="register-header">

          <div className="logo-circle">
            📄
          </div>

          <h1>
            Resume Builder
          </h1>

          <h2>
            Create Account
          </h2>

          <p>
            Start building your professional resume today.
          </p>

        </div>

        <form onSubmit={handleSubmit}>


          {/* Name */}
          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"

              value={name}

              onChange={(e) => setName(e.target.value)}
            />

          </div>



          {/* Email */}
          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}
            />

          </div>



          {/* Password */}
          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}
            />

          </div>



          {/* Confirm Password */}
          <div className="input-group">

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"

              value={confirmPassword}

              onChange={(e) => setConfirmPassword(e.target.value)}
            />

          </div>

          {
            message && <p className="success">{message}</p>
          }


          {
            error && <p className="error">{error}</p>
          }

          {/* Button */}
          <button type="submit">
            Register
          </button>


        </form>



        <p className="login-text">

          Already have an account?

          <a href="/login">
            Login
          </a>

        </p>


      </div>


    </div>

  );
}


export default Register;