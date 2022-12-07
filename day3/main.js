const fs = require('fs');

try {
    var data = fs.readFileSync('data.txt', 'utf-8');
} catch (err) {
    console.error(err);
}

//data = "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw\nCrZsJsPPZsGzwwsLwLmpwMDw\nCrZsJsPPZsGzwwsLwLmpwMDw";

let backpacks = [];
let firstCompartment, secondCompartment;
let duplicateItems = [];
let score = 0;

let noRepetitions = new Set ();

let trippleBackpack = [];
let trippleBackpackCounter = 1;
let trippleRepetitionItemList = [];
let trippleRepetitionScore = 0;
let noRepetitions2 = new Set ();

backpacks = data.split(/[\r?\n]+/);





for (let backpack of backpacks){

    noRepetitions.clear();
    noRepetitions2.clear();
    firstCompartment = backpack.substring(0, backpack.length/2);
    secondCompartment = backpack.substring((backpack.length/2), backpack.length);

    trippleBackpack.push(backpack);
    if (trippleBackpackCounter == 3){
        trippleBackpackCounter = 1;
        for (let item of trippleBackpack[0]) {
            //console.log(item);


            if (trippleBackpack[1].search(item) != -1){
                if (trippleBackpack[2].search(item) != -1){
                    noRepetitions2.add(item);
//                    trippleRepetitionItemList.push(item);
                    //console.log(item);
                }
            }



        }
        for (let item of noRepetitions2) {trippleRepetitionItemList.push(item);}
        //console.log(noRepetitions2);
        //console.log(trippleBackpack);
        //console.log(trippleRepetitionItemList);



        trippleBackpack = [];
    } else {
        trippleBackpackCounter++;
    }

    for (let item of firstCompartment) {
        if (secondCompartment.search(item) != -1){
            if (secondCompartment.search(item) != -1){
                
            }
            //console.log(item);
            
            noRepetitions.add(item);
        }
    }
    for (let item of noRepetitions) {duplicateItems.push(item);}
}

//console.log(duplicateItems);
//console.log(noRepetitions);

for (let item of duplicateItems){
    if (item == item.toLowerCase()){
        score += item.charCodeAt(0) - 96;
    } else {
        score += item.charCodeAt(0) - 38;
    }
}

for (let item of trippleRepetitionItemList){
    if (item == item.toLowerCase()){
        trippleRepetitionScore += item.charCodeAt(0) - 96;
    } else {
        trippleRepetitionScore += item.charCodeAt(0) - 38;
    }
}


console.log(duplicateItems);
console.log(trippleRepetitionItemList);

console.log(score);

console.log(trippleRepetitionScore);




