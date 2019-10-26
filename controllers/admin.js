const Users = require('../models/users');

exports.getAddUser = (req, res, next) => {
    res.render('admin/users', {
      pageTitle: 'Add User',
      path: '/admin/add-user',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
exports.postAddUser = (req, res, next) => {
    // const title = req.body.title;
    // const imageUrl = req.body.imageUrl;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const user = new Users( name, lastname);
    user.save();
    res.redirect('/');
  };
exports.getUsers = (req, res, next) => {
    Users.fetchAll(users => {
      res.render('admin/users', {
        prods: users,
        pageTitle: 'Admin Users',
        path: '/admin/users'
      });
    });
  };