
import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  riskLevels: computed('items.[]', function() {
    let items       = this.get('items'),
        riskLevels  = [],
        total       = items.get('length');

    items.forEach(( item ) => {
      let risk = item.get('risk');
      if(! risk ) { return; }

      let riskLevel = riskLevels.findBy('title', risk);
      if(! riskLevel ) {
        riskLevel = {
          title: risk,
          items: 1
        };

        riskLevels.pushObject(riskLevel);
      } else {
        riskLevel.items++
      }
    });

    return riskLevels.map(( riskLevel ) => {
      riskLevel.percent = (riskLevel.items / total) * 100;
      riskLevel.total   = total;
      return riskLevel;
    });
  })
});

