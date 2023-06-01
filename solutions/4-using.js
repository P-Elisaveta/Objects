// BEGIN 
const getDomainInfo = (site) => {
    let siteScheme, siteName;
    let siteSplit = site.split('://');
    
    if (siteSplit.length == 1) {
        siteScheme = 'http';
        siteName = siteSplit[0];
    } else {
        siteScheme = siteSplit[0];
        siteName = siteSplit[1];
    }
    let domInfo = {
        "scheme": siteScheme,
        "name": siteName,
    }
    return domInfo;
}
export default getDomainInfo;
// END