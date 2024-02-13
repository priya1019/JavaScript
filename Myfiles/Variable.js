var no;
no=90;
document.write(no);
no="neosoft";
document.write(no);
no= 56.78;
no=true;
var no1=56,no2=45.78;
var addition=no1+no2;
document.write(addition);

document.write("Result is: "+3+6);
document.write("<br>Result is: "+3+6*3);
document.write("<br>Result is: "+(3+6)*3);

var age=10;
document.write(age>=18);
if(age>=18)
{
    document.write("<br>you are allowed for voting");
    document.write("<br>please follow further instructions");
}
else{
    document.write("<br>sorry not alowed");
    document.write("<br>only 18 or greater allowed")
}
var perct=67;
if(perct>=70 || perct==70){
    document.write("<br>your are passed with distinction");
}
else if(perct>=60 && perct<70){
    document.write("<br>your are passed with first class");
}
else if(perct>=40 && perct<60){
    document.write("<br>your are passed with passed");
}
else{
    document.write("<br>your are passed with failed");
}
var no=10;

var i=1; //once
while(i<=10){ //cond, cond,cond
    document.write(i+"<br> ");
    i=i+1; //incr, incr,incr
}
document.write("out of loop"+i);
var j =10;
for(n=1;n<=10;n++)
{
    document.write(n+"<br> ")
}
document.write("out of loop"+n);