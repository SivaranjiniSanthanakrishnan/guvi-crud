const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema, 'student');
module.exports = User;