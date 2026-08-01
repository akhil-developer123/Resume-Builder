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

    const [resumeCount,setResumeCount] = useState(0);

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

    const fetchResumeCount = async()=>{

    try{

        const response = await api.get("/resume");

        setResumeCount(response.data.count);

    }
    catch(error){

        console.log(error);

    }

};

useEffect(()=>{

    fetchResumeCount();

},[]);

    return (

        <>

            {/* Top Navbar */}
            <Navbar />

            {/* Dashboard Main Container */}
            <div className="dashboard-container">

                {/* Dashboard Box */}
                <div className="dashboard-box">

                    {/* Heading */}
                    <h1>
                        Resume Builder
                    </h1>

                    {/* Welcome Message */}
                    <h2>
                        Welcome, {user?.name} 👋
                    </h2>

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

                </div>

            </div>

        </>

    );

}

export default Dashboard;