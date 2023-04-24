const numbers = ['one', 'two', 'three'];

const newNumbers = numbers.map(function (number) {
  return `<li>${number}</li>`;
});

document.getElementById("myList").innerHTML = newNumbers.join();




const grades = ['A', 'B', 'C'];

function convertGradeToPoints (grade) {
  let points = 0;
  if (grade === 'A') {
    points = 4;
  } else if (grade === 'B'){
    points = 3;
  }

  return points;

}

const gpaPoints = grades.map(convertGradeToPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = fruits.filter(function (fruit) {
  return fruit.length < 6;
});

const array1 = [12, 34, 21, 54];

const luckyNumber = 21;

let luckyIndex = array1.indexOf(luckyNumber);