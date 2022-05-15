const mongoose = require('mongoose');
const Image = mongoose.model('Image');
const User = mongoose.model('User');
const request = require('request');
// unsplash api
const access_key = "9mQVjOQwjLugOCxbZdsYTTaAjgWP6NtoAf-v90Xi7nY";


const listImages = function (req,res) { 
    const path = "https://api.unsplash.com/photos/?client_id="+access_key+"&per_page=15";
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


//Image
    //.findById(req.params.imageId)
    //.exec( (err, image) => {
        //res
        //.status(200)
        //.json({image});
    //})
};

module.exports = {
    listImages
}