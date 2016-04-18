/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    sassCompiler: {
      file: '/src/client/styles/app.scss',
      outputStyle: 'compressed',
      sourceMap: true
    },
    vendorNpmFiles: [
      'angularfire2/**/*.js',
      'firebase/lib/*.js'
    ]
  });
  return app.toTree();
};
