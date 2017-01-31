const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, this next word: %s, was inserted using interpolation", "BACON");
var varTest = "(blah)";
console.log(`So was this: ${varTest}, but with ES6 interpolation`);

// Styled
console.log("%c I am some great text", "font-size:18px; background:red; text-shadow: 10px 10px 0 blue");

// warning!
console.warn("Oh no! This is a console.warn");

// Error :|
console.error("Yikes! This is an console.error!");

// Info
console.info("Here's a console.info");

// Testing
console.assert(1===2, "Here's what happens when a console.assert is false (when it's true, nothing shows.)");
console.assert(1===1, "Nothing to see here.");
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is false!");

// clearing
console.log('Type "clear()" to fire console.clear()');
clear = () => {
  console.clear();
}

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

dogs.forEach(dog => {
  console.groupCollapsed(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Odd");
console.count("Even");
console.count("Even");
console.count("Even");
console.count("Even");
console.count("Odd");
console.count("Even");
console.count("Even");
console.count("Odd");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/madduxTim")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);