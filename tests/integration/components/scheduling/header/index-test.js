import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scheduling/header', function (hooks) {
  setupRenderingTest(hooks);

  const template = hbs`
    <Scheduling::Header />
  `;

  test('it renders', async function (assert) {
    await render(template);

    assert
      .dom(this.element)
      .hasText('Request an Appointment The Therapy Center');
  });
});
