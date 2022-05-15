const request = require('request');
const access_key = "9mQVjOQwjLugOCxbZdsYTTaAjgWP6NtoAf-v90Xi7nY";
const apiOptions = { 
    server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://polar-reef-50886.herokuapp.com/'; 
}

const index = function(req,res){
    const path = "/api/";
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json : {},
        qs : {},
    };

    request(requestOptions,(err,response,body) => {
        if (err) { 
            return console.log(err); 
        }else if(response.statusCode === 200){
            //console.log(body);
            //console.log(body.url);
            //console.log(body.explanation);
        }
        else{
            console.log(response.statusCode);
        }
        _renderIndex(req,res,body);
    })
};


/* GET home page */
const _renderIndex = function(req, res,responseBody){ 
    res.render('index', { 
        title: 'Express',
        /* GET random image from API and display on homepage */
        imageList: responseBody,
        imageListStringy: JSON.stringify(responseBody)
    }); 
};

    
module.exports = {
    index,
};
    