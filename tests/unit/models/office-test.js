import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | office', function (hooks) {
  setupTest(hooks);

  test('it checks for a full physical address', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('office', {
      street: '12 E Main',
      city: 'New York City',
      state: 'NY',
      zip: '55555',
    });
    assert.ok(model.hasPhysicalAddress);
  });

  test('it composes city, state, and zip into one string', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('office', {
      city: 'New York City',
      state: 'NY',
      zip: '55555',
    });
    assert.equal(model.cityStateZip, 'New York City, NY 55555');
  });

  test('it defaults virtual offices to the SimplePractice office coords', function (assert) {
    const geolocation = { lat: 33.333, lng: -120.111 };
    const defaultCoords = { lat: 34.03266746, lng: -118.46818504 };
    const virtualVisitCoords = { lat: '0.0', lng: '0.0' };
    const store = this.owner.lookup('service:store');
    const officeWithCoords = store.createRecord('office', {
      geolocation,
    });
    assert.deepEqual(officeWithCoords.coords, geolocation);
    const virtualVisit = store.createRecord('office', {
      geolocation: virtualVisitCoords,
    });
    assert.deepEqual(virtualVisit.coords, defaultCoords);
  });
});
