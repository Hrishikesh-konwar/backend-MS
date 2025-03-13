const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  type: String,
  isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;