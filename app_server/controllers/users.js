/* GET user registration page */
const userRegistration = function(req, res){ 
    res.render('user-register', { title: 'User Register' }); 
};

/* GET user registration page */
const userLogin = function(req, res){ 
    res.render('user-login', { title: 'Login' }); 
};
    
    
module.exports = {
    userRegistration,
    userLogin
};
    