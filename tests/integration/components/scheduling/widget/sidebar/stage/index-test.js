import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | scheduling/widget/stage/index',
  function (hooks) {
    setupRenderingTest(hooks);

    const props = {
      index: '3',
      isActive: true,
      label: 'Test Stage',
      primaryValue: 'First line of text',
      secondaryValue: 'Second line of text',
      reselect: () => {},
    };

    const template = hbs`
      <Scheduling::Widget::Sidebar::Stage
        @index={{this.index}}
        @isActive={{this.isActive}}
        @label={{this.label}}
        @primaryValue={{this.primaryValue}}
        @secondaryValue={{this.secondaryValue}}
        @reselect={{this.reselect}}
      />
    `;

    test('it displays stage information', async function (assert) {
      this.setProperties(props);
      await render(template);

      assert
        .dom()
        .hasText('3Test Stage First line of text Second line of text');
    });

    test('it adds a disabled class to inactive stages without a primary value', async function (assert) {
      this.setProperties({
        ...props,
        isActive: false,
        primaryValue: undefined,
      });
      await render(template);

      assert.dom('[data-test-widget-stage]').hasClass('disabled');
    });
  }
);
