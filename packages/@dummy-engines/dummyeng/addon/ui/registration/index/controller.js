import { isEmpty } from '@ember/utils';
import Ember from 'ember';
import { inject } from '@ember/service';
import { computed, get, set } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  TAG: 'RegistrationController',
  store: inject('store'),
  model: null,
  errors: null,

  init() {
    this._super(...arguments);
    this.set('componentPath', 'components');
  }
});
