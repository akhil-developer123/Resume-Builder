// Navbar ki CSS import kar rahe hain
import "../styles/Navbar.css";

// Navbar Component
function Navbar() {

    // Local Storage se User Data lena
    // JSON.parse string ko object me convert karta hai
    const user = JSON.parse(localStorage.getItem("user"));

    return (

        // Navbar ka Main Container
        <nav className="navbar">

            {/* Left Side */}
            <div className="logo">

                📄 Resume Builder

            </div>


            {/* Right Side */}
            <div className="user-info">

                👤 {user?.name}

            </div>

        </nav>

    );

}

export default Navbar;