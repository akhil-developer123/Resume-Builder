import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

// Navbar
import Navbar from "../components/Navbar";

// Dashboard Card
import DashboardCard from "../components/DashboardCard";

// CSS
import "../styles/Dashboard.css";

function Dashboard() {

    const [resumeCount, setResumeCount] = useState(0);
    const [recentResumes, setRecentResumes] = useState([]);

    // React Router ka Hook
    // Isse ek page se dusre page par ja sakte hain
    const navigate = useNavigate();

    // Local Storage se User Data lena
    // JSON.parse() string ko object me convert karta hai
    const user = JSON.parse(localStorage.getItem("user"));

    // Logout Function
    const handleLogout = () => {

        // Local Storage se Token Delete
        localStorage.removeItem("token");

        // Local Storage se User Delete
        localStorage.removeItem("user");

        // Login Page par Redirect
        navigate("/login");

    };

    const fetchDashboardData = async () => {

        try {

            console.log("Fetching Resume Data...");

            const response = await api.get("/resume");

            console.log("API RESPONSE:", response.data);

            const resumes = response.data.resumes || [];

            setResumeCount(resumes.length);

            const sortedResumes = [...resumes]
                .sort(
                    (a, b) =>
                        new Date(b.updatedAt || b.createdAt) -
                        new Date(a.updatedAt || a.createdAt)
                )
                .slice(0, 5);

            setRecentResumes(sortedResumes);

        }
        catch (error) {

            console.log("API ERROR:", error);

        }

    };

    useEffect(() => {

        fetchDashboardData();

    }, []);

    useEffect(() => {

        console.log(recentResumes);

    }, [recentResumes]);


    return (

        <>

            {/* Top Navbar */}
            <Navbar />

            {/* Dashboard Main Container */}
            <div className="dashboard-container">

                {/* Dashboard Box */}
                <div className="dashboard-box">

                    {/* Heading */}
                    <div className="dashboard-header">

                        <h1>
                            📄 Resume Builder
                        </h1>

                        <h2>
                            Welcome, {user?.name}
                        </h2>

                       

                    </div>

                    <div className="resume-count-card">

                        <h3>
                            Total Resumes
                        </h3>

                        <h1>
                            {resumeCount}
                        </h1>

                    </div>

                    {/* User Email */}
                    <p>
                        {user?.email}
                    </p>

                    {/* Dashboard Cards */}
                    <div className="cards-container">

                        {/* Create Resume */}
                        <DashboardCard
                            icon="📄"
                            title="Create Resume"
                            onClick={() => navigate("/create-resume")}
                        />

                        {/* Improve Resume */}
                        <DashboardCard
                            icon="✨"
                            title="Improve Resume"
                            onClick={() => navigate("/improve-resume")}
                        />

                        {/* My Resumes */}
                        <DashboardCard
                            icon="📁"
                            title="My Resumes"
                            onClick={() => navigate("/my-resumes")}
                        />

                        {/* Profile */}
                        <DashboardCard
                            icon="👤"
                            title="Profile"
                            onClick={() => navigate("/profile")}
                        />

                        {/* Logout */}
                        <DashboardCard
                            icon="🚪"
                            title="Logout"
                            onClick={handleLogout}
                        />

                    </div>
                    {/* Recent Resumes */}

                    <div className="recent-resumes">

                        <h2>
                            Recent Resumes
                        </h2>


                        {
                            recentResumes.length === 0 ? (

                                <p>
                                    No Resume Found
                                </p>

                            ) : (

                                recentResumes.map((resume) => (

                                    <div
                                        className="recent-resume-card"
                                        key={resume._id}
                                    >

                                        <div>

                                            <h3>
                                                {resume.title}
                                            </h3>

                                            <p>
                                                Updated: {
                                                    new Date(
                                                        resume.updatedAt || resume.createdAt
                                                    )
                                                        .toLocaleDateString()
                                                }
                                            </p>

                                        </div>


                                        <div className="resume-actions">

                                            <button
                                                onClick={() =>
                                                    navigate(`/resume/${resume._id}`)
                                                }
                                            >
                                                Preview
                                            </button>


                                            <button
                                                onClick={() =>
                                                    navigate(`/edit-resume/${resume._id}`)
                                                }
                                            >
                                                Edit
                                            </button>

                                        </div>


                                    </div>

                                ))

                            )
                        }


                    </div>

                </div>

            </div>

        </>

    );

}

export default Dashboard;