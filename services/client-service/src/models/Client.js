const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

    nom:{
      type:String,
      required:true,
      trim:true
    },

    prenom:{
       type:String,
       required:true,
       trim:true 
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },

    telephone:{
        type:Number,
        required:true,
        trim:true
    },

    adresse:{
        type:String,
        required:true,
        trim:true
    },

    dateCreation:{
        type:Date,
        default: Date.now
    }
},

{timestamp:true

});

//Indexes pour optimiser les recherches
clientSchema.index({email: 1 });
clientSchema.index({nom:1, prenom:1});

const Client = mongoose.model('Client',clientSchema);

module.exports = Client;