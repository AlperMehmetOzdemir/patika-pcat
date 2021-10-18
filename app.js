const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const Photo = require('./models/Photo');
const photoController = require('./controllers/photoController');
const pageController = require('./controllers/pageController');

const app = express();

const PORT = process.env.PORT || 5000;

// connect DB
mongoose.connect(
  'mongodb+srv://mehmet:d2AbJauI9zWtwmZe@cluster0.w3aul.mongodb.net/pcat-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }
);

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/photos/edit/:id', pageController.getEditPhoto);
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
