import _ from 'lodash';

// BEGIN
const countWords = (words) => {
    let wordsLower = words.toLowerCase();
    let wordsseparation = _.words(wordsLower) ;
    let object = {};
    if (words.length == 0) return {}
    for (let i of wordsseparation) {
        if (object[i]) {
            object[i] += 1;
        } else {
            object[i] = 1;
        }
    } 

    return object;
}


export default countWords;
// END