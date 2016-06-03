
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

const defaultValue = { defaultValue: 'UNKNOWN' };

export default Model.extend({
  name:         attr('string', defaultValue),
  dbaName:      attr('string', defaultValue),

  date:         attr('date'),
  type:         attr('string'),

  address:      attr('string', defaultValue),
  city:         attr('string', defaultValue),
  state:        attr('string', defaultValue),
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

