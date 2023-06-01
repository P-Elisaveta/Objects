// BEGIN
const cloneShallow = (object) => {
    let clone = {};

    for (let i in object) {
        clone[i] = object[i];
    }
    return clone;
}
export default cloneShallow;
// END