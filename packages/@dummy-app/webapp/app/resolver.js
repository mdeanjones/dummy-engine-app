import Resolver from 'ember-resolver';

const DATA_TYPES = ['model', 'adapter', 'serializer'];


export default Resolver.extend({
  podDataLookup(parsedName) {
    const type = parsedName.type;

    if (DATA_TYPES.indexOf(type) !== -1) {
      const modulePrefix = this.namespace.modulePrefix;
      const fullName = parsedName.fullName;

      if (fullName === 'adapter:application' || fullName === 'serializer:application') {
        return `${modulePrefix}/data/-${type}s/application`;
      }

      return `${modulePrefix}/data/${parsedName.fullNameWithoutType}/${type}`;
    }
  },


  init() {
    this.get('moduleNameLookupPatterns').push(this.podDataLookup);
    return this._super(...arguments);
  },
});
