'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Cookie2Schema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Cookie2', Cookie2Schema);