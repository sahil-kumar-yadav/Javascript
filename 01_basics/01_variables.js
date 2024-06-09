const accountId = 10502
let accountEmail = "sahil@email.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2  not valid --> cant be changed

// console.log(accountId);

accountEmail = "abc@email.com"
accountPassword = "1212"
accountCity = "JJN"

let accountState; // undefined

console.table([accountId,accountEmail,accountPassword,accountCity,accountId,accountState]) // new way to print all at the same time
