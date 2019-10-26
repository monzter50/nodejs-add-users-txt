const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');
const errorController = require('./controllers/error');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminRoutes);
app.use(usersRoutes);
app.use(errorController.get404);
app.listen(3000);