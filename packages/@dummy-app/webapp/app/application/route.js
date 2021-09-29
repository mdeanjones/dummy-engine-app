import { inject as service } from '@ember/service';
import { typeOf } from '@ember/utils';
import { set, get } from '@ember/object';
import { allSettled } from 'rsvp';
import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({

  beforeSessionRestore() {
  },


  beforeModel(transition) {
  },

  afterModel(model, transition) {
  },

  actions: {

    willTransition(transition) {
    }
  }
});
