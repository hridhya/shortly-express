var db = require('../config');
// var bcrypt = require('bcrypt-nodejs');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
// var crypto = require('crypto');


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var salt = model.get('created_at');
      salt = '' + salt;
      var password = model.get('password');

      //console.log('salt: ', salt);

      bcrypt.hash('password', 'hello', function(err, result) {
        console.log('create result: ', result);
        model.set('password', result);
      });

      // var shasum = crypto.createHash('sha1');
      // var password = model.get('password') + model.get('created_at');
      // shasum.update(password);
      // model.set('password', shasum.digest('hex').slice(0, 5));
    });
  }
});

module.exports = User;