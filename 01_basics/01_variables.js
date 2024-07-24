const accountId = 144553;
let accountEmail = "sahilkumar05072003@gmail.com";
var accountPassword = "12345"

accountCity = "Jaipur";

let accountState;

// we are not allowed to change a constant type of variable 
// accountId = 2;

accountEmail ="sahilsingh9618@gmail.com";
accountPassword = "212122212";
accountCity = "Bengaluru";

console.log(accountId);

/*  prefer not to use var because of issue in 
block scope and functional scope */

console.table([accountId,accountEmail,accountPassword, accountCity,accountState]);