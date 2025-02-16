var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
const leastFavortieCustomer = 'its actually bob';
function changeLeastFavoriteCustomer() {
    leastFavortieCustomer = 'still not bob';
}