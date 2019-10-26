const Users = require('../models/users');

exports.getUsers = (req,res,next) =>{
    Users.fetchAll(users =>{
        res.render('users/users-list',{
            prods:users,
            pageTitle:'All user',
            path:'/users'
        });
    });
};