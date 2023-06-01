// BEGIN
const getSortedNames = (array) => {
    let newArray = [];

    for (let i of array) {
        let {name} = i;
        newArray.push(name)
    }
    newArray = newArray.sort();
    return newArray;
}
export default getSortedNames;
// END