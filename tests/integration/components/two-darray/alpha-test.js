import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('two-darray/alpha', 'Integration | Component | two darray/alpha', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{two-darray/alpha}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#two-darray/alpha}}
      template block text
    {{/two-darray/alpha}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
