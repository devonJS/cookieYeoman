/**
 * Created by Devon on 3/16/2015.
 */
'use strict';

var Cookie = require('./api/cookie/cookie.model');


Cookie.find({}).remove(function() {
 Cookie.create([
  {
    name: 'Chocolate Chip',
    numCookies: 12,
    description: "An old favorite, cookie with organic dark chocolate chips"
  },
  {
    name: 'Oatmeal Raisin',
    numCookies: 2,
    description: "A cookie with two crappy things put together, oatmeal and raisins, who came up with this? " +
    "Two wrongs don't make a right."
  },
  {
    name: 'Snickerdoodle',
    numCookies: 10,
    description: "Don't be misled, has nothing to do with snickers.  A cookie with cinnamon, sugar and stuff."
  }]);
});
