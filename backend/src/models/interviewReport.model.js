const mongoose = require('mongoose')

/**
 * JD
 * resume
 * selfdesc
 * matchscore
 * technical question - question , expectation , answer
 * behavioral question
 * skillgaps - skill, severity
 * prepplan - day, focus, tasks
 * 
 */

const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required."]
    },
    expectation:{
        type:String,
        required:[true, "Expectation is required."]
    },
    answer:{
        type: String,
        required:[true, "Answer is required."]
    }
},{
    _id:false
})

const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Behavioral question is required."]
    },
    expectation: {
        type: String,
        required: [true, "Expectation is required."]
    },
    answer: {
        type: String,
        required: [true, "Answer is required."]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type:String,
        required: [true, "Skill is required."]
    },
    severity:{
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required."]
    },
},{
    _id: false
})

const prepPlanSchema = new mongoose.Schema({
    day:{
        type:Number,
        required: [true, "Day is required."]
    },
    focus:{
        type: String,
        required:[true, "Focus is required"]
    },
    tasks:{
        type: [String],
        required:[true, "tasks are required."]
    }
})

const interviewReportSchema = new mongoose.Schema({
    JD:{
        type: String,
        required: [true, "Job Description is required."]
    },
    resume:{
        type: String
    },
    selfdescription:{
        type: String
    },
    matchScore:{
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestions:[technicalQuestionSchema],
    behavioralQuestions:[behavioralQuestionSchema],
    skillGaps:[skillGapSchema],
    prepPlan:[prepPlanSchema],
},{
    timestamps:true
})

const interviewReportModel = mongoose.model('InterviewReport', interviewReportSchema)

module.exports = interviewReportModel