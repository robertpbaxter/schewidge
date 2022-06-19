import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scheduling/widget', function (hooks) {
  setupRenderingTest(hooks);

  const template = hbs`
      <Scheduling::Widget />
    `;

  // Note to the reviewers: I noticed that browser tests were still tapping into the API, so I was going to build out the test cases to showcase how to prevent timing flakes. Headless tests won't work like this, so I'll just install mirage instead.
  skip('it displays the sidebar', async function (assert) {
    await render(template);
    // Waiting for selectors to appear is prone to flakiness in larger, more complex applications
    // Setting up attrs that resolve loading states makes better tests (in an ideal world)
    await waitFor('[data-test-widget-sidebar] [data-test-done-loading]');

    assert
      .dom('[data-test-widget-sidebar]')
      .hasText(
        '1clinician Johnny Appleseed 2select a service 3select a location 4select date & time 5your information'
      );
  });

  skip('it displays service options', async function (assert) {
    await render(template);
    await waitFor('[data-test-widget-object-page] [data-test-done-loading]');

    assert
      .dom('[data-test-widget-object-page]')
      .hasText(
        'Psychiatric Diagnostic Evaluation 50 minutes Select Intro Call 15 minutes Select'
      );
  });
});
