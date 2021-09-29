import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';

function guidForHelper([obj, suffix]) {
  assert('Must pass a valid object', obj);
  return [guidFor(obj), suffix].join('-');
}

export default helper(guidForHelper);
