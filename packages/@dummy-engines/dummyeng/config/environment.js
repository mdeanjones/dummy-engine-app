/* jshint node: true */

module.exports = function(environment) {
  const ENV = {
    modulePrefix: '@dummy-engines/dummyeng',
    podModulePrefix: '@dummy-engines/dummyeng/ui',
    environment,
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
        Function: true,
        Array: true,
        String: true,
      },
    }
  };
  return ENV;
};
