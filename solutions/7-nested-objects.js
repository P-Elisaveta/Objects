// BEGIN
const get = (obj, key) => {
let value = obj;
for (let i of key) {
    value = value[i];
    if(value === undefined) {
        return null;
    }
}
return value;
}
export default get;
// END