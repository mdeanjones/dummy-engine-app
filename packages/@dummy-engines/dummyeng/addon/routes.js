import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('index');
  this.route('registration', { path: '/' }, function() {
  });
});
