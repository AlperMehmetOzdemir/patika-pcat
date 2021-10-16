const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

// read a photo
// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//update a photo
const id = '616acd6b6809d434b069f1ad';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo title 1 updated',
//     description: 'Photo description 1 updated',
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// delete a photo
Photo.findByIdAndDelete(id, (err,data) => {
  console.log("Photo is removed")
})
