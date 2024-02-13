// Implement more string functions
let i = 0;

const addEle = () => {
	let part1 = document.getElementById("part1");
	let btn1 = document.getElementById("btn1");

	let division = document.createElement("div");
	let heading = document.createElement("h3");
	let string = "Hello World";
	let paraIn = document.createElement("p");
	let paraOut = document.createElement("p");

	let head = ["String Length", "Replacing String Content", "Converting to Upper Case", "Converting to Lower Case", "Trim"];
	let arr = [string.length, string.replace("World", "Universe"), string.toUpperCase(), string.toLowerCase(), string.trim()];

	if(i < head.length) {

		division = document.createElement("div");
		heading = document.createElement("h3");

		heading.innerHTML = head[i];

		paraIn = document.createElement("p");
		paraOut = document.createElement("p");

		paraIn.innerHTML = "ip: " + string;
		paraOut.innerHTML = "op: " +arr[i];

		division.appendChild(heading);
		division.appendChild(paraIn);
		division.appendChild(paraOut);
		part1.insertBefore(division, btn1)

	} else if (i == head.length) {

		division = document.createElement("div");
		heading = document.createElement("h3");

		heading.innerHTML = "Concatination";

		division.appendChild(heading);

		let string1 = "Hello";
		let string2 = "World"

		paraIn = document.createElement("p");
		paraOut = document.createElement("p");

		paraIn.innerHTML = "ip: string1 - " + string1 + " & string2 - " + string2;
		paraOut.innerHTML = "op: " + string.concat("---", string2);

		division.appendChild(paraIn);
		division.appendChild(paraOut);
		part1.insertBefore(division, btn1);
	}

	i += 1;

}

// Assume there is empty section inside body. 
// Add oredered list having 3 list items inside this section via javascript code using button click.

let part2 = document.getElementById("part2");
let btn2 = document.getElementById("btn2");

let orderedList = document.createElement("ol");
division = document.createElement("div");
heading = document.createElement("h3");

let j = 0;
let list = ["JavaScript", "ReactJs", "Angular"];
let li;

const addList = () => {

	if(j == 0) {
		division.appendChild(heading);
		division.appendChild(orderedList);
		part2.insertBefore(division, btn2);
	
		heading.innerHTML = "FrontEnd Technologies";

	} else if(j == 1){

		for(let l of list) {
			li = document.createElement("li");
			li.innerHTML = l;
			orderedList.appendChild(li);
		}

	}

	j += 1;

}