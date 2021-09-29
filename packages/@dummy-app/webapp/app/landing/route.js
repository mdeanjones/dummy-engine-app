import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    this.transitionTo('dummyeng');
  },

  setupController(controller) {
    this._super(controller);
  },

  resetController(controller, isExiting) {
  }
});
