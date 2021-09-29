'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require('node-sass');
var env = EmberApp.env();

module.exports = function (defaults) {
  var testEnvironment = env === 'production';

  let app = new EmberApp(defaults, {
    hinting: testEnvironment,

    // Add options here
    outputPaths: {
        app: {
            html: 'index.html',
            css: {
                app: '/assets/css/webapp.css'
            },
            js: '/assets/js/webapp.js'
        },
        tests: {
            js: '/assets/js/tests.js'
        },
        testSupport: {
            css: '/assets/css/test-support.css',
            js: {
                testSupport: '/assets/js/test-support.js',
                testLoader: '/assets/js/test-loader.js'
            }
        },
        vendor: {
            css: '/assets/css/vendor.css',
            js: '/assets/js/vendor.js'
        }
    },
    sassOptions: {
      includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets'
      ],
      implementation: nodeSass,
      extension: 'scss'
    },

    minifyJS: {
        enabled: false
    },
    minifyCSS: {
        enabled: false
    },

    babel: {
      plugins: ['@babel/plugin-proposal-object-rest-spread']
    },

    'ember-cli-babel': {
      optional: ['es6.spec.symbols'],
      includePolyfill: true
    },

  });
  app.import('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');
  app.import('node_modules/moment/min/moment.min.js');
  app.import('node_modules/lodash/lodash.js');

  return app.toTree();
};
