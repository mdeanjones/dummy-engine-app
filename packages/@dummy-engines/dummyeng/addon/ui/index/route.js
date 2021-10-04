import Route from '@ember/routing/route';


export default class ApplicationIndexRoute extends Route {
  beforeModel() {
    this.transitionTo('registration'); // See: https://github.com/ember-engines/ember-engines/pull/669
  }
}
