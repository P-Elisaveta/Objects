import _ from 'lodash';

// BEGIN
const fill = (o1, array, o2) => {
    let obj = {};
    if (array.length == 0) {
        for (let i in o2) {
            o1[i] = o2[i];
        }
    } 
    else {
        for (let i of array) {
            obj[i] = o2[i];
        }
        for (let i of array) {
            o1[i] = obj[i]
        }
    }
    
    return o1;

}

export default fill;
// END