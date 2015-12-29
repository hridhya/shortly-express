var db = require('../config');
// var bcrypt = require('bcrypt-nodejs');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
// var crypto = require('crypto');


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

module.exports = User;