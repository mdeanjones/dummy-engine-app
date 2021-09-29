import EmberRouter from '@ember/routing/router';
import { inject } from '@ember/service';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {

  this.route('landing', function() {
  });

  this.mount('dummyeng', { as: 'dummyeng', path: 'dummyeng' });

});

export default Router;
