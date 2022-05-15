const request = require('request');
const access_key = "9mQVjOQwjLugOCxbZdsYTTaAjgWP6NtoAf-v90Xi7nY";
const apiOptions = { 
    server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://polar-reef-50886.herokuapp.com'; 
}


const searchImage = function(req,res){
    const path = '/api/search/'+req.params.query;
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
            //console.log(body.results[0].urls.regular);
            //console.log(body.url);
            //console.log(body.explanation);
        }
        else{
            console.log(response.statusCode);
        }
        _renderSearchImage(req,res,body.results);
    })
};

/* GET image title search  page */
const _renderSearchImage = function(req, res,responseBody){ 
    res.render('search-Image', { 
        title: 'Search Image' ,

        //display search image result
        imageList: responseBody,
        imageListStringy: JSON.stringify(responseBody)
        
        
        /*[{
            imageId: "42fy1ZHJPuk",
            width:5931,
	        height:3988,
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
            width:5931,
	        height:3988,
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
            width:5931,
	        height:3988,
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
            width:5931,
	        height:3988,
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
            width:5931,
	        height:3988,
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
            width:5931,
	        height:3988,
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



/* GET select image modal popup page */
const selectImage = function(req, res){ 
    res.render('select-Image', { title: 'Select Image and Pop Up' }); 
};
    

module.exports = {
    selectImage,
    searchImage,
};