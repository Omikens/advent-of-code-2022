const fs = require('fs');

try {
  var data = fs.readFileSync('data.txt', 'utf8');
} catch (err) {
  console.error(err);
}

var stringArray = data.split(/\s/);

let elvesCaloriesArray = [];
stringArray.reduce((totalCalories, snack) => {
    totalCalories = +totalCalories + +snack;
    if (snack === ''){
        elvesCaloriesArray.push(totalCalories);
        totalCalories = 0; 
    }
    return totalCalories;
});

let maxCaloriesValue = Math.max(...elvesCaloriesArray);
let indexOfMaxCaloriesValue = elvesCaloriesArray.indexOf(maxCaloriesValue);

console.log(`Max value of calories carried by one elf: ${maxCaloriesValue}`);
console.log(`Index of elf that carries max value: ${indexOfMaxCaloriesValue}`);

let sumMaxThreeValues = 0;
for (i = 1; i <= 3; i++){
    sumMaxThreeValues += maxCaloriesValue;
    elvesCaloriesArray.splice(indexOfMaxCaloriesValue, 1);
    maxCaloriesValue = Math.max(...elvesCaloriesArray);
    indexOfMaxCaloriesValue = elvesCaloriesArray.indexOf(maxCaloriesValue);
};
console.log(`Sum of three max calories values carried by elves: ${sumMaxThreeValues}`);
