import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bar-graph-visualizer', 'Integration | Component | bar graph visualizer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bar-graph-visualizer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bar-graph-visualizer}}
      template block text
    {{/bar-graph-visualizer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
