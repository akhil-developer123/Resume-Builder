// React Router
import { useNavigate, useParams } from "react-router-dom";

// React Hook
import { useEffect, useState } from "react";
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
import TemplateSelector from "../components/TemplateSelector";

function CreateResume() {

    // Navigation Hook
    const navigate = useNavigate();

    // URL se Resume ID lena
    const { id } = useParams();

    // Resume Form State
    const [formData, setFormData] = useState({

        title: "",
        template: "Classic",

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


    const fetchResume = async () => {

        try {

            const response = await api.get(`/resume/${id}`);

            // Form me purana data bhar dena
            setFormData(response.data.resume);

        } catch (error) {

            console.log(error.response?.data);

        }

    };

    // Agar Edit Mode hai to Resume Load karo
    useEffect(() => {

        if (id) {

            fetchResume();

        }

    }, [id]);

   // AI Suggestion
const improveWithAI = async () => {

    try {

        const response = await api.post(

            "/ai/improve",

            formData

        );

        // AI Result Page par bhejna
        navigate("/ai-result", {

            state: {

                result: response.data.result

            }

        });

    } catch (error) {

        console.log(error.response?.data);

        alert("AI Suggestion Failed");

    }

};

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            let response;

            // Agar ID hai to Resume Update karo
            if (id) {

                response = await api.put(`/resume/${id}`, formData);

            } else {

                // Naya Resume Create karo
                response = await api.post("/resume", formData);

            }

            alert(response.data.message);

            // Save hone ke baad My Resumes page par bhejna
            navigate("/my-resumes");

            console.log(response.data);

        }

        catch (error) {

            console.log(error.response?.data);

            alert(error.response?.data?.message || "Something Went Wrong");

        }

    };



    return (

        <div className="create-page">

            <h1>
                {id ? "Edit Resume" : "Create Resume"}
            </h1>

            {/* Resume Form */}
            <form onSubmit={handleSubmit}>

                <TemplateSelector

                    formData={formData}

                    handleChange={handleChange}

                />

                <PersonalInfo
                    formData={formData}
                    handleChange={handleChange}
                />

                <div className="ai-btn-container">

                    <button
                        type="button"
                        className="ai-btn"
                        onClick={improveWithAI}
                    >
                        ✨ Improve Objective with AI
                    </button>

                </div>
                // Edit Mode me Resume Fetch karna

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
                    {id ? "Update Resume" : "Save Resume"}
                </button>

            </form>

        </div>

    );

}

export default CreateResume;