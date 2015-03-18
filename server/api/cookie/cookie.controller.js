'use strict';

var _ = require('lodash');
var Cookie = require('./cookie.model');

// Get list of cookies
exports.index = function(req, res) {
  Cookie.find(function (err, cookies) {
    if(err) { return handleError(res, err); }
    return res.json(200, cookies);
  });
};

// Get a single cookie
//exports.show = function(req, res) {
//  Cookie.findById(req.params.id, function (err, cookie) {
//    if(err) { return handleError(res, err); }
//    if(!cookie) { return res.send(404); }
//    return res.json(cookie);
//  });
//};

// Get one or more cookies through a search by name
exports.show = function(req,res){
  Cookie.find({name: new RegExp(req.params.name, "i")}, function(err,cookies){
    if(err) {console.log(err);}
    return res.json(cookies)
  })
};

// Creates a new cookie in the DB.
exports.create = function(req, res) {
  Cookie.create(req.body, function(err, cookie) {
    if(err) { return handleError(res, err); }
    return res.json(201, cookie);
  });
};

// Updates an existing cookie in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cookie.findById(req.params.id, function (err, cookie) {
    if (err) { return handleError(res, err); }
    if(!cookie) { return res.send(404); }
    var updated = _.merge(cookie, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cookie);
    });
  });
};

// Deletes a cookie from the DB.
exports.destroy = function(req, res) {
  Cookie.findById(req.params.id, function (err, cookie) {
    if(err) { return handleError(res, err); }
    if(!cookie) { return res.send(404); }
    cookie.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
