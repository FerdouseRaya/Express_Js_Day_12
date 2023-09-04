const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Student Name was not provided"],
        maxLength: 30,
    },
    username:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    }
});

const students = mongoose.model('students',studentSchema);
module.exports =students;