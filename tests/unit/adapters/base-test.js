import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | base', function (hooks) {
  setupTest(hooks);

  test('it sets the host', function (assert) {
    const adapter = this.owner.lookup('adapter:base');
    const expectedHost = '/client-portal-api';
    assert.equal(adapter.host, expectedHost);
  });

  test('it sets headers', function (assert) {
    const adapter = this.owner.lookup('adapter:base');
    const expectedHeaders = {
      Accept: 'application/vnd.api+json',
      'Api-Version': '2020-01-01',
      'Application-Build-Version': '0.0.1',
      'Application-Platform': 'web',
    };

    assert.deepEqual(adapter.headers, expectedHeaders);
  });
});
