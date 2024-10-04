
// Step 1 - Creating an Array
console.log("\nCreating an Array");
const cities = ["Gibraltar", "Osaka", "Nairobi", "Houston", "Lima", "Vancouver", "Bogota"];
console.log(cities);

// Step 2 - First, last and middle element
console.log("\nFirst, Last, and Middle Element");

let firstCity = cities[0];
console.log(firstCity);

let lastCity = cities[cities.length - 1];
console.log(lastCity);

console.log(cities[3]);
let middleCity = cities[3];


// //Step 3 - Array properties
console.log("\nLength Property");
console.log(cities.length);

//Step 4 - Array Methods
console.log("\nArray Methods");

//Pop
console.log("Pop");
cities.pop();
console.log(cities);

//Push
console.log("\nPush");
cities.push("Mumbai");
console.log(cities);

//Shift
console.log("\nShift");
cities.shift();
console.log(cities);

//Unshift
console.log("\nUnshift");
cities.unshift("Beirut");
console.log(cities);

//Splice
console.log("\nSplice 4");
cities.splice(4);
console.log(cities);

//Step 5 - Iterating an Array
console.log("\nIterating an Array");
console.log("\nFor Loop");
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log("\nFor...of Loop");

for (const name of cities) {
    console.log(name);
}

//Step 6 - Desctructuring
console.log("\nDesctructuring");

const [first, second, ...rest] = cities;
console.log(first);
console.log(second);

console.log(rest);
