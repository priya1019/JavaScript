var p=10;
var q=23;

function addition()
{
    var a=23,b=56;
    console.log(typeof a);
    console.log(p);
    console.log("Addition is "+(a+b));
    document.write('Addition of ${a} and ${b} is: ${a+b}');
}

addition();


function sub()
{
    function sub(){
        console.log(p);
    }
}
sub();

function add(no1,no2){
    console.log(typeof no1);
    return no1+no2;
}
var result = add(45,67);
console.log(result);
console.log(add(23,5));

