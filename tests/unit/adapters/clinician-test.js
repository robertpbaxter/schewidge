import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | clinician', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:clinician');
    assert.ok(adapter);
  });
});
