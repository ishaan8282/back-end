const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

let AddressSchema = new Schema ({
    Name:{
     type:String
    },
    Age : {
    type:Number
    },
    city:{
     type:String
    },
    State:{
    type: String
    },
    HousenNo:{
    type : Number
    },
    Country:{
     type: String
    },
}, {
    collection:"address"
})


module.exports = mongoose.model("Address", AddressSchema)
