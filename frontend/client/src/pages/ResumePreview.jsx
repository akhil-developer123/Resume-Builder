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
   // Professional PDF Download
const downloadPDF = async () => {

    // Resume Div lena
    const input = document.getElementById("resume");

    // High Quality Canvas
    const canvas = await html2canvas(input, {

        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"

    });

    // Image Data
    const imgData = canvas.toDataURL("image/png");

    // PDF Create
    const pdf = new jsPDF({

        orientation: "portrait",
        unit: "mm",
        format: "a4"

    });

    // A4 Size
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
        (canvas.height * pdfWidth) / canvas.width;

    // Image Add
    pdf.addImage(

        imgData,

        "PNG",

        0,

        0,

        pdfWidth,

        pdfHeight

    );

    // Download
    pdf.save(`${resume.fullName || "Resume"}.pdf`);

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
                id="resume"
                className={`preview ${resume.template.toLowerCase()}`}
            >

                {/* Header */}

                <div className="resume-header">

                    <h1>{resume.fullName}</h1>

                    <h3>{resume.title}</h3>

                    <div className="contact-info">

                        <span>📧 {resume.email}</span>

                        <span>📞 {resume.phone}</span>

                        <span>📍 {resume.address}</span>

                    </div>

                </div>

                <hr />

                {/* Objective */}

                <div className="section">

                    <h2>Career Objective</h2>

                    <p>{resume.objective}</p>

                </div>

                <hr />

                {/* Education */}

                <div className="section">

                    <h2>Education</h2>

                    <p><strong>College :</strong> {resume.college}</p>

                    <p><strong>Degree :</strong> {resume.degree}</p>

                    <p><strong>Branch :</strong> {resume.branch}</p>

                    <p><strong>University :</strong> {resume.university}</p>

                    <p><strong>Passing Year :</strong> {resume.passingYear}</p>

                    <p><strong>CGPA :</strong> {resume.cgpa}</p>

                </div>

                <hr />

                {/* Skills */}

                <div className="section">

                    <h2>Skills</h2>

                    <div className="badge-container">

                        {
                            resume.skills
                                ?.split(",")
                                .map((skill, index) => (

                                    <span
                                        key={index}
                                        className="badge"
                                    >

                                        {skill.trim()}

                                    </span>

                                ))
                        }

                    </div>

                </div>

                <hr />

                {/* Experience */}

                <div className="section">

                    <h2>Experience</h2>

                    <p><strong>Company :</strong> {resume.company}</p>

                    <p><strong>Job Title :</strong> {resume.jobTitle}</p>

                    <p><strong>Location :</strong> {resume.jobLocation}</p>

                    <p><strong>Duration :</strong> {resume.startDate} - {resume.endDate}</p>

                    <p>{resume.jobDescription}</p>

                </div>

                <hr />

                {/* Projects */}

                <div className="section">

                    <h2>Projects</h2>

                    <p><strong>Project :</strong> {resume.projectTitle}</p>

                    <p><strong>Technologies :</strong> {resume.technologies}</p>

                    <p>{resume.projectDescription}</p>

                    <p>

                        <strong>GitHub :</strong>

                        {resume.githubLink}

                    </p>

                </div>

                <hr />
                {/* Certification */}

                <div className="section">

                    <h2>Certification</h2>

                    <p>{resume.certification}</p>

                </div>

                <hr />

                {/* Languages */}

                <div className="section">

                    <h2>Languages</h2>

                    <div className="badge-container">

                        {
                            resume.languages
                                ?.split(",")
                                .map((language, index) => (

                                    <span
                                        key={index}
                                        className="badge"
                                    >

                                        {language.trim()}

                                    </span>

                                ))
                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ResumePreview;