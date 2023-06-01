// BEGIN
function compareObj(obj1, obj2) {
    if (obj1['name'] != obj2['name']){
        return false
    } else if(obj1['state'] != obj2['state']){
        return false
    } else if(obj1['website'] != obj2['website']){
        return false
    } else {
        return true
    }
}
export default compareObj
// END