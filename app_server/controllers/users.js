const request = require('request');
const access_key = "9mQVjOQwjLugOCxbZdsYTTaAjgWP6NtoAf-v90Xi7nY";
const apiOptions = { 
    server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://polar-reef-50886.herokuapp.com/'; 
}

/* GET user registration page */
const userRegistration = function(req, res){ 
    res.render('user-register', { title: 'User Register' }); 
};

/* GET user registration page */
const userLogin = function(req, res){ 
    res.render('user-login', { title: 'Login' }); 
};

//getUser
const userLikes = function(req, res){
    //const userId = "626c29c1fa16f6216521de14";
    const userId = req.params.query;
    const path = '/api/users/' +userId;

    const requestOptions = {
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}, 
        qs : {}
    };

    request(requestOptions, (err, response, body) => { 
        //console.log(body)
        _getImageList(req, res, body); 
    });
        
};

const _getImageList = function(req,res,responseBody){
    var ImageList = [];
    //console.log(responseBody.userLikesId[0])
    for(let i = 0 ; i < responseBody.userLikesId.length; i ++){
        
        const path = 'https://api.unsplash.com/photos/'+responseBody.userLikesId[i]+'?client_id='+access_key;
        const requestOptions = {
            url : path,
            method: 'GET',
            json : {},
            qs : {},
        };

        request(requestOptions,(err,response,body) => {
            //console.log(body)
            if (err) { 
                return console.log(err); 
            }else if(response.statusCode === 200){
                //console.log(body);
                ImageList.push(body);
                //console.log(ImageList)
                if(i == responseBody.userLikesId.length -1 )
                    _renderUserLikes(req,res,ImageList);
            }
            else{
                console.log(response.statusCode);
            }
        });
    }
    //console.log(ImageList)
    //_renderUserLikes(req,res,ImageList);
};

/*GET user image like page */
const _renderUserLikes = function(req, res,responseBody){ 
    res.render('user', { 
        title: 'User likes',
        imageList: responseBody,
        imageListStringy: JSON.stringify(responseBody)
        
        /*
        [{
            imageId: "42fy1ZHJPuk",
            description: "A image",
            urls: {
                regular: "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=400"
            },
            exif:{
                make:'SONY',
                model:'ILCE-7M3',
                name:'SONY, ILCE-7M3',
                exposure_time:'1/800',
                aperture:'1.4',
                focal_length: '85.0',
                iso:100
            }
        },{
            imageId: "42fy1ZHJPuk",
            description: "B image",
            urls: {
                regular: "https://images.unsplash.com/photo-1650964794396-9b9efaccd585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1650964794396-9b9efaccd585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080"
            },
            exif:{
                make:'SONY',
                model:'ILCE-7M3',
                name:'SONY, ILCE-7M3',
                exposure_time:'1/800',
                aperture:'1.4',
                focal_length: '85.0',
                iso:100
            }
        },{
            imageId: "42fy1ZHJPuk",
            description: "C image",
            urls: {
                regular: "https://images.unsplash.com/photo-1651158600074-27309fd0d793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1651158600074-27309fd0d793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080"
            },
            exif:{
                make:'SONY',
                model:'ILCE-7M3',
                name:'SONY, ILCE-7M3',
                exposure_time:'1/800',
                aperture:'1.4',
                focal_length: '85.0',
                iso:100
            }
        },{
            imageId: "42fy1ZHJPuk",
            description: null,
            urls: {
                regular: "https://images.unsplash.com/photo-1651126178241-a2a2d26fa21e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1651126178241-a2a2d26fa21e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080"
            },
            exif:{
                make:'SONY',
                model:'ILCE-7M3',
                name:'SONY, ILCE-7M3',
                exposure_time:'1/800',
                aperture:'1.4',
                focal_length: '85.0',
                iso:100
            }
        },{
            imageId: "42fy1ZHJPuk",
            description: "D image",
            urls: {
                regular: "https://images.unsplash.com/photo-1651093192398-2c499aa4395b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1651093192398-2c499aa4395b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=80&w=1080"
            },
            exif:{
                make:'SONY',
                model:'ILCE-7M3',
                name:'SONY, ILCE-7M3',
                exposure_time:'1/800',
                aperture:'1.4',
                focal_length: '85.0',
                iso:100
            }
        },{
            imageId: "42fy1ZHJPuk",
            description: "E image",
            urls: {
                regular: "https://images.unsplash.com/photo-1644982648774-83312909bbef?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDk3NDJ8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=85",
                full: "https://images.unsplash.com/photo-1644982648774-83312909bbef?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDk3NDJ8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1MTIzMzM0Mw&ixlib=rb-1.2.1&q=85"
            },
            exif:{
                make:'SONY',
                model:'ILCE-7M3',
                name:'SONY, ILCE-7M3',
                exposure_time:'1/800',
                aperture:'1.4',
                focal_length: '85.0',
                iso:100
            }
        }]*/
     }); 
};
    


    
module.exports = {
    userRegistration,
    userLogin,
    userLikes
};
    