
const mongoose = require('mongoose');
const request = require('request');
const Image = mongoose.model('Image');
const User = mongoose.model('User');

const usersRegister = function (req,res) {
    User.create({
        username: req.body.username,
        password: req.body.password,
        userLikesId: req.body.userLikesId.split(",")
    }, (err,user) => {
        if(err){
            res
            .status(400)
            .json(err);
        }
        else{
            res
            .status(201)
            .json(user)
        }
    });
};
    
const usersLogin = function(req,res) {
    res
    .status(200)
    .json({"status" : "success"});
 };


const usersUpdate = function(req,res) { 
    if(req.params){
        User.findByIdAndUpdate( 
            req.params.userid ,
            { password: req.body.password },
            {new: true}, 
            function(err,user){
                if(err){
                    res.json({error :err}) ; 
                }
                else{
                    res.send(user)
                }
            });
    } else {		
        res		
          .status(404) 	
          .json({	
            "message": "No userid in request"
          });		
    }
};

module.exports = {
    usersRegister,
    usersLogin,
    usersUpdate
}