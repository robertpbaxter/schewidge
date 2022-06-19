import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | cpt code', function (hooks) {
  setupTest(hooks);

  test('it displays a string for duration in minutes', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('cpt-code', { duration: 15 });
    assert.equal(model.durationInMinutes, '15 minutes');
  });
});
