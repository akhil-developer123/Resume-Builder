const Resume = require("../models/Resume");


// Create Resume Controller
const createResume = async (req, res) => {

    try {

        // Frontend se poora form data lena
        const resumeData = req.body;

        // Logged-in user ki ID add karna
        resumeData.user = req.user._id;

        // Database me resume save karna
        const resume = await Resume.create(resumeData);

        // Success response
        res.status(201).json({

            success: true,
            message: "Resume Created Successfully",
            resume

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};



// Get All User Resumes
const getMyResumes = async (req,res)=>{

    try{

        const resumes = await Resume.find({
            user:req.user._id
        });


        res.status(200).json({

            success:true,
            count:resumes.length,
            resumes

        });


    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};




// Get Single Resume
const getResumeById = async(req,res)=>{

    try{


        const resume = await Resume.findById(req.params.id);


        if(!resume){

            return res.status(404).json({

                message:"Resume Not Found"

            });

        }



        if(resume.user.toString() !== req.user._id.toString()){

            return res.status(401).json({

                message:"Not Authorized"

            });

        }



        res.status(200).json({

            success:true,
            resume

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};





// Update Resume
const updateResume = async(req,res)=>{


    try{


        const resume = await Resume.findById(req.params.id);



        if(!resume){

            return res.status(404).json({

                message:"Resume Not Found"

            });

        }



        if(resume.user.toString() !== req.user._id.toString()){

            return res.status(401).json({

                message:"Not Authorized"

            });

        }



        const updatedResume = await Resume.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true,
                runValidators:true
            }

        );



        res.status(200).json({

            message:"Resume Updated Successfully",

            resume:updatedResume

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};





// Delete Resume
const deleteResume = async(req,res)=>{


    try{


        const resume = await Resume.findById(req.params.id);



        if(!resume){

            return res.status(404).json({

                message:"Resume Not Found"

            });

        }



        if(resume.user.toString() !== req.user._id.toString()){


            return res.status(401).json({

                message:"Not Authorized"

            });

        }



        await Resume.findByIdAndDelete(req.params.id);



        res.status(200).json({

            message:"Resume Deleted Successfully"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};





// Rename Resume
const renameResume = async(req,res)=>{


    try{


        const {title}=req.body;


        const resume = await Resume.findById(req.params.id);



        if(!resume){

            return res.status(404).json({

                message:"Resume Not Found"

            });

        }



        if(resume.user.toString() !== req.user._id.toString()){


            return res.status(401).json({

                message:"Not Authorized"

            });

        }



        resume.title = title;


        await resume.save();



        res.status(200).json({

            message:"Resume Renamed Successfully",

            resume

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};





// Duplicate Resume
const duplicateResume = async(req,res)=>{


    try{


        const resume = await Resume.findById(req.params.id);



        if(!resume){

            return res.status(404).json({

                message:"Resume Not Found"

            });

        }



        if(resume.user.toString() !== req.user._id.toString()){


            return res.status(401).json({

                message:"Not Authorized"

            });

        }



        const copyResume = await Resume.create({

            ...resume.toObject(),

            _id:undefined,

            title:`${resume.title || resume.fullName} Copy`,

            user:req.user._id

        });



        res.status(201).json({

            message:"Resume Duplicated Successfully",

            resume:copyResume

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};




// Export All Functions
module.exports = {

    createResume,

    getMyResumes,

    getResumeById,

    updateResume,

    deleteResume,

    renameResume,

    duplicateResume

};