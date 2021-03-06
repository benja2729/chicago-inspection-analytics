import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collection-visualizer', 'Integration | Component | collection visualizer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{collection-visualizer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#collection-visualizer}}
      template block text
    {{/collection-visualizer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
