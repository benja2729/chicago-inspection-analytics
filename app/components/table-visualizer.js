
import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  sorting: ['date:desc'],
  displayItems: computed.sort('items', 'sorting'),
  actions: {
    toggleSort( attr, ord='asc' ) {
      let sorting = this.get('sorting'),
          curr    = sorting.get('firstObject'),
          name    = !curr.includes(attr) ? `${attr}:${ord}` :
            curr.includes('asc') ? `${attr}:desc` : `${attr}:asc`;
      sorting.replace(0, 1, [name]);
    }
  }
});

