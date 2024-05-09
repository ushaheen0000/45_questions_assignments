"use strict";
// qno:2
// Personal Message:
// Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
/*let personName: string = "Eric";
console.log(`hello ${personName} would you like to learn some Python today?`); */
//         
/*
// qno:3

// Name Cases:
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "uzma shaheen";
// lowerCase
console.log("lowercase:", personName.toLowerCase());
// upperCase
console.log("uppercase:", personName.toUpperCase());
// titleCase
// console.log(personName.charAt(0).toUpperCase() +
// personName.slice(1).toLowerCase());
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
 */
// 
/*
// qno:4

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousPerson: string = "Albert Einstein";
let famousQuote: string = "A person who never made a mistake never tried anything new." ;
console.log(`${famousPerson} once said, ${famousQuote}`); */
//
/* // qno:5

// Famous Quote 2:
// Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";

let message: string = "A person who never made a mistake never tried anything new.";

console.log(`${famous_person} once said, ${message}`);
*/
// 
/*
// qno:6

// Stripping Names:
// Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName: string = "\t\n   uzma shaheen  \n\t";
console.log(personName);
console.log(personName.trim());
*/
// 
/*
// qno:7

// Number Eight:
// Write addition, subtraction, multiplication, and division operations that each result in the
// number 8. Be sure to enclose your operations in print statements to see the results.

const addition: number = 4+4;

const subtraction: number = 10-2;

const multiplication: number = 2*4;

const division: number = 16/2;

console.log(addition,subtraction,multiplication,division); */
//
/*
// qno:8

// You should create four lines that look like this: console.log(5 + 3)
console.log(5 + 3);

console.log(10 - 2);

console.log(2 * 4);

console.log(16 / 2);
*/
//
/*
// qno:9

// Favorite Number:
// Store your favorite number in a variable. Then, using that variable, create a message that
// reveals your favorite number. Print that message.

let favouriteNumber: number = 4;

let message: string = "My favourite number is 4."

console.log(`My favourite number is ${favouriteNumber}.`);
*/
//
/*
// qno:10

// Adding Comments:
// Choose two of the programs you’ve written, and add at least one comment to each. If you don’t
// have anything specific to write because your programs are too simple at this point, just add your name
// and the current date at the top of each program file. Then write one sentence describing what the
// program does.

// Uzma shaheen , 2024-05-07

// this program prints my favourite number.

const favourite_number = 4;

const message = "My favourite number is 4."

console.log(`My favourite number is ${favourite_number}.`);
*/
// 
/*
// qon:11

// Names:
//Store the names of a few of your friends in an array called names. Print each person’s name by
// accessing each element in the list, one at a time.

let names: string[] = ["uzma", "shazia", "ayesha", "laiba"];

console.log(names[0]);

console.log(names[1]);

console.log(names[2]);

console.log(names[3]);
*/
//
/*
// qno:12

// Greetings:
// Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be
// personalized with the person’s name.

let names: string[] = ["uzma", "shazia", "ayesha", "laiba"];

let message: string = "Do you like cooking?";

console.log(names[0]," " + message);

console.log(names[1]," " + message);

console.log(names[2]," " + message);

console.log(names[3]," " + message);
*/
//
/*
// qno:13

// Your Own Array:
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
// that stores several examples. Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.”

let transportation: string[] = ["Bianchi bicycle", "Suzuki", "Honda", "CD"];

transportation.forEach(transportation=> {
    console.log(`I would like to own a ${transportation}.`);
})
*/
//
/*
// qno:14

// Guest List:
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to
// each person, inviting them to dinner.

let guests: string[] = ["Ali", "Asad", "Raza"];

guests.forEach(guests=> {
    console.log(`Dear ${guests}, You are invited to dinner`);
})
*/
//
/*
// qno:15

//   Changing Guest List:
// You just heard that one of your guests can’t make the dinner, so you need to send out a new
//set of invitations. You’ll have to think of someone else to invite.

let guests: string[] = ["Ali", "Asad", "Raza"];

let unableToAttend: string = "Ali";

console.log(`Dear ${unableToAttend} , you cannot attend the dinner.`);

let newGuest: string = "Saad";

guests[guests.indexOf(unableToAttend)] = newGuest;

// invitations
guests.forEach(guests=> {

    console.log(`Dear ${guests}, you are invited to dinner.`)
})
*/
//
/*
// qno:16

// More Guests:
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guests: string[] = ["Saad", "Asad", "Raza"]

console.log("Great news, I found a big dinner table!!!");
 // begin
guests.unshift("Rehan");
// middle
guests.splice(guests.length / 2,0, "Asim")
// end
guests.push("Saim");

guests.forEach(guests=> {

     console.log(`Dear ${guests}, You all are invited to dinner.`);

})
*/
//
/*
// qno:17

// Shrinking Guest List:
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for
// only two guests.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure
// you actually have an empty list at the end of your program.

 let guests : string[] = ["Rehan", "Saad","Asim", "Asad", "Raza", "Saim"];

 console.log("unfortunately, I can only invite two peoples for dinner.");

 while(guests.length> 2)  {

    let removedGuests = guests.pop();

     console.log(`Sorry, ${removedGuests} , You are not invited to dinner.`);
}
guests.forEach(guests => {

    console.log(`Dear ${guests}, you are still invited to the dinner.`)
});
 // removing last two names
guests.pop();

guests.pop();

console.log(guests);
*/
//
/*
// qno:18

// Seeing the World:
// Think of at least five places in the world you’d like to visit.
// Store the locations in an array. Make sure the array is not in alphabetical

let places: string[] = ["Pakistan","London","China", "Japan","America"]

// 1 original order

console.log("original order:", places);

// 2 alphabetical order

console.log("alphabetical order:", [...places].sort());

// 3 original order

console.log("original order:", places);

// 4 reverse alphabetical order

console.log("reverse alphabetical order:", [...places].sort().reverse());

// 5 original order

console.log("original order:", places);

// 6 Reverse the order

places.reverse();

console.log("reverse order:", places);

// Reverse the order again to show its original order

places.reverse();

console.log("reverse to show original order:", places);

// Sort your array so it’s stored in alphabetical order.

places.sort();

console.log("aplhabetical order:", places);

// Sort to change your array so it’s stored in reverse alphabetical order.

places.sort().reverse();

console.log("reverse alphabetical order:", places);
*/
//
/*
// qno:19

// Dinner Guests:
// Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.

let invitations: string[] = ["Raza", "Saim"]

invitations.forEach(invitations => {

    console.log(`Dear ${invitations} , you are invited to dinner.`);

})
*/
//
/*
// qno:20

// Think of something you could store in an array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
// a list containing these items.

let languages: string[] = ["English", "Urdu", "Arabic", "Chinese", "Bengali"]

console.log("\t\n   Names of Languages     \n\t");

console.log(languages);
*/
// 
/*
// qno:21

// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

type user = {
    name: string;
    gender:string;
    age: number;
};
let user = {
    name: "uzma shaheen",
    gender: "female",
    age: 19
};
console.log(user.name);
console.log(user.gender);
console.log(user.age);

*/
// 
/*
// qno:22
// Intentional Error:
// If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct
//the error before closing the program.

const daysInWeek: string[] = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// console.log(daysInWeek{7});       // intentional error

console.log(daysInWeek[6]);
*/
//
/*
// qno:23
// Conditional Tests:
//Write a series of conditional tests. Print a statement describing each test and your prediction
// for the results of each test.

let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

console.log("Is car != 'subaru'? I predict True");
console.log(car != "subaru");

console.log("Is car == 'SUBARU'? I predict True");
console.log(car == "SUBARU");

console.log("Is car != 'Honda city'? I predict False.");
console.log(car != "Honda city");

console.log("Is car.length == 10? I predict True.");
console.log(car.length == 10);

console.log("Is car.length != 2? I predict False.");
console.log(car.length != 2);

console.log("Is car == 'Honda city'? I predict True.");
console.log(car == "subaru");

console.log("Is 34 <= 2 ? I predict True.");
console.log(34 <= 2);

console.log("Is 4 <= 6? I predict True.");
console.log(4 <= 6);

console.log("Is 56 < 34 ? I predict True");
console.log(56 < 34);

*/
//
/*
// qno:24
// More Conditional Tests:
// Tests for equality and inequality with strings:
let name1: string = "uzma";
let name2: string = "shaheen";
if(name1 === "uzma" && name2 === "shaheen") {
    console.log("names are equal");
} else {
    console.log("names are not equal");
}
                                   
if(name1 == name2) {
    console.log("names are equal.");
} else {
    console.log("names are not equal.")
}
// Tests using the lower case function
let myName: string = "uzma";
console.log(myName == "uzma");  // true
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
let num1 : number = 10;
let num2: number = 12;
console.log(num1 == num2); // false
console.log(num1 != num2); // true
console.log(num1 > num2); // false
console.log(num1 >= num2); // false
console.log(num1 >= 10); // true
console.log(num2 <= 12); // true
 
// Tests using "and" and "or" operators
let name_1: string = "shaheen";
let age: number = 18;
if(age == 18 && name_1 == "shaheen") {
    console.log("true")
} else {
    console.log("false")
}
if (name_1 != "shaheen" || name_1 == "shaheen") {
    console.log("true");
} else {
    console.log("false")
}
// Test whether an item is in an array

let my_array : any[] = ["uzma", 4 , "shaheen"]

console.log(Array.isArray(my_array));

// Test whether an item is not in an array

let my_string = "shah";

console.log(Array.isArray(my_string));
*/
// 
/*
// qno:25
// Alien Colors #1:

let alien_color : string = "red";

if(alien_color == "red")

    console.log("you earned 5 points.");

let alien_color_1 : string = "green";

if(alien_color_1 == "red")

console.log("no output");
*/
//
/*
// qno:26
// Alien Colors #2:

let alien_color: string = "Green";

if (alien_color === "Green") {

    console.log("Player just earned 5 points.");

} else {

    console.log("Player just earned 10 points.");
}
*/
// 
/*
// qno:27
// Alien Colors #3:
// Turn your if-else chain
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.

let alienColor1: string = "green";

if(alienColor1 == "green") {
    console.log("player earned 5 points.");
} else if (alienColor1 == "yellow") {
    console.log("player earned 10 points.");
} else if (alienColor1 == "red") {
    console.log("player earned 15 points.");
} else {
    console.log("no one earned the points.");
}
                                
let alienColor2: string = "yellow";
if(alienColor2 == "green") {
    console.log("player earned 5 points.");
} else if (alienColor2 == "yellow") {
    console.log("player earned 10 points.");
} else if (alienColor2 == "red") {
    console.log("player earned 15 points.");
} else {
    console.log("no one earned the points.");
}
                                
let alienColor3: string = "red";
if(alienColor3 == "green") {
    console.log("player earned 5 points.");
} else if (alienColor3 == "yellow") {
    console.log("player earned 10 points.");
} else if (alienColor3 == "red") {
    console.log("player earned 15 points.");
} else {
    console.log("no one earned the points.");
}
                                                      
*/
//
/*
// qno:28
//Stages of Life:
// Write an if-else chain that determines a person’s stage of life.

const personAge: number = 18;

if(personAge < 2 ) {
    console.log("you are a Baby.");
}  else if(personAge < 4 ) {
    console.log("you are a Toddler.");
} else if(personAge < 13 ) {
    console.log("you are a Kid.");
} else if(personAge < 20 ) {
    console.log("you are a Teenager.");
} else if(personAge < 65 ) {
    console.log("you are an adult.");
} else {
    console.log("you are older.");
}
*/
// 
/*
// qno:29
// Favorite Fruit:
// Make an array of your three favorite fruits and call it favorite_fruits.

let favourite_fruits:string[] = ["mango","orange", "apple" ]

if(favourite_fruits.includes("mango")) {

    console.log("you really like banana.");

} else if(favourite_fruits.includes("strawberry")) {

    console.log("strawberry");

} else if(favourite_fruits.includes("kiwi")) {

    console.log("kiwi.");

} else if(favourite_fruits.includes("melon")) {

    console.log("melon");
} else{
    console.log("no favourite fruit.")
}
*/
//
/*
// qno:30
// Hello Admin:
// Make an array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each
// user after they log in to a website. Loop through the array,
//  and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let user_names: string[] = ["Admin", "Ali","Asad","Saad","Raza"]

if(user_names.includes("Admin")) {

    console.log("Hello admin, would you like to see a status report?.");

} else{
    console.log("Hello Eric, thank you for logging in again.")
}
*/
//
/*
// qno:31
//    No Users:
let user_names: string[] = ["Admin", "Ali","Asad","Saad","Raza"]

if(user_names.includes("Admin")) {

    console.log("Hello admin, would you like to see a status report?.");

} else{
    console.log("Hello Eric, thank you for logging in again.")
}
user_names = []

if(user_names.length === 0)

    console.log("We need to find some users!");
*/
//
/*
// qno:32
// Checking Usernames:
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or
// two of the new usernames are also in the current_users list.

let current_users: string[] = ["Ali", "Asad","Saad", "Raza","Zain"]

let new_users: string[] = ["Ali", "Asad","Saad", "Faiz","niaz"]

new_users.forEach(newUser => {

    if(current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {

console.log(` ${newUser} you need to enter a new username.`);

    } else {

        console.log(` ${newUser} is available.`)
    }
})
*/
//
/*
// qno:33
//    Ordinal Numbers:
// ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if(number === 2) {
        suffix = "nd";
    } else if(number === 3) {
        suffix = "rd";
    } else {
        suffix = "th";
    }
    console.log(`${number} ${suffix}`);
})

*/
//                                                        
/*
// qno:34
//        Pizzas:
//   Think of at least three kinds of your favorite pizza. Store these pizza names in an array,
// and then use a for loop to print the name of each pizza.
// Modify your loop to print a sentence using the name of the pizza instead of printing just the
// name of the pizza. For each pizza you should have one line of output containing a simple statement
// like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza, you like and then an
// additional sentence, such as I really love pizza!

let favourite_pizza: string[] = ["White Pizza", "Margherita pizza", "Pepperoni pizza"]

favourite_pizza.forEach(favouritePizza => {

             console.log(`I like ${favouritePizza} very well.`);
})
         console.log(`How much you like ${favourite_pizza}?`);

         console.log(`I really like ${favourite_pizza}.`);

*/
//
/*
// qno:35
//      Animals:
// Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as A dog would make a great pet.
// Add a line at the end of your program stating what these animals have in common. You could print
// a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["cat", "dog", "horse"]

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
})
console.log("Any of these animals would make a great pet! ")
*/
//
/*
// qno:36
//    T-Shirt:
// Write a function called make_shirt() that accepts a size and the text of a message that
// should be printed on the shirt. The function should print a sentence summarizing the
// size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string , message: string) {

    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}

 make_shirt("medium" , "I love coding")


*/
//
/*
// qno:37
//      Large Shirts:
// Modify the make_shirt() function so that shirts are large by default,
// with a message that reads I love TypeScript. Make a large shirt and a medium
// shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "large" , message: string = "I love Typescript.") {
           console.log(`Making a ${size} T-shirt with the message "${message}" printed on it.`)
}
  make_shirt()
  make_shirt("medium")
  make_shirt("small", "Welcome to coding.")
*/
// 
/*
// qno:38
//       Cities:
// Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the
// parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.

function describe_city(city: string , country: string = "Pakistan") {

            consolelog(`${city} is in ${country}`)
}
 describe_city("karachi")

 describe_city("lahore")

 describe_city("Makkah" , "SaudiArabia")
  */
