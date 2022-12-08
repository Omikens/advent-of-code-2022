
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
let start, end;


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

// For every pair split them and assign 1 and 2 part into different variables
for (let pair of splitData){
    firstAssignment = pair.split(/,/);
    secondAssignment = firstAssignment[1];
    
    start = secondAssignment.split(/-/)[0];
    end = secondAssignment.split(/-/)[1];

    
    displayVisualRepresenatation(end, start);

    firstAssignment = firstAssignment[0];

    start = firstAssignment.split(/-/)[0];
    end = firstAssignment.split(/-/)[1];

    displayVisualRepresenatation(end, start);

    console.log("----------------------");
    //console.log(start);
}