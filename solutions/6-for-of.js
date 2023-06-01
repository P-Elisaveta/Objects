// BEGIN
const pick = (object, array) => {
    let result = {};
    for (let i in object) {
        if (array[i] !== undefined || array.indexOf(i) != -1) {
            result[i] = object[i];
        }
    }
    return result;
}
export default pick;
// END