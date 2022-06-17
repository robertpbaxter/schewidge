import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | clinician', function (hooks) {
  setupTest(hooks);

  // Nothing to test here yet
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:clinician');
    assert.ok(adapter);
  });
});
