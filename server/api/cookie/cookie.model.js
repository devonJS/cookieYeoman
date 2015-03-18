/**
 * Created by Devon on 3/16/2015.
 */
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CookieSchema = new Schema({
  name: String,
  numCookies: Number,
  description: String
});

module.exports = mongoose.model('Cookie', CookieSchema);
