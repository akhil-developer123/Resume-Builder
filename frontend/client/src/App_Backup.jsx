// React se useState aur useEffect import kar rahe hain
import { useEffect, useState } from "react";

function App() {

  // Backend se aane wale message ko store karne ke liye state banayi
  const [message, setMessage] = useState("");

  // useEffect component ke load hote hi sirf ek baar chalega
  useEffect(() => {

    // Backend API ko request bhej rahe hain
    fetch("http://localhost:5000/api/test")

      // Backend se response JSON format me convert kar rahe hain
      .then((res) => res.json())

      // JSON me jo data aaya hai usko use kar rahe hain
      .then((data) => {

        // Backend ka message state me save kar rahe hain
        setMessage(data.message);

      })

      // Agar koi error aaye to console me print hoga
      .catch((err) => {
        console.log(err);
      });

  }, []); // [] ka matlab sirf ek baar component load hone par chalega

  // Screen par kya dikhana hai
  return (

    <div>

      {/* Project Heading */}
      <h1>Resume Builder Project</h1>

      {/* Backend se aaya hua message yahan show hoga */}
      <h2>{message}</h2>

    </div>

  );

}

// Is component ko dusri files me use karne ke liye export kar rahe hain
export default App;