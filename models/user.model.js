const mongoose = require('mongoose');
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');



const userSchema = new Schema({
    applicationNo:{
        type:Number
    },
    nameOfTheStudent: {
        type: String,
        trim: true,
        maxlength: 50,
        required:true
    },
    dateOfBirth: {
        type: Date,
        required:true
    },
    gender: {
        type: String,
    },
    classAd:  {
        type: String,
        required:true
    },
    fatherName: {
        type: String,
        trim: true,
        maxlength: 50,
        required:true
    },
    motherName: {
        type: String,
        trim: true,
        maxlength: 50,
        required:true
    },
    occupation: {
        type: String,
        trim: true,
        maxlength: 50
    },
    permanentAddress: {
        type: String,
        trim: true,
        maxlength: 50
    },
    phone:{
        type: Number,
        minlength:10,
        maxlength:10,
        required:true,
        
    },
    whatsAppNumber: {
        type: Number,
        minlength:10,
        maxlength:10,
        required:true
    },
    email: {
        type: String,
        trim: true,
        maxlength:50,
        required:true,
        validate: function(email) {
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        }
    },
    category:  {
        type: String
    },
    transport:  {
        type: String
    },
  },{
      timestamps:true,
  });


  userSchema.plugin(autoIncrement.plugin,{model: 'User',field:'applicationNo',startAt: 1});
  const User = mongoose.model('User', userSchema);

 
  module.exports=User;
  