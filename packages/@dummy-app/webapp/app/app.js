import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  engines: {
    '@dummy-engines/dummyeng': {
      dependencies: {
        services: [
          { store: 'store' }
        ]
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
