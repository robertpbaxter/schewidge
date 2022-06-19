import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scheduling/widget/sidebar', function (hooks) {
  setupRenderingTest(hooks);

  const props = {
    clinician: { nameWithTitle: 'Test Clinician, MD' },
    selectDateTime: () => {},
    selectLocation: () => {},
    selectService: () => {},
    selectedDateTime: 'Test Date & Time',
    selectedLocation: { name: 'Test Office Location' },
    selectedService: {
      description: 'Test Service Description',
      durationInMinutes: '30 minutes',
    },
  };

  const template = hbs`
      <Scheduling::Widget::Sidebar
        @clinician={{this.clinician}}
        @selectDateTime={{this.selectDateTime}}
        @selectLocation={{this.selectLocation}}
        @selectService={{this.selectService}}
        @selectedDateTime={{this.selectedDateTime}}
        @selectedLocation={{this.selectedLocation}}
        @selectedService={{this.selectedService}}
      />
    `;

  test('it displays stage information', async function (assert) {
    this.setProperties(props);
    await render(template);

    assert
      .dom()
      .hasText(
        '1clinician Test Clinician, MD 2select a service Test Service Description 30 minutes 3select a location Test Office Location 4select date & time Test Date & Time 5your information'
      );
  });
});
