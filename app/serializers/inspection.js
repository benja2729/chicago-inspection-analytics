
import Ember from 'ember';
import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  primaryKey: 'inspection_id',
  normalizeFindAllResponse( store, modelClass, payload, id, requestType ) {
    let type = modelClass.modelName;

    let data = payload.map(( item ) => {
      let attributes = Object.assign({}, item);
      delete attributes.inspection_id;

      return {
        inspection_id:  item.inspection_id,
        attributes,
        type
      };
    });

    return this._super(store, modelClass, { data }, id, requestType);
  },
  keyForAttribute( attr ) {
    return Ember.String.underscore(attr);
  },
  attrs: {
    name: 'aka_name',
    date: 'inspection_date',
    type: 'inspection_type',
    license: 'license_'
  }
});

