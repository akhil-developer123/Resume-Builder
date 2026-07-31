const mongoose = require("mongoose");


const resumeSchema = new mongoose.Schema(
{

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required:true

    },

     // Resume Title
    title: {

        type:String,

        default:"My Resume"

    },


    personalInfo: {

        fullName:String,

        email:String,

        phone:String,

        address:String,

        linkedin:String,

        github:String

    },


    education:[

        {

            degree:String,

            institution:String,

            year:String

        }

    ],



    experience:[

        {

            company:String,

            role:String,

            duration:String,

            description:String

        }

    ],



    skills:[String],



    projects:[

        {

            title:String,

            description:String,

            technologies:String

        }

    ],



    createdAt:{

        type:Date,

        default:Date.now

    }


}

);


module.exports = mongoose.model(
    "Resume",
    resumeSchema
);