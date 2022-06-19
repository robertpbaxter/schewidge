import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | scheduling/widget/services',
  function (hooks) {
    setupRenderingTest(hooks);

    const props = {
      services: [
        {
          description: 'Test Service',
          durationInMinutes: '20 minutes',
        },
      ],
      selectService: () => {},
    };

    const template = hbs`
      <Scheduling::Widget::Services
        @services={{this.services}}
        @selectService={{this.selectService}}
      />
    `;

    test('it displays location information', async function (assert) {
      this.setProperties(props);
      await render(template);

      assert.dom().hasText('Test Service 20 minutes Select');
    });
  }
);
