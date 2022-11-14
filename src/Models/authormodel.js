
const { default: mongoose } = require("mongoose");



const authormodel = new mongoose.Schema({
    fname : {type: String,
            required : true},

    lname : {type: String,
            required:true},

    title: {type: String,
        required:true},

    enum:["Mr", "Mrs", "Miss"], 

    email: {type: String,
         required:true, 
          unique:true}, 


    password: {type : String , 
        required:true,
        unique:true}

},{timestamps: true})




module.exports = mongoose.model("author" , authormodel)