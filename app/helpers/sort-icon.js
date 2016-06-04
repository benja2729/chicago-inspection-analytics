
import Ember from 'ember';

const { String: { htmlSafe } } = Ember;
const asc       = 'sort-by-attributes',
      desc      = `${asc}-alt`,
      base      = 'sort',
      templRgx  = /%@/g,
      template  = '<span class="glyphicon glyphicon-%@"></span>';

export function sortIcon([ attr, curr ]) {
  let name = curr.includes(attr) ? curr.includes('asc') ? asc : desc : base,
      icon = template.replace(templRgx, name);
  return htmlSafe(icon);
}

export default Ember.Helper.helper(sortIcon);

