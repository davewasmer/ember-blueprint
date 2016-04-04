/*jshint node:true*/

var kebabCase = require('lodash/kebabCase');
var pkg = require('./package');

module.exports = {
  description: pkg.description,

  locals: function(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = kebabCase(rawName);
    var namespace = capitalize(camelCase(rawName));

    return {
			Name: capitalize(name)
      name: name,
      modulePrefix: name,
      namespace: namespace
    };
  }
};
