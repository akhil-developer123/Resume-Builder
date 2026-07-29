// React Hook
import { useState } from "react";
import api from "../services/api";

// CSS
import "../styles/CreateResume.css";

// Component
import PersonalInfo from "../components/ResumeForm/PersonalInfo";
import Education from "../components/ResumeForm/Education";
import Experience from "../components/ResumeForm/Experience";
import Skills from "../components/ResumeForm/Skills";
import Projects from "../components/ResumeForm/Projects";
import Certifications from "../components/ResumeForm/Certifications";
import Languages from "../components/ResumeForm/Languages";

function CreateResume() {

    // Resume Form State
    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        phone: "",
        address: "",
        objective: "",

        college: "",
        degree: "",
        branch: "",
        university: "",
        passingYear: "",
        cgpa: "",

        company: "",
        jobTitle: "",
        jobLocation: "",
        startDate: "",
        endDate: "",
        jobDescription: "",

        skills: "",

        // Projects
        projectTitle: "",
        technologies: "",
        projectDescription: "",
        githubLink: "",

        certification: "",
        languages: "",

    });

    // Input Change Handle
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/resume", formData);

            alert(response.data.message);

            console.log(response.data);

        }

        catch (error) {

            console.log(error.response?.data);

            alert(error.response?.data?.message || "Something Went Wrong");

        }

    };

    return (

        <div className="create-page">

            <h1>Create Resume</h1>

            {/* Resume Form */}
            <form onSubmit={handleSubmit}>

                <PersonalInfo
                    formData={formData}
                    handleChange={handleChange}
                />

                <Education
                    formData={formData}
                    handleChange={handleChange}
                />

                <Experience
                    formData={formData}
                    handleChange={handleChange}
                />

                <Skills
                    formData={formData}
                    handleChange={handleChange}
                />

                <Projects
                    formData={formData}
                    handleChange={handleChange}
                />

                <Certifications
                    formData={formData}
                    handleChange={handleChange}
                />

                <Languages
                    formData={formData}
                    handleChange={handleChange}
                />

                {/* Save Button */}
                <button
                    type="submit"
                    className="save-btn"
                >
                    Save Resume
                </button>

            </form>

        </div>

    );

}

export default CreateResume;