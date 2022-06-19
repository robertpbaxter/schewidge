import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | scheduling/widget/locations',
  function (hooks) {
    setupRenderingTest(hooks);

    // Philosophical question: Purely mocked data or store-generated data models?
    // I side with the idea not to overcomplicate tests. Test what the thing is supposed to do, not your mocks.
    const props = {
      locations: [
        {
          cityStateZip: 'City, State Zip',
          coords: { lat: '23.5', lng: '21.5' },
          hasPhysicalAddress: true,
          name: 'Test office',
          phone: '(555) 555-5555',
          street: 'Street Address',
        },
      ],
      selectLocation: () => {},
    };

    const template = hbs`
      <Scheduling::Widget::Locations
        @locations={{this.locations}}
        @selectLocation={{this.selectLocation}}
      />
    `;

    test('it displays location information', async function (assert) {
      this.setProperties(props);
      await render(template);

      assert
        .dom('[data-test-location-card-body]')
        .hasText(
          'Test office Street Address City, State Zip (555) 555-5555 Select'
        );
    });
  }
);
