
import Ember from 'ember';

const {
  String: { htmlSafe }
} = Ember;

export function floor([ number ]) {
  return htmlSafe(Math.floor(parseInt(number, 10)));
}

export default Ember.Helper.helper(floor);

