/*jshint node:true*/

var stringUtil = require('ember-cli/lib/utilities/string');
var pkg = require('./package');

module.exports = {
  description: pkg.description,

  locals: function(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = stringUtil.dasherize(rawName);
    var namespace = stringUtil.classify(rawName);

    return {
      name: name,
      modulePrefix: name,
      namespace: namespace
    };
  }
};
