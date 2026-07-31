// React Router
import { useLocation, useNavigate } from "react-router-dom";

// CSS
import "../styles/AIResult.css";


function AIResult() {


    const navigate = useNavigate();


    const { state } = useLocation();


    const result = state?.result;



    // Result nahi mila
    if (!result) {


        return (

            <div className="ai-result">


                <h2>
                    No AI Result Found
                </h2>


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


            <h1>
                🤖 AI Resume Analysis
            </h1>




            {/* ATS Score */}

            <div className="result-card score-card">

                <h2>
                    Resume Score
                </h2>


                <h1>
                    ⭐ {result.atsScore}/100
                </h1>


            </div>





            {/* Improved Summary */}

            <div className="result-card">


                <h2>
                    ✨ Improved Summary
                </h2>


                <p>
                    {result.improvedSummary}
                </p>


            </div>






            {/* Strengths */}

            <div className="result-card">


                <h2>
                    ✅ Strengths
                </h2>


                <ul>

                    {
                        result.strengths?.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))
                    }


                </ul>


            </div>






            {/* Weakness */}

            <div className="result-card">


                <h2>
                    ⚠️ Weaknesses
                </h2>


                <ul>


                    {
                        result.weaknesses?.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))
                    }


                </ul>


            </div>







            {/* Skills */}

            <div className="result-card">


                <h2>
                    🛠 Suggested Skills
                </h2>


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







            {/* Suggestions */}

            <div className="result-card">


                <h2>
                    💡 Suggestions
                </h2>


                <ul>


                    {
                        result.suggestions?.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))
                    }


                </ul>


            </div>






            {/* Missing Keywords */}

            <div className="result-card">


                <h2>
                    🔑 Missing Keywords
                </h2>


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
                onClick={() => navigate("/improve-resume")}
            >

                🔄 Improve Again

            </button>

            <button
                onClick={() => navigate("/create-resume")}
            >

                ✨ Apply AI Suggestions

            </button>




            <button
                onClick={() => navigate("/dashboard")}
            >

                🏠 Back Dashboard

            </button>




        </div>


    );

}


export default AIResult;