import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.mount('@dummy-engines/dummyeng', { as: 'dummyeng' });
});

export default Router;