// 
/*
// qno:39
//      City Names:
// Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan" Call your
// function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string , country: string): string {
    return ` ${city} ${country}`
}
console.log(city_country("lahore" , "Pakistan"));
console.log(city_country("Dilli" , "India"));
console.log(city_country("Hong Kong" , "China"));
*/
//
/*
// qno:40
//     Album:
// Write a function called make_album() that builds an Object describing a music album. The function
// should take in an artist name and an album title, and it should return a Object containing these
// two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName: string , albumTitle: string, tracks?: number) {

               return `${artistName} ${albumTitle} ${tracks}`
}
let makeAlbum1 = make_album("Exodus" , "Bonded by Blood", 33)

let makeAlbum2 = make_album("Noor Jahan" , "Madam" , 87)

let makeAlbum3 = make_album("Nazia Hassan" , "Aap jaisa koi")

console.log(makeAlbum1);

console.log(makeAlbum2);

console.log(makeAlbum3);
*/
// 
/*
// qno:41
//     Magicians:
// Make an array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.


let magicians: string[] = ["Harry Houdini", "David Copperfield", "Dynamo","David Blaine"]

function showMagicians(magicians:string[])   {

magicians.forEach(magician => {

    console.log(magician);

})

}

showMagicians(magicians)
*/
//                                                                    
//
/*
// qno:42
//    Great Magicians:
// Start with a copy of your program from Exercise 41. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s
//  name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Dynamo","David Blaine"]

function greet_magicians(magician: string) {

    magicians.forEach(greet => {

        console.log(magician , greet)

    })
}
greet_magicians("hello, how are you?");
*/
//
// qno:43
//   Unchanged Magicians:
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array
// of magicians’ names. Because the original array will be unchanged, return the new array and 
// store it in a separate array. Call show_magicians() with each array to show that you have one
//  array of the original names and one array with the Great added to each magician’s name.
let magicianNames = ["Harry Houdini", "David Copperfield", "Dynamo"];
// make a copy of magicians names
let magiciansNames1 = [...magicianNames];
function showMagicians(greet) {
    let withGreetings = "";
    magicianNames.forEach(magicianName => {
        withGreetings += `${greet} ${magicianName}\n`;
    });
    return withGreetings;
}
let myGreetings = showMagicians("Hello");
let makeArray = myGreetings.split('\n');
//    console.log(myGreetings);    
console.log(makeArray);
// original array
console.log(magicianNames);
//
/*
// qno:44
// Sandwiches:
// Write a function that accepts an array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it
// should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.

 function sandwiches(...items: string []) {
          return `I want sandwich ${items}`
 }
 let ingredients1 = sandwiches("ham" , "cheese" , "mayoneize")
 let ingredients2 = sandwiches("salt" , "pepper")
 let ingredients3 = sandwiches("onion")

console.log(ingredients1);
console.log(ingredients2);
console.log(ingredients3);
*/
//
/*// qno:45
//      Cars:
// Write a function that stores information about a car in an Object. The function should
// always receive a manufacturer and a model name. It should then accept an arbitrary number
// of keyword arguments. Call the function with the required information and two other name
// -value pairs, such as a color or an optional

function makeCar(manufacturer: string, model: string, ...options: [string, any][]): object {
          let car = {manufacturer , model} ;
          options.forEach(([key , value]) => key = value);
          return car;
}
console.log(makeCar("Toyota" , "Corolla" , ["color", "red"],["year", "2024"]));
console.log(makeCar("Ford" , "Fiesta" , ["color", "black"],["sunroof", "true"]));
*/
// 
/*
       // another method
function makeCar(manufacturer: string, model: string, ...additionalinfo: [string, any][]): object {
     const car = {manufacturer , model}
     return car;

}
console.log(makeCar("Toyota" , "Corolla" , ["color", "red"],["year", "2024"]));
console.log(makeCar("Ford" , "Fiesta" , ["color", "black"],["sunroof", "true"]));
*/ 
