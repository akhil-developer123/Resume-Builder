// Profile CSS
import "../styles/Profile.css";

// React Router
import { useNavigate } from "react-router-dom";

function Profile() {

    // Navigation
    const navigate = useNavigate();

    // Local Storage se User
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <div className="profile-container">

            <h1>👤 My Profile</h1>

            <div className="profile-card">

                <h2>{user?.name}</h2>

                <p>{user?.email}</p>

            </div>

            <button
                className="back-btn"
                onClick={() => navigate("/dashboard")}
            >
                Back to Dashboard
            </button>

        </div>

    );

}

export default Profile;