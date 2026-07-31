// React Hook
import { useLocation, useNavigate } from "react-router-dom";

// CSS
import "../styles/AIResult.css";

function AIResult() {

    // Navigation
    const navigate = useNavigate();

    // AI Data
    const { state } = useLocation();

    const result = state?.result;

    // Agar Result nahi mila
    if (!result) {

        return (

            <div className="ai-result">

                <h2>No AI Result Found</h2>

                <button
                    onClick={() => navigate("/improve-resume")}
                >
                    Back
                </button>

            </div>

        );

    }

    return (

        <div className="ai-result">

            <h1>🤖 AI Resume Analysis</h1>

            {/* Improved Summary */}
            <div className="result-card">

                <h2>Improved Summary</h2>

                <p>{result.improvedSummary}</p>

            </div>

            {/* Suggested Skills */}
            <div className="result-card">

                <h2>Suggested Skills</h2>

                <ul>

                    {
                        result.skills?.map((skill, index) => (

                            <li key={index}>
                                {skill}
                            </li>

                        ))
                    }

                </ul>

            </div>

            {/* ATS Score */}
            <div className="result-card">

                <h2>ATS Score</h2>

                <h1>{result.atsScore}/100</h1>

            </div>

            {/* Missing Keywords */}
            <div className="result-card">

                <h2>Missing Keywords</h2>

                <ul>

                    {
                        result.missingKeywords?.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))
                    }

                </ul>

            </div>

            <button
                onClick={() => navigate("/dashboard")}
            >
                Back Dashboard
            </button>

        </div>

    );

}

export default AIResult;