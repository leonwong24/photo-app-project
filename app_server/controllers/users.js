/* GET user registration page */
const userRegistration = function(req, res){ 
    res.render('user-register', { title: 'User Register' }); 
};

/* GET user registration page */
const userLogin = function(req, res){ 
    res.render('user-login', { title: 'Login' }); 
};

/*GET user image like page */
const userLikes = function(req, res){ 
    res.render('user', { 
        title: 'User likes',
        imageList:[{
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
        }]
     }); 
};
    


    
module.exports = {
    userRegistration,
    userLogin,
    userLikes
};
    