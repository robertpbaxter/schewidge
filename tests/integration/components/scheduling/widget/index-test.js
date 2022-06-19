import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { click, render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scheduling/widget', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  const template = hbs`
      <Scheduling::Widget />
    `;

  hooks.beforeEach(function () {
    this.server.create('clinician', {
      firstName: 'Scooby',
      lastName: 'Doo',
      suffix: 'DDS',
    });
    this.server.create('cptCode', {
      description: 'Professional Meddling',
      duration: '25',
      string: 'Free',
      callToBook: false,
    });
    this.server.create('office', {
      cityStateZip: 'Fictional City, State Zip',
      geolocation: { lat: '23.5', lng: '21.5' },
      hasPhysicalAddress: true,
      name: 'The Mystery Machine',
      phone: '(555) 555-5555',
      street: "Wherever it's parked",
    });
  });

  // This widget assignment is a prime example of an integration test that doesn't need to be converted into an acceptance test / E2E. It provides a high degree of test confidence and performs better since it's more lightweight.
  test('it schedules an appointment', async function (assert) {
    await render(template);

    await waitFor('[data-test-widget-object-page] [data-test-done-loading]');

    assert
      .dom('[data-test-widget-object-page]')
      .hasText(
        'Professional Meddling 25 minutes Select',
        'the object page is populated with services'
      );

    await click('[data-test-select-service]');

    assert
      .dom('[data-test-widget-object-page]')
      .hasText(
        'To navigate, press the arrow keys. The Mystery Machine (555) 555-5555 Select',
        'the object page is populated with locations'
      );

    await click('[data-test-select-location]');

    assert
      .dom('[data-test-widget-object-page]')
      .hasText('', 'the object page is populated with a datetime picker');

    assert
      .dom('[data-test-widget-sidebar]')
      .hasText(
        '1clinician Scooby Doo, DDS 2select a service Professional Meddling 25 minutes 3select a location The Mystery Machine 4select date & time 5your information',
        'sidebar has populated with all information'
      );
    // TODO: Finish test once widget is complete
  });
});
