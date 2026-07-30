// React Hooks
import { useEffect, useState } from "react";

// React Router
import { useParams } from "react-router-dom";

// API
import api from "../services/api";

// CSS
import "../styles/ResumePreview.css";

// PDF Libraries
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumePreview() {

    // URL se Resume ID lena
    const { id } = useParams();

    // Resume State
    const [resume, setResume] = useState(null);

    // Page Load hote hi Resume Fetch hoga
    useEffect(() => {

        fetchResume();

    }, []);

    // Resume Fetch Function
    const fetchResume = async () => {

        try {

            const response = await api.get(`/resume/${id}`);

            setResume(response.data.resume);

        }

        catch (error) {

            console.log(error.response?.data);

        }

    };

    // PDF Download Function
    const downloadPDF = async () => {

        // Resume Div lena
        const input = document.getElementById("resume");

        // HTML ko Image banana
        const canvas = await html2canvas(input);

        const imgData = canvas.toDataURL("image/png");

        // PDF Create
        const pdf = new jsPDF("p", "mm", "a4");

        // Image PDF me Add
        pdf.addImage(
            imgData,
            "PNG",
            0,
            0,
            210,
            297
        );

        // Download
        pdf.save("Resume.pdf");

    };

    // Loading
    if (!resume) {

        return <h2>Loading...</h2>;

    }

    return (

        <div>

            {/* Download Button */}
            <button
                className="download-btn"
                onClick={downloadPDF}
            >
                Download PDF
            </button>

            {/* Resume */}
            <div
                className="preview"
                id="resume"
            >

                {/* Personal Info */}

                <h1>{resume.fullName}</h1>

                <p>{resume.email}</p>

                <p>{resume.phone}</p>

                <p>{resume.address}</p>

                <hr />

                {/* Objective */}

                <h2>Career Objective</h2>

                <p>{resume.objective}</p>

                <hr />

                {/* Education */}

                <h2>Education</h2>

                <p><b>College :</b> {resume.college}</p>

                <p><b>Degree :</b> {resume.degree}</p>

                <p><b>Branch :</b> {resume.branch}</p>

                <p><b>University :</b> {resume.university}</p>

                <p><b>Passing Year :</b> {resume.passingYear}</p>

                <hr />

                {/* Skills */}

                <h2>Skills</h2>

                <p>{resume.skills}</p>

                <hr />

                {/* Experience */}

                <h2>Experience</h2>

                <p><b>Company :</b> {resume.company}</p>

                <p><b>Job Title :</b> {resume.jobTitle}</p>

                <p><b>Description :</b> {resume.jobDescription}</p>

                <hr />

                {/* Projects */}

                <h2>Projects</h2>

                <p><b>Project :</b> {resume.projectTitle}</p>

                <p><b>Technologies :</b> {resume.technologies}</p>

                <p><b>Description :</b> {resume.projectDescription}</p>

                <hr />

                {/* Certification */}

                <h2>Certification</h2>

                <p>{resume.certification}</p>

                <hr />

                {/* Languages */}

                <h2>Languages</h2>

                <p>{resume.languages}</p>

            </div>

        </div>

    );

}

export default ResumePreview;