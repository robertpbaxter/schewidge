import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | office', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:office');
    assert.ok(adapter);
  });
});
