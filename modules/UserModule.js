const User = require('../models/User');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
mongoose.set('useFindAndModify', false);

exports.saveData = async (req,res,next) => {
    const user = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })
    console.log(user)
    var response = await user.save();
    res.send(response);
}

const findData = async(req,res,next)=>{
    var response = await User.find();
    res.json(response);
}

exports.updateData = async (req,res,next)=> {
    const id = req.params.ids;
    var response = await User.findByIdAndUpdate(id, {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })
    res.json(response);
}

const deleteData = async(req,res,next)=> {
    const id = req.params.id;
    var response = await User.findByIdAndDelete(id);
    res.send(response);
}

exports.findData = findData;
exports.deleteData = deleteData;

