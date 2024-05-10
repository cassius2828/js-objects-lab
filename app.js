const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

console.dir(pokemon, { maxArrayLength: null });

///////////////////////////
// ! exercise 1
///////////////////////////
console.log("");

console.log(pokemon[58].number);

///////////////////////////
// ! exercise 2
///////////////////////////
console.log("");

console.log(game);

///////////////////////////
// ! exercise 3
///////////////////////////
console.log("");

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
};
console.log(game);

///////////////////////////
// ! exercise 4
///////////////////////////
console.log("");

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
const myStarterPokemonNum = 24
game.party.push(pokemon[myStarterPokemonNum]);
console.log(game);
///////////////////////////
// ! exercise 5
///////////////////////////
console.log("");

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
//  ! commented out code was unncessary :(
// initialize an empty array to store an array of objs with id and hp levels
// this also preserves the original order of the array so it is not overwritten later
const hpValues = [];
// add these values from pokemon array to hpValues array with the desired keys
pokemon.map((item) => {
  let obj = {
    hp: null,
    number: null,
  };
  obj.hp = item.hp;
  obj.number = item.number;
  hpValues.push(obj);
});

// sort the new array by the highest hp
const sortByHp = hpValues.sort((a, b) => {
  // access the keys with bracket notation and the string of the key name
  return b["hp"] - a["hp"];
});
// select the id of the highest valued pokemon from sorted arr
let highestHpPokemon = sortByHp[0].number;

// iterate through pokemon array so I can add the full pokemon to the party array
pokemon.map((item) => {
  if (item.number === highestHpPokemon) {
    game.party.push(item);
  }
});

console.log(game.party);
// just add two pokemon whos names are cool
game.party.push(pokemon[3], pokemon[99]);
console.log("the answer for exercise 5 is:");
console.log(game.party);

///////////////////////////
// ! exercise 6
///////////////////////////
console.log("");

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

game.party.sort((a, b) => b["hp"] - a["hp"]);
console.log("the answer for exercise 6 is:");

console.log(game.party);

///////////////////////////
// ! exercise 7
///////////////////////////
console.log("");
/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/
console.log("the answer for exercise 7 is:");
game.gyms.map((item) => {
  if (item.difficulty < 3) {
    item.completed = true;
    console.log(
      "The level " +
        item.difficulty +
        " location " +
        item.location +
        " is now completed!"
    );
  }
});

///////////////////////////
// ! exercise 8
///////////////////////////
console.log("");

/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/
game.party.map((item) => {
  if (item.number === myStarterPokemonNum + 1) {
    game.party.pop();
    game.party.push(pokemon[myStarterPokemonNum + 1]);
  }
});
// currenty my issue is the sorted pokemon are still going by hp
// * solved by implementing the first time i sorted the array to what i originally had
console.log("the answer for exercise 8 is:");
console.log(game.party);
///////////////////////////
// ! exercise 9
///////////////////////////
console.log("");
/*
Exercise 9
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 9 here:
*/
console.log("the answer for exercise 9 is:");
game.party.forEach((item) => console.log(item.name));

///////////////////////////
// ! exercise 10
///////////////////////////
console.log("");
/*
Exercise 10
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 10 here:
*/
let starterPokemon = pokemon.filter((item) => {
  if (item.starter) {
    return item.name;
  }
});
console.log("the answer for exercise 10 is:");
starterPokemon.forEach((item) => console.log(item.name));

///////////////////////////
// ! exercise 11
///////////////////////////
console.log("");
/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[27]);
console.log("the answer for exercise 11 is: ");
console.log(game.party);
console.log(game.party.at(-1));
console.log("I chose " + game.party.at(-1).name);
///////////////////////////
// ! exercise 12
///////////////////////////
console.log("");
/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/
console.log(game);
game.catchPokemon = function (pokemonObj) {
  if (game.items[1].quantity === 0) {
    return "no more pokeballs";
  }
  game.party.push(pokemonObj);
  game.items[1].quantity--;
};
console.log("the answer for exercise 12 is: ");
game.catchPokemon(pokemon[77]);
console.log("I just caught pokemon 77");
console.log(game.items[1]);
game.catchPokemon(pokemon[89]);
console.log("I just caught pokemon 89");
console.log(game.items[1]);

///////////////////////////
// ! exercise 13
///////////////////////////
console.log("");
/*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/

console.log("the answer for exercise 13 is: ");
game.gyms.map((item) => {
  if (item.difficulty < 6) {
    item.completed = true;
    console.log(
      "The level " +
        item.difficulty +
        " location " +
        item.location +
        " is now completed!"
    );
  }
});

///////////////////////////
// ! exercise 14
///////////////////////////
console.log("");
/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/
game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };
  game.gyms.map((item) => {
    if (item.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  console.log(gymTally);
};
console.log("the answer for exercise 14 is: ");
game.gymStatus();

///////////////////////////
// ! exercise 15
///////////////////////////
console.log("");
/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/
console.log("the answer for exercise 15 is: ");

game.party.partyCount = function () {
  let count = 0;
  game.party.forEach((_) => {
    count++;
    console.log(count);
  });
};

game.party.partyCount();
console.log(game.party);

///////////////////////////
// ! exercise 16
///////////////////////////
console.log("");
/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/

console.log("the answer for exercise 16 is: ");
game.gyms.map((item) => {
  if (item.difficulty < 8) {
    item.completed = true;
    console.log(
      "The level " +
        item.difficulty +
        " location " +
        item.location +
        " is now completed!"
    );
  }
});

///////////////////////////
// ! exercise 17
///////////////////////////
console.log("");
/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/

console.log(game);



///////////////////////////
// styles
///////////////////////////
const body = document.querySelector("body");
body.style.backgroundColor = "#2b2b2b";
body.style.color = "#f2f2f2";
