const accountId = 144553
let accountEmail = "puneet@124.gmail.com"
var accountPassword = "12345"
accountCity =  "Delhi" // You can create variables like this, 
                        // but is not ideal way so, prefer not to use it.
let accountState;

// accountId =  2 // Not Allowed because of constant variable
accountEmail = "mehra@472.gmail.com" 
accountPassword = "54321"
accountCity = "Dehradun"


/*
prefer not to use var 
because of issue in block scope and functional scope
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
