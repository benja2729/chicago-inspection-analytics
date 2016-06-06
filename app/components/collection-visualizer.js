
import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  sorting: ['date:desc'],
  displayItems: computed.sort('items', 'sorting'),

  __updateDimensions: Ember.on('didInsertElement', function() {
    let el = this.$(),
        width = el.innerWidth(),
        { top } = el.position(),
        pageHeight = Ember.$(window).innerHeight(),
        parentHeight = pageHeight - top,
        itemHeight = parentHeight / 5;

    this.setProperties({
      parentHeight,
      itemHeight,
      itemWidth: width
    });
  }),

  parentHeight: computed(function( key, value ) {
    if( value ) { return value; }
    return 800;
  }),

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

