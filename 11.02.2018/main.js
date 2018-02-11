// Count from 1 to N

// var N = Number(prompt("Reqem daxil edin: "));
// var counter = 1;

// while(N >= counter){
//     console.log(counter);
//     counter++;
// }
// console.log("Oyun bitdi!");

// Multiply numbers from 1 to N

var N = Number(prompt("Reqem daxil edin: "));
var counter = 1;
var sum = 1;

while(counter <= N){
    sum *= counter;
    console.log(counter + "-ci gedis -> Cem: " + sum);
    counter++;
}
console.log("Loop bitdi, ele oyun da. Cem: " + sum);

