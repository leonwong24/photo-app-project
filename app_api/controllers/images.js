
const mongoose = require('mongoose');
const Image = mongoose.model('Image');
const User = mongoose.model('User');
const request = require('request');


// unsplash api
const access_key = "9mQVjOQwjLugOCxbZdsYTTaAjgWP6NtoAf-v90Xi7nY";



const imagesSearch = function (req,res) {
    if(req.params){
        const path = "https://api.unsplash.com/search/photos?client_id="+access_key+"&query="+req.params.query+'&per_page=15';
        const requestOptions = {
            url : path,
            method: 'GET',
            json : {},
            qs : {},
        };
    
        request(requestOptions,(err,response,body) => {
            if (err) { 
                return console.log(err); 
            }else if(response.statusCode === 200){
                res
                    .json(body)
            }
            else{
                console.log(response.statusCode);
            }
        });
    }
    
};


const imagesUserLiked= function(req,res) {
    if(req.params){
        User
            .findById(req.params.userid)
            .exec((err, user) => {
                if(!user){
                    res
                        .status(404)
                        .json({
                            "message": "userid not found"
                        });
                    return;
                } else if( err ) {
                    res
                        .status(400)
                        .json(err);
                    return
                }
                res
                    .status(200)
                    .json(user)
                    //.json(user.userLikesId);
            });
    } else {		
        res		
          .status(404) 	
          .json({	
            "message": "No userid in request"
          });		
    }
};
  

const imagesUserLikeAction = function(req,res) {
    var likeImageId = req.body.imageid;
    User.findOneAndUpdate(
        { _id: req.body.userid },
        { $push: {userLikesId: likeImageId } },
        function(err,user){
            if(err){
                res.status(400)
                res.json({error :err}) ; 
            }
            else{
                res.send(user)
                res.json(user)
            }
        }
    );
 };
const imagesUserDislikeAction = function(req,res){ 
    var dislikeImageId = req.body.imageid;
    User.updateOne(
        { _id: req.body.userid },
        { $pull: {userLikesId: dislikeImageId } },
        function(err,user){
            if(err){
                res.status(400)
                res.json({error :err}) ; 
            }
            else{
                res.send(user)
                res.json(user)
            }
        }
    );
};

module.exports = {
    imagesSearch,
    imagesUserLiked,
    imagesUserLikeAction,
    imagesUserDislikeAction
}