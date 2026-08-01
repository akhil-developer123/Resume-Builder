// React Hooks
import { useEffect, useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// API
import api from "../services/api";

// CSS
import "../styles/MyResumes.css";


function MyResumes() {


    const navigate = useNavigate();


    // All Resumes
    const [resumes, setResumes] = useState([]);


    // Search
    const [search, setSearch] = useState("");


    // Loading
    const [loading, setLoading] = useState(true);



    // Fetch Resume
    const fetchResumes = async()=>{


        try{


            const response = await api.get("/resume");


            setResumes(response.data.resumes);



        }catch(error){


            console.log(error.response?.data);


        }finally{


            setLoading(false);


        }


    };





    // Delete Resume
    const handleDelete = async(id)=>{


        const confirmDelete = window.confirm(
            "Delete this Resume?"
        );


        if(!confirmDelete) return;



        try{


            await api.delete(`/resume/${id}`);


            alert("Resume Deleted");


            fetchResumes();



        }catch(error){


            console.log(error);


        }


    };





    // Rename Resume
    const handleRename = async(id)=>{


        const newTitle = prompt(
            "Enter New Resume Name"
        );


        if(!newTitle) return;



        try{


            await api.put(
                `/resume/rename/${id}`,
                {
                    title:newTitle
                }
            );


            alert("Resume Renamed");


            fetchResumes();



        }catch(error){


            console.log(error);


        }


    };






    // Duplicate Resume
    const handleDuplicate = async(id)=>{


        try{


            await api.post(
                `/resume/duplicate/${id}`
            );


            alert(
                "Resume Duplicated Successfully"
            );


            fetchResumes();



        }catch(error){


            console.log(error);


        }


    };





    // Search Filter

const filteredResumes = resumes.filter((resume) =>

    (resume.fullName || "")
        .toLowerCase()
        .includes(search.toLowerCase())

);






    useEffect(()=>{


        fetchResumes();


    },[]);






    return(


        <div className="my-resumes-container">


            <h1>
                📁 My Resumes
            </h1>



            <input

                type="text"

                placeholder="🔍 Search Resume"

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="search-input"

            />




            {
                loading ?

                (

                    <h2>
                        Loading...
                    </h2>

                )

                :

                filteredResumes.length===0 ?

                (

                    <h2>
                        No Resume Found
                    </h2>

                )

                :

                (

                    filteredResumes.map((resume)=>(


                        <div
                            key={resume._id}
                            className="resume-card"
                        >


                            <h2>
                                {resume.title || resume.fullName}
                            </h2>


                            <p>
                                {resume.email}
                            </p>



                            <button
                                onClick={()=>handleRename(resume._id)}
                            >
                                Rename
                            </button>




                            <button
                                onClick={()=>handleDuplicate(resume._id)}
                            >
                                Duplicate
                            </button>





                            <button

                                onClick={()=>navigate(
                                    `/edit-resume/${resume._id}`
                                )}

                            >

                                Edit

                            </button>





                            <button

                                onClick={()=>navigate(
                                    `/resume/${resume._id}`
                                )}

                            >

                                Preview

                            </button>





                            <button

                                onClick={()=>handleDelete(resume._id)}

                            >

                                Delete

                            </button>



                        </div>



                    ))

                )

            }




            <button

                className="back-btn"

                onClick={()=>navigate("/dashboard")}

            >

                Back Dashboard

            </button>



        </div>


    );


}


export default MyResumes;