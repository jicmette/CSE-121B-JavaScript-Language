/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const myName = "Israel Carmona";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').innerHTML = (myName);

// Step 3: declare and instantiate a variable to hold the current year

const currentY = 2022;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = (currentY);

// Step 5: declare and instantiate a variable to hold the name of your picture

const imgMe = document.createElement('img');
imgMe.setAttribute('alt', 'Me');

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', 'images/me-modified.png');

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

const foodFav = ['Spaghetti', ' Gnocchi', ' Barbecue',];
foodFav.join(',');

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').textContent = (foodFav);
// Step 3: declare and instantiate a variable to hold another favorite food

const anotherFood = ' Tacos';

// Step 4: add the variable holding another favorite food to the favorite food array

const foodTwo = foodFav.concat(anotherFood);

// Step 5: repeat Step 2

document.querySelector('#food').textContent = (foodTwo);

// Step 6: remove the first element in the favorite foods array

foodTwo.shift();

// Step 7: repeat Step 2

document.querySelector('#food').textContent = (foodTwo);

// Step 8: remove the last element in the favorite foods array

foodTwo.pop();

// Step 7: repeat Step 2

document.querySelector('#food').textContent = (foodTwo);

