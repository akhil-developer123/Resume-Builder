const Resume = require("../models/Resume");



// Create Resume

const createResume = async (req, res) => {

    try {

        const resume = await Resume.create({

            userId: req.user.id,

            ...req.body

        });


        res.status(201).json({

            success: true,

            message: "Resume Created Successfully",

            resume

        });


    } catch(error) {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};







// Get My All Resumes

const getMyResumes = async(req,res)=>{

    try{


        const resumes = await Resume.find({

            userId:req.user.id

        });



        res.status(200).json({

            success:true,

            resumes

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};








// Get Single Resume By ID


const getResumeById = async(req,res)=>{


    try{


        const resume = await Resume.findOne({

            _id:req.params.id,

            userId:req.user.id

        });



        if(!resume){

            return res.status(404).json({

                success:false,

                message:"Resume Not Found"

            });

        }



        res.status(200).json({

            success:true,

            resume

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });

    }


};








// Update Resume


const updateResume = async(req,res)=>{


    try{


        const resume = await Resume.findOneAndUpdate(

            {

                _id:req.params.id,

                userId:req.user.id

            },

            req.body,

            {

                new:true

            }

        );



        res.status(200).json({

            success:true,

            message:"Resume Updated Successfully",

            resume

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// Delete Resume


const deleteResume = async(req,res)=>{


    try{


        await Resume.findOneAndDelete({

            _id:req.params.id,

            userId:req.user.id

        });



        res.status(200).json({

            success:true,

            message:"Resume Deleted Successfully"

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};










// Rename Resume


const renameResume = async(req,res)=>{


    try{


        const resume = await Resume.findOneAndUpdate(

            {

                _id:req.params.id,

                userId:req.user.id

            },

            {

                title:req.body.title

            },

            {

                new:true

            }

        );



        res.status(200).json({

            success:true,

            message:"Resume Renamed Successfully",

            resume

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};









// Duplicate Resume


const duplicateResume = async(req,res)=>{


    try{


        const resume = await Resume.findOne({

            _id:req.params.id,

            userId:req.user.id

        });



        if(!resume){

            return res.status(404).json({

                success:false,

                message:"Resume Not Found"

            });

        }



        const duplicate = await Resume.create({

            userId:req.user.id,

            title: resume.title + " Copy",

            personalInfo: resume.personalInfo,

            education: resume.education,

            experience: resume.experience,

            skills: resume.skills,

            projects: resume.projects

        });



        res.status(201).json({

            success:true,

            message:"Resume Duplicated Successfully",

            resume:duplicate

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







module.exports = {


    createResume,

    getMyResumes,

    getResumeById,

    updateResume,

    deleteResume,

    renameResume,

    duplicateResume


};