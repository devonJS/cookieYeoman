'use strict';

var _ = require('lodash');
var Cookie2 = require('./cookie2.model');

// Get list of cookie2s
exports.index = function(req, res) {
  Cookie2.find(function (err, cookie2s) {
    if(err) { return handleError(res, err); }
    return res.json(200, cookie2s);
  });
};

// Get a single cookie2
exports.show = function(req, res) {
  Cookie2.findById(req.params.id, function (err, cookie2) {
    if(err) { return handleError(res, err); }
    if(!cookie2) { return res.send(404); }
    return res.json(cookie2);
  });
};

// Creates a new cookie2 in the DB.
exports.create = function(req, res) {
  Cookie2.create(req.body, function(err, cookie2) {
    if(err) { return handleError(res, err); }
    return res.json(201, cookie2);
  });
};

// Updates an existing cookie2 in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cookie2.findById(req.params.id, function (err, cookie2) {
    if (err) { return handleError(res, err); }
    if(!cookie2) { return res.send(404); }
    var updated = _.merge(cookie2, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cookie2);
    });
  });
};

// Deletes a cookie2 from the DB.
exports.destroy = function(req, res) {
  Cookie2.findById(req.params.id, function (err, cookie2) {
    if(err) { return handleError(res, err); }
    if(!cookie2) { return res.send(404); }
    cookie2.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}