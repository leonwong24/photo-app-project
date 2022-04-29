/* GET home page */
const index = function(req, res){ 
    res.render('index', { 
        title: 'Express',
        /* GET random image from API and display on homepage */
        imageList:[{
            imageId: "42fy1ZHJPuk",
            description: "A image",
            width:5931,
	        height:3988,
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
            width:5931,
	        height:3988,
            urls: {
                regular: "/images/image/keith-tanner-o3f7ns-TU3Q-unsplash.jpg",
                full: "/images/image/keith-tanner-o3f7ns-TU3Q-unsplash.jpg"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "/images/image/gaspar-zaldo-gUUCt0CTWmQ-unsplash.jpg",
                full: "/images/image/gaspar-zaldo-gUUCt0CTWmQ-unsplash.jpg"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "/images/image/ehimetalor-akhere-unuabona-TCEbRDXqv5M-unsplash.jpg",
                full: "/images/image/aydin-hassan-ZAZWq2HN9dk-unsplash.jpg"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "/images/image/peter-herrmann-Pih3VZdHSwI-unsplash.jpg",
                full: "/images/image/peter-herrmann-Pih3VZdHSwI-unsplash.jpg"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "/images/image/kristaps-ungurs-CAXt2XD2XbI-unsplash.jpg",
                full: "/images/image/kristaps-ungurs-CAXt2XD2XbI-unsplash.jpg"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "https://images.unsplash.com/photo-1494905998402-395d579af36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHw3fHxjYXJ8ZW58MHx8fHwxNjUxMjMzNzQ0&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1494905998402-395d579af36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHw3fHxjYXJ8ZW58MHx8fHwxNjUxMjMzNzQ0&ixlib=rb-1.2.1&q=80&w=1080"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                full: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
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
            description: "yellow sports car",
            width:5931,
	        height:3988,
            urls: {
                regular: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHw4fHxjYXJ8ZW58MHx8fHwxNjUxMjMzNzQ0&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHw4fHxjYXJ8ZW58MHx8fHwxNjUxMjMzNzQ0&ixlib=rb-1.2.1&q=80&w=1080"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "https://images.unsplash.com/photo-1493238792000-8113da705763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHw5fHxjYXJ8ZW58MHx8fHwxNjUxMjMzNzQ0&ixlib=rb-1.2.1&q=80&w=1080",
                full: "https://images.unsplash.com/photo-1493238792000-8113da705763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHw5fHxjYXJ8ZW58MHx8fHwxNjUxMjMzNzQ0&ixlib=rb-1.2.1&q=80&w=1080"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                full: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
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
            width:5931,
	        height:3988,
            urls: {
                regular: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHwxMHx8Y2FyfGVufDB8fHx8MTY1MTIzMzc0NA&ixlib=rb-1.2.1&q=85",
                full: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMDk3NDJ8MHwxfHNlYXJjaHwxMHx8Y2FyfGVufDB8fHx8MTY1MTIzMzc0NA&ixlib=rb-1.2.1&q=85"
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
        }
    ]
    }); 
};

    
module.exports = {
    index,
};
    