const fs = require('fs');

try {
    var data = fs.readFileSync('data.txt', 'utf-8');
} catch (err) {
    console.error(err);
}

//data = "CjhshBJCSrTTsLwqwqwb\nGtmnFHlDfcpHbLZjtTTRLWwb\nfDfNHHjVFNvvrvVBJJdS";

let backpacks = [];
let firstCompartment, secondCompartment;
let duplicateItems = [];
let score = 0;

backpacks = data.split(/[\r?\n]+/);

for (let backpack of backpacks){
    //console.log(backpack.length);
    //console.log(backpack.substring(0, backpack.length/2));
    //console.log(backpack.substring((backpack.length/2), backpack.length));
    firstCompartment = backpack.substring(0, backpack.length/2);
    secondCompartment = backpack.substring((backpack.length/2), backpack.length);

    for (let item of firstCompartment) {
        if (secondCompartment.search(item) != -1){
            //console.log("hmm");
            duplicateItems.push(item);
        }
    }
}

//console.log(duplicateItems);
//console.log('z'.charCodeAt(0) - 96);

for (let item of duplicateItems){
    if (item == item.toLowerCase()){
        score += item.charCodeAt(0) - 96;
        console.log(item);
        console.log(item.charCodeAt(0) - 96);
    } else {
        score += item.charCodeAt(0) - 38;
        console.log(item);
        console.log(item.charCodeAt(0) - 38);
    }
}

console.log(score);

