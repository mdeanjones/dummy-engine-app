import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);
  },

  model() {

  },

  setupController(controller, model) {
    this._super(controller, model);
  },
});
