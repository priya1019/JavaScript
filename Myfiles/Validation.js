let nameNode=document.getElementById("name");
let errNode1=document.getElementById("err1");
let ageNode=document.getElementById("age");
let errNode2=document.getElementById("err2");

function validate1(){
    errNode1.innerHTML="";
    nameNode.style.border="2px green solid";
    nameNode.style.backgroundColor='yellow';
    let name=nameNode.value;
    if(name===""){
        errNode1.innerHTML="<b>this field is required</b>";
        nameNode.style.border="2px red solid ";
        nameNode.style.backgroundColor='pink';
        return false;
    }else{
        return true;
    } 
}

function validate2(){
    errNode2.innerHTML="";
    ageNode.style.border="2px green solid";
    ageNode.style.backgroundColor='yellow';
    let age=ageNode.value;
    if(age===""){
        errNode2.innerHTML="<b>this field is required</b>";
        ageNode.style.border="2px red solid ";
        ageNode.style.backgroundColor='pink';
        return false;
    }
    else if(age<0 || age>100){
        errNode2.innerHTML="<b>age should be in a range of 0 to 100</b>";
        ageNode.style.border="2px red solid ";
        ageNode.style.backgroundColor='pink';
        return false;
    }
    else {
    return true;
    }
}

let mailNode=document.getElementById("mailid");
let errNode3=document.getElementById("err3");

function validate3(){
    errNode3.innerHTML="";
    mailNode.style.border="2px green solid";
    mailNode.style.backgroundColor='yellow';
    let mail=mailNode.value;
    let ss=mail.substring(mail.indexOf('@')+1);
    console.log(ss);
    
    if(mailid===""){
        errNode3.innerHTML="<b>this field is required</b>";
        mailNode.style.border="2px red solid ";
        mailNode.style.backgroundColor='pink';
        return false;
    }
    else if(!mailNode.includes("@") || ss===''){
        errNode3.innerHTML="<b>invalid email id.</b>";
        mailNode.style.border="2px red solid ";
        mailNode.style.backgroundColor='pink';
        return false;
    }else{
     return true;
    }
}

let passNode=document.getElementById("password");
let errNode4=document.getElementById("err4");
function validate4(){
    errNode4.innerHTML="";
    passNode.style.border="2px green solid";
    passNode.style.backgroundColor='yellow';
    let pass=passNode.value;
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if(pass===""){
        errNode4.innerHTML="<b>this field is required</b>";
        passNode.style.border="2px red solid ";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else if(regexpress.test(pass)==false){
        errNode4.innerHTML="<b>Password should be alphanumeric with atleast one symbol from !,@,#,$,%,^,&,*</b>";
        passNode.style.border="2px red solid ";
        passNode.style.backgroundColor='pink';
        return false;
    }
    else if(pass.length<3 || pass.length>8){
        errNode4.innerHTML="<b>Password should have min 3 and max 8 characters</b>";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor="pink"
        return false;
    }else{
         return true;
    }
}

let confpassNode=document.getElementById("con_password");
let errNode5=document.getElementById("err5");
function validate5(){
    errNode5.innerHTML="";
    confpassNode.style.border="2px green solid";
    confpassNode.style.backgroundColor='yellow';
    let confpass=confpassNode.value;
    let pass=passNode.value;

    if(confpass===""){
        errNode5.innerHTML="<b>this field is required</b>";
        confpassNode.style.border="2px red solid ";
        confpassNode.style.backgroundColor='pink';
        return false;
    }
    else if(pass!=confpass){
        errNode5.innerHTML="<b>Password should be matched</b>";
        confpassNode.style.border="2px red solid ";
        confpassNode.style.backgroundColor='pink';
        return false;
    }else{
         return true;
    }
}

let checkNode=document.getElementById("showpass");
function showPass(){
    console.log(status);
    if(checkNode.checked){
        passNode.type="text";
        confpassNode.type="text";

    }else{
        passNode.type="password";
        confpassNode.type="password";
    }
}


function validateForm1(){
   let st1= validate1();
   let st2= validate2();
   let st3=validate3();
   let st4= validate4();
   let st5= validate5();
    return (st1 && st2 && st3 && st4 && st5);

}
