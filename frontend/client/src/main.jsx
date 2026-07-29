// React ko import kar rahe hain
import React from "react";

// ReactDOM se app browser me render hota hai
import ReactDOM from "react-dom/client";

// BrowserRouter routing ke liye use hota hai
import { BrowserRouter } from "react-router-dom";

// Hamara main App component
import App from "./App";

// CSS file
import "./index.css";

// App ko browser me render kar rahe hain
ReactDOM.createRoot(document.getElementById("root")).render(

  // BrowserRouter ke andar poori application rahegi
  <BrowserRouter>

    <App />

  </BrowserRouter>

);