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
    const [template, setTemplate] = useState("");

    // Resume Fetch
    useEffect(() => {

        fetchResume();

    }, [id]);

    const fetchResume = async () => {

        try {

            const response = await api.get(`/resume/${id}`);

            setResume(response.data.resume);

            setTemplate(
                response.data.resume.template?.toLowerCase() || "classic"
            );

        } catch (error) {

            console.log(error.response?.data);

        }

    };


    // PDF Download
    const downloadPDF = async () => {

        try {

            const input = document.getElementById("resume");

            const canvas = await html2canvas(input, {

                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                windowWidth: input.scrollWidth,

                windowHeight: input.scrollHeight


            });

            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF({

                orientation: "portrait",
                unit: "mm",
                format: "a4"

            });

            const pdfWidth = pdf.internal.pageSize.getWidth();

            const pdfHeight =
                (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(

                imgData,
                "PNG",
                0,
                0,
                pdfWidth,
                pdfHeight

            );

            pdf.save(
                `${resume.fullName || "Resume"}.pdf`
            );

        } catch (error) {

            console.log("PDF Download Error:", error);

        }

    };


    // DOCX Download
    const downloadDOCX = async () => {

        try {

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

                            new Paragraph(""),

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

                            new Paragraph(
                                `University: ${resume.university || ""}`
                            ),

                            new Paragraph(
                                `Passing Year: ${resume.passingYear || ""}`
                            ),

                            new Paragraph(
                                `CGPA: ${resume.cgpa || ""}`
                            ),

                            new Paragraph({

                                children: [

                                    new TextRun({

                                        text: "Experience",
                                        bold: true

                                    })

                                ]

                            }),

                            new Paragraph(
                                `Company: ${resume.company || ""}`
                            ),

                            new Paragraph(
                                `Job Title: ${resume.jobTitle || ""}`
                            ),

                            new Paragraph(
                                `Location: ${resume.jobLocation || ""}`
                            ),

                            new Paragraph(
                                `Duration: ${resume.startDate || ""} - ${resume.endDate || ""}`
                            ),

                            new Paragraph(
                                resume.jobDescription || ""
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

                            ),

                            new Paragraph({

                                children: [

                                    new TextRun({

                                        text: "Projects",
                                        bold: true

                                    })

                                ]

                            }),

                            new Paragraph(
                                `Project: ${resume.projectTitle || ""}`
                            ),

                            new Paragraph(
                                `Technologies: ${resume.technologies || ""}`
                            ),

                            new Paragraph(
                                resume.projectDescription || ""
                            ),

                            new Paragraph(
                                `GitHub: ${resume.githubLink || ""}`
                            ),

                            new Paragraph({

                                children: [

                                    new TextRun({

                                        text: "Certification",
                                        bold: true

                                    })

                                ]

                            }),

                            new Paragraph(
                                resume.certification || ""
                            ),

                            new Paragraph({

                                children: [

                                    new TextRun({

                                        text: "Languages",
                                        bold: true

                                    })

                                ]

                            }),

                            new Paragraph(
                                resume.languages || ""
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

        } catch (error) {

            console.log("DOCX Download Error:", error);

        }

    };


    // Loading
    if (!resume) {

        return (

            <div className="preview-loading">

                <h2>Loading Resume...</h2>

            </div>

        );

    }


    return (

        <div className="preview-page">

            {/* Top Controls */}

            <div className="preview-controls">

                <div className="template-selector">

                    <label>

                        <b>Select Template:</b>

                    </label>

                    <select

                        value={template}

                        onChange={(e) =>
                            setTemplate(e.target.value)
                        }

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


                {/* Download Buttons */}

                <div className="download-actions">

                    <button
                        className="download-btn"
                        onClick={downloadPDF}
                    >
                        📄 Download PDF
                    </button>

                    <button
                        className="download-btn"
                        onClick={downloadDOCX}
                    >
                        📝 Download DOCX
                    </button>

                </div>

            </div>


            {/* Resume Wrapper */}

            <div className="resume-scroll-container">

                <div
                    id="resume"
                    className={`preview preview-${template}`}
                >

                    {/* Header */}

                    <div className="resume-header">

                        <h1>
                            {resume.fullName || "No Name"}
                        </h1>

                        <h3>
                            {resume.title || "Untitled Resume"}
                        </h3>

                        <div className="contact-info">

                            {resume.email && (
                                <span>
                                    📧 {resume.email}
                                </span>
                            )}

                            {resume.phone && (
                                <span>
                                    📞 {resume.phone}
                                </span>
                            )}

                            {resume.address && (
                                <span>
                                    📍 {resume.address}
                                </span>
                            )}

                        </div>

                    </div>


                    <hr />


                    {/* Objective */}

                    {resume.objective && (

                        <div className="section">

                            <h2>Career Objective</h2>

                            <p>
                                {resume.objective}
                            </p>

                        </div>

                    )}


                    <hr />


                    {/* Education */}

                    <div className="section">

                        <h2>Education</h2>

                        {resume.college && (
                            <p>
                                <strong>College:</strong>{" "}
                                {resume.college}
                            </p>
                        )}

                        {resume.degree && (
                            <p>
                                <strong>Degree:</strong>{" "}
                                {resume.degree}
                            </p>
                        )}

                        {resume.branch && (
                            <p>
                                <strong>Branch:</strong>{" "}
                                {resume.branch}
                            </p>
                        )}

                        {resume.university && (
                            <p>
                                <strong>University:</strong>{" "}
                                {resume.university}
                            </p>
                        )}

                        {resume.passingYear && (
                            <p>
                                <strong>Passing Year:</strong>{" "}
                                {resume.passingYear}
                            </p>
                        )}

                        {resume.cgpa && (
                            <p>
                                <strong>CGPA:</strong>{" "}
                                {resume.cgpa}
                            </p>
                        )}

                    </div>


                    <hr />


                    {/* Skills */}

                    <div className="section">

                        <h2>Skills</h2>

                        <div className="badge-container">

                            {Array.isArray(resume.skills)

                                ? resume.skills.map(
                                    (skill, index) => (

                                        <span
                                            key={index}
                                            className="badge"
                                        >
                                            {skill}
                                        </span>

                                    )
                                )

                                : (resume.skills || "")
                                    .split(",")
                                    .filter(Boolean)
                                    .map(
                                        (skill, index) => (

                                            <span
                                                key={index}
                                                className="badge"
                                            >
                                                {skill.trim()}
                                            </span>

                                        )
                                    )

                            }

                        </div>

                    </div>


                    <hr />


                    {/* Experience */}

                    <div className="section">

                        <h2>Experience</h2>

                        {resume.company && (
                            <p>
                                <strong>Company:</strong>{" "}
                                {resume.company}
                            </p>
                        )}

                        {resume.jobTitle && (
                            <p>
                                <strong>Job Title:</strong>{" "}
                                {resume.jobTitle}
                            </p>
                        )}

                        {resume.jobLocation && (
                            <p>
                                <strong>Location:</strong>{" "}
                                {resume.jobLocation}
                            </p>
                        )}

                        {(resume.startDate ||
                            resume.endDate) && (

                                <p>

                                    <strong>Duration:</strong>{" "}

                                    {resume.startDate || ""}

                                    {" - "}

                                    {resume.endDate || ""}

                                </p>

                            )}

                        {resume.jobDescription && (

                            <p>
                                {resume.jobDescription}
                            </p>

                        )}

                    </div>


                    <hr />


                    {/* Projects */}

                    <div className="section">

                        <h2>Projects</h2>

                        {resume.projectTitle && (
                            <p>
                                <strong>Project:</strong>{" "}
                                {resume.projectTitle}
                            </p>
                        )}

                        {resume.technologies && (
                            <p>
                                <strong>Technologies:</strong>{" "}
                                {resume.technologies}
                            </p>
                        )}

                        {resume.projectDescription && (
                            <p>
                                {resume.projectDescription}
                            </p>
                        )}

                        {resume.githubLink && (

                            <p>

                                <strong>GitHub:</strong>{" "}

                                {resume.githubLink}

                            </p>

                        )}

                    </div>


                    <hr />


                    {/* Certification */}

                    {resume.certification && (

                        <div className="section">

                            <h2>Certification</h2>

                            <p>
                                {resume.certification}
                            </p>

                        </div>

                    )}


                    <hr />


                    {/* Languages */}

                    {resume.languages && (

                        <div className="section">

                            <h2>Languages</h2>

                            <div className="badge-container">

                                {resume.languages
                                    .split(",")
                                    .filter(Boolean)
                                    .map(
                                        (language, index) => (

                                            <span
                                                key={index}
                                                className="badge"
                                            >
                                                {language.trim()}
                                            </span>

                                        )
                                    )}

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default ResumePreview;