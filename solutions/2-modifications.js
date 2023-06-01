import _ from 'lodash';

// BEGIN
const normalize = (object) => {
  let description = object.description.toLowerCase();
  object.description = description;
  
  let name = _.capitalize(object.name);
  object.name = name;
}
export default normalize;
  // END