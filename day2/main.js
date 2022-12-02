const fs = require('fs');

try {
    var data = fs.readFileSync('data.txt', 'utf-8');
} catch (err) {
    console.error(err);
}

let playerMoveSwitch = 'enemy';
let myScore = 0;
let enemyMove;

for (move of data){
    if (move != ' ' && move != '\n'){
        if (playerMoveSwitch == 'enemy'){
            console.log(`Enemy move: ${move}`);
            enemyMove = move;
            playerMoveSwitch = 'me';
        } else {
            console.log(`My move: ${move}`);
            switch (move){
                case 'X':
                    console.log(1);
                    myScore += 1;
                    break;
                case 'Y':
                    console.log(2);
                    myScore += 2;
                    break;
                case 'Z':
                    console.log(3);
                    myScore += 3;
                    break;
            }
            switch (true){
                case (enemyMove == 'A' && move == 'X'):
                case (enemyMove == 'B' && move == 'Y'):
                case (enemyMove == 'C' && move == 'Z'):
                    console.log('draw');
                    myScore += 3;
                    break;
                case (enemyMove == 'A' && move == 'Y'):
                case (enemyMove == 'B' && move == 'Z'):
                case (enemyMove == 'C' && move == 'X'):
                    console.log('win');
                    myScore += 6;
                    break;
                case (enemyMove == 'A' && move == 'Z'):
                case (enemyMove == 'B' && move == 'X'):
                case (enemyMove == 'C' && move == 'Y'):
                    console.log('lose');
                    myScore += 0;
                    break;
            }
            playerMoveSwitch = 'enemy';
        }
    }
}
console.log(`My final score: ${myScore}`);