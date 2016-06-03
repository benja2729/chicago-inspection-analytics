
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindAll( type ) {
    return this._super(type).replace(/\/[^\/]+$/, '/cwig-ma7x.json');
  }
});

