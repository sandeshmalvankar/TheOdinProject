const cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
let info = "My cats are called ";

//for loop
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
}
console.log(info); //My cats are called Bill, Jeff, Pete, Biggles, and Jasmin.


//continue ex
let para = "";
let num = 10;
for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }
  para += i + " ";
}
console.log(para);


//will work
let i = 0; // we have i already declared and assigned
for (; i < 3; i++) {
  alert(i); // 0, 1, 2
}

//will work
let i = 0;
for (; i < 3; ) {
  alert(i++);
}


//break outer loop
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
  }
}
alert("Done!");


//see here
let i = 0;
while (++i < 5) alert( i ); //o/p = 1 to 4
let i = 0;
while (i++ < 5) alert( i ); //o/p = 1 to 5

for (let i = 0; i < 5; ++i) alert( i ); //0 to 4
for (let i = 0; i < 5; i++) alert( i ); //0 to 4