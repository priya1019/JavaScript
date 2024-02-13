function addChild(){
    let parentNode=document
}

function copypaste()
{
    let node=document.getElementById("para");
    let contents1=node.innerHTML;
    let contents2=node.innerText;
    let node3=document.getElementById("para2");
    let node3=document.getElementById("para3");
    node2.innerHTML=contents1;
    node3.innerHTML=contents2;

}
function show(){
   let array=document.getElementsByClassName("c1");
    for(let node of array){
        console.log(node);
    }
    let array2=document.getElementsByTagName("ol");
    for(let node of array2){
        console.log(node);
    }
    let array3=document.getElementsByName("gender");
    for(let node of array3){
        console.log(node);
    }
}
function valueAccess(){
    let node=document.getElementById("fld1");
    let node2=document.getElementById("fld2");
    node2.value=node.value;
}
let node=document.getElementById("fld2");
let test1=()=> node.type="password"
let test2=()=> node.type="text"  
