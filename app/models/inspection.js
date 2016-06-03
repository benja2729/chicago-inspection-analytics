
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name:         attr('string'),
  dbaName:      attr('string'),

  date:         attr('date'),
  type:         attr('string'),

  address:      attr('string'),
  city:         attr('string'),
  state:        attr('string'),
  zip:          attr('number'),

  facilityType: attr('string'),
  license:      attr('number'),
  results:      attr('string'),
  risk:         attr('string'),
  violations:   attr('string'),

  // location:     attr(),
  latitude:     attr('number'),
  longitude:    attr('number'),
});

