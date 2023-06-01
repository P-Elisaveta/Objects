// BEGIN
const make = (name, object = {}) => {
    let cState, cCreatedAt;
    if (object.state) {
        cState = object.state;
    } else {
        cState = 'moderating'
    }
    if (object.createdAt) {
        cCreatedAt = object.createdAt;
    } else {
        cCreatedAt = Date.now();}
    let company = {
        'name': name,
        'state': cState,
        'createdAt': cCreatedAt,
    }
    for (let i in object) {
        company[i] = object[i];
    }
    return company;
}
export default make;
// END