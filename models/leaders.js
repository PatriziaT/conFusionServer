const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    

var leadersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        unique: true
    },
    abbr: {
        type: String,
        
    },
    description: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default:false      
    },
   
});


var Leaders = mongoose.model('Leader', leadersSchema);

module.exports = Leaders;