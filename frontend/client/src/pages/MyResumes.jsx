// My Resumes CSS Import
import "../styles/MyResumes.css";

// React Router
import { useNavigate } from "react-router-dom";

function MyResumes() {

    // Navigation Hook
    const navigate = useNavigate();

    return (

        <div className="my-resumes-container">

            {/* Heading */}
            <h1>📁 My Resumes</h1>

            {/* Description */}
            <p>
                Yahan par user ke saare resumes dikhai denge.
            </p>

            {/* Dummy Resume Card */}
            <div className="resume-card">

                <h3>Software Developer Resume</h3>

                <p>Last Updated : Today</p>

                <button
                    onClick={() => alert("Edit Resume")}
                >
                    Edit
                </button>

                <button
                    onClick={() => alert("Delete Resume")}
                >
                    Delete
                </button>

            </div>

            {/* Dashboard Button */}
            <button
                className="back-btn"
                onClick={() => navigate("/dashboard")}
            >
                Back to Dashboard
            </button>

        </div>

    );

}

export default MyResumes;