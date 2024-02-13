window.alert("Hurry up!!! Sale end soon...");
alert("Hurry...only 10 minutes left to finish exam ")

var status=window.confirm("Do you really want to finish exam?");
console.log(status);
console.log(typeof status);
if(status=='true'){
    document.write("OK... you have submitted your exam");
}
else{
    document.write("You can continue with exam")
}
let company= window.prompt("enter company name:");
console.log(company);
console.log(typeof company);