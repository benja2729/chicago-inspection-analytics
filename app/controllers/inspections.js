
import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['visualize'],
  visualize: 'table',
  visualizerName: computed('visualize', function() {
    return `${this.get('visualize')}-visualizer`;
  })
});

