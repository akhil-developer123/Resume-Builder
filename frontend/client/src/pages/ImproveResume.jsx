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

        setFile(e.target.files[0]);

    };

    // Upload Resume
    const handleUpload = async () => {

        // File Select nahi ki
        if (!file) {

            alert("Please Select Resume");

            return;

        }

        // Form Data
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

            // Upload Success
            alert(response.data.message);

            // AI Improve API Call
            // AI Result Page
            navigate("/ai-result", {

                state: {

                    result: response.data.result

                }

            });

        }

        catch (error) {

            console.log(error.response?.data);

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

            <br />
            <br />

            {/* Upload Button */}
            <button

                onClick={handleUpload}

                disabled={loading}

            >

                {

                    loading

                        ?

                        "Uploading..."

                        :

                        "Upload Resume"

                }

            </button>

            <br />
            <br />

            {/* Back Button */}
            <button

                onClick={() => navigate("/dashboard")}

            >

                Back Dashboard

            </button>

        </div>

    );

}

export default ImproveResume;