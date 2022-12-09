
// Get data and return it as a string
function getData(){
    const fs = require('fs');
    try {
        var data = fs.readFileSync('data.txt', 'utf-8');
    } catch (err) {
        console.error(err);
    }
    return data;
}

// Split the data by new line
let splitData = getData().split(/\r?\n/);

let firstAssignment;
let secondAssignment;
let start1, end1;
let start2, end2;
let numberOfOverlaps = 0;


function displayVisualRepresenatation(end, start){
    let temp;

    temp = "";
    for (let i=1; i<100; i++) {
        if (i<start){
            temp += "..";
        }
        if (i>=start && i<=end) {
            temp += String(i);
            if (i<=9){ temp += ".";}
        }
        if (i>end) {
            temp += "..";
        }
    }
    console.log(temp);
}

function checkOverlap(end1, start1, end2, start2){
    if ((start1>=start2) && (end1<=end2) || (start2)>=(start1) && (end2<=end1)) {
        console.log("overlap");
        numberOfOverlaps++;
    }
}

// For every pair split them and assign 1 and 2 part into different variables
for (let pair of splitData){
    firstAssignment = pair.split(/,/);

    secondAssignment = firstAssignment[1];
    
    start2 = secondAssignment.split(/-/)[0];
    end2 = secondAssignment.split(/-/)[1];
    
    firstAssignment = firstAssignment[0];

    start1 = firstAssignment.split(/-/)[0];
    end1 = firstAssignment.split(/-/)[1];

    displayVisualRepresenatation(end1, start1);

    displayVisualRepresenatation(end2, start2);

    checkOverlap(parseInt(end1), parseInt(start1), parseInt(end2), parseInt(start2));

    console.log("----------------------");
    //console.log(start);
}

console.log(numberOfOverlaps);