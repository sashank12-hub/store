export const isAuthadmin = function() {
    if(!window.localStorage.getItem('test-admin')) return false;
   // const isUserLoggedIn = JSON.parse(window.localStorage.getItem('test-admin'));
    //if(!isUserLoggedIn) return false;
    return true;
}
export const isAuthuser=function() {
    if(!window.localStorage.getItem('test-sales')) return false;
    //const isUserLoggedIn = JSON.parse(window.localStorage.getItem('test-sales'));
    //if(!isUserLoggedIn) return false;
    return true;
}

export const setAuthadmin = function(value) {
    if(value===true)
    window.localStorage.setItem('test-admin', 'test-admin');
    else 
    window.localStorage.clear('test-admin');
}
export const setAuthuser = function(value) {
    if(value===true)
    window.localStorage.setItem('test-sales', 'test-sales');
    else 
    window.localStorage.clear('test-sales');
}