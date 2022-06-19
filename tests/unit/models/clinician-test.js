import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | clinician', function (hooks) {
  setupTest(hooks);

  test('it displays titles with names', function (assert) {
    const store = this.owner.lookup('service:store');
    const modelWithoutTitle = store.createRecord('clinician', {
      firstName: 'John',
      lastName: 'Doe',
    });
    assert.equal(
      modelWithoutTitle.nameWithTitle,
      'John Doe',
      'display only the first and last name'
    );
    const modelWithTitle = store.createRecord('clinician', {
      firstName: 'Jane',
      lastName: 'Doe',
      suffix: 'LMHC',
    });
    assert.equal(
      modelWithTitle.nameWithTitle,
      'Jane Doe, LMHC',
      'display both names and title'
    );
  });
});
