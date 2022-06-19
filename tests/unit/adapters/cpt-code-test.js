import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | cpt-code', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:cpt-code');
    assert.ok(adapter);
  });
});
