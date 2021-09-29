import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import config from './config/environment';

const DummyEngine = Engine.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  dependencies: {
    services: [
      'store'
    ]
  }
});

loadInitializers(DummyEngine, config.modulePrefix);

export default DummyEngine;
