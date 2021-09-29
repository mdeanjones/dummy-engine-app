import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Route.extend({
  titleToken: 'Register',
  beforeModel() {
    this._super(...arguments);
  },
  
  model() {
    const model = EmberObject.extend({
    });
    set(model, 'phone', '');
    return model;
  },

  setupController(controller, model) {
    this._super(controller, model);
  },

  resetController(controller, isExiting) {
    if(isExiting) {
      controller.resetForm();
    }
  }
});
