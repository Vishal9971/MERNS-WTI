const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true,
    trim:true
  },
  lastname:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true
  },
  number:{
    type:Number,
    required:true,
    trim:true
  },
  project:{
    type:String,
    required:true,
    trim:true
  },
});

const Client = mongoose.model('Client',clientSchema);

module.exports=Client;