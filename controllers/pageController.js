const Photo = require('../models/Photo');

exports.getEditPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);

  res.render('edit', {
    photo,
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add');
};
