const mongoose=require('mongoose');
const alienSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    YearOfStudy:{
        type:String ,
        required: true
    },
    QuestionPaperSetter:{
        type:Boolean,
        required: true,
        default:false
    },
    QuestionLevel:{
        type:String,
        required: true
    }
})
module.exports=mongoose.model('Alien',alienSchema)