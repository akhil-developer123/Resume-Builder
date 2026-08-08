// React Hooks
import { useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// API
import api from "../services/api";

// CSS
import "../styles/ImproveResume.css";

function ImproveResume() {

    // Navigation Hook
    const navigate = useNavigate();

    // Selected File
    const [file, setFile] = useState(null);

    // Loading State
    const [loading, setLoading] = useState(false);


    // File Select
    const handleFileChange = (e) => {

        const selectedFile = e.target.files[0];

        setFile(selectedFile || null);

    };


    // Upload Resume
    const handleUpload = async () => {

        if (!file) {

            alert("Please Select Resume");

            return;

        }


        const formData = new FormData();

        formData.append("resume", file);


        try {

            setLoading(true);


            const response = await api.post(

                "/upload",

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

            );


            console.log("UPLOAD RESPONSE:", response.data);


            alert(
                response.data.message || "Resume Uploaded Successfully"
            );


            navigate("/ai-result", {

                state: {

                    result: response.data.result

                }

            });

        }


        catch (error) {

            console.log(
                "UPLOAD ERROR:",
                error.response?.data || error
            );


            alert(

                error.response?.data?.message ||

                "Upload Failed"

            );

        }


        finally {

            setLoading(false);

        }

    };


    return (

        <div className="improve-container">


            <h1>
                Improve Existing Resume
            </h1>


            <p>
                Upload your existing Resume (PDF or DOCX)
                and improve it using AI.
            </p>


            {/* File Input */}

            <input

                type="file"

                accept=".pdf,.doc,.docx"

                onChange={handleFileChange}

            />


            {/* Selected File */}

            {file && (

                <p className="selected-file">

                    Selected: {file.name}

                </p>

            )}


            {/* Upload Button */}

            <button

                type="button"

                className="upload-btn"

                onClick={handleUpload}

                disabled={loading}

            >

                {loading
                    ? "Uploading..."
                    : "Upload Resume"
                }

            </button>


            {/* Back Dashboard */}

            <button

                type="button"

                className="back-dashboard-btn"

                onClick={() => navigate("/dashboard")}

                disabled={loading}

            >

                Back Dashboard

            </button>


        </div>

    );

}


export default ImproveResume;