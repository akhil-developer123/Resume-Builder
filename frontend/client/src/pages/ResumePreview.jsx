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
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

function ResumePreview() {

    // URL se Resume ID lena
    const { id } = useParams();

    // Resume State
    const [resume, setResume] = useState(null);

    // Selected Template
    const [template, setTemplate] = useState("modern");

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
    // DOCX Download Function
    const downloadDOCX = async () => {

        const doc = new Document({

            sections: [

                {

                    children: [

                        new Paragraph({

                            children: [

                                new TextRun({

                                    text: resume.title || "Resume",

                                    bold: true,

                                    size: 32

                                })

                            ]

                        }),


                        new Paragraph(
                            `Name: ${resume.fullName || ""}`
                        ),


                        new Paragraph(
                            `Email: ${resume.email || ""}`
                        ),


                        new Paragraph(
                            `Phone: ${resume.phone || ""}`
                        ),


                        new Paragraph(
                            `Address: ${resume.address || ""}`
                        ),


                        new Paragraph(
                            ``
                        ),


                        new Paragraph({

                            children: [

                                new TextRun({

                                    text: "Career Objective",

                                    bold: true

                                })

                            ]

                        }),


                        new Paragraph(
                            resume.objective || ""
                        ),


                        new Paragraph({

                            children: [

                                new TextRun({

                                    text: "Education",

                                    bold: true

                                })

                            ]

                        }),


                        new Paragraph(
                            `College: ${resume.college || ""}`
                        ),


                        new Paragraph(
                            `Degree: ${resume.degree || ""}`
                        ),


                        new Paragraph(
                            `Branch: ${resume.branch || ""}`
                        ),


                        new Paragraph({

                            children: [

                                new TextRun({

                                    text: "Skills",

                                    bold: true

                                })

                            ]

                        }),


                        new Paragraph(
                            Array.isArray(resume.skills)
                                ? resume.skills.join(", ")
                                : resume.skills || ""
                        )

                    ]

                }

            ]

        });


        const blob = await Packer.toBlob(doc);


        saveAs(

            blob,

            `${resume.fullName || "Resume"}.docx`

        );

    };

    // Loading
    if (!resume) {

        return <h2>Loading...</h2>;

    }

    return (

        <div>

            <div className="template-selector">

                <label>

                    <b>Select Template :</b>

                </label>

                <select

                    value={template}

                    onChange={(e) => setTemplate(e.target.value)}

                >

                    <option value="modern">
                        Modern
                    </option>

                    <option value="classic">
                        Classic
                    </option>

                    <option value="minimal">
                        Minimal
                    </option>

                </select>

            </div>

            {/* Download Button */}
            <button
                className="download-btn"
                onClick={downloadPDF}
            >
                Download PDF
            </button>

            <button
                className="download-btn"
                onClick={downloadDOCX}
            >
                Download DOCX
            </button>

            {/* Resume */}
            <div
                id="resume"
                className={`preview ${(resume.template || "modern").toLowerCase()}`}
            >

                {/* Header */}

                <div className="resume-header">

                    <h1>{resume.fullName || "No Name"}</h1>

                    <h3>{resume.title || "Untitled Resume"}</h3>

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

                            Array.isArray(resume.skills)

                                ?

                                resume.skills.map((skill, index) => (

                                    <span
                                        key={index}
                                        className="badge"
                                    >

                                        {skill}

                                    </span>

                                ))

                                :

                                (resume.skills || "")
                                    .split(",")
                                    .filter(Boolean)
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