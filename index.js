/*jshint node:true*/

var kebabCase = require('lodash/kebabCase');
var upperFirst = require('lodash/upperFirst');
var camelCase = require('lodash/camelCase');
var pkg = require('./package');

module.exports = {
  description: pkg.description,

  locals: function(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = kebabCase(rawName);
    var namespace = upperFirst(camelCase(rawName));

    return {
      Name: upperFirst(name),
      name: name,
      modulePrefix: name,
      namespace: namespace
    };
  }
};
