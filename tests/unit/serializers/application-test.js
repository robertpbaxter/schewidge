import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    const store = this.owner.lookup('service:store');
    const record = store.createRecord('office', {});

    const serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

  test('it preserves attribute keys', function (assert) {
    const attributes = {
      firstName: 'John',
      lastName: 'Doe',
    };

    const payload = { id: '1', type: 'clinicians', attributes };
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('application');

    const serializedPayload = serializer.normalizeSingleResponse(
      store,
      store.modelFor('clinician'),
      payload,
      '1',
      'findRecord'
    );
    assert.deepEqual(serializedPayload.attributes, attributes);
  });
});
