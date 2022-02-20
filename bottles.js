var totalBottles = 99;

function sing(bottles) {
	if (bottles > 0) {
        console.log(`${bottles} ${bottles > 1 ? 'bottles' : 'bottle'} of beer on the wall, ${bottles} ${bottles > 1 ? 'bottles' : 'bottle'} of beer.\nTake one down, and pass it around, ${bottles-1} ${bottles-1 > 1 || bottles-1 === 0 ? 'bottles' : 'bottle'} of beer on the wall.`);
    } else {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store, buy some more. 99 bottles of beer on the wall.`);
    }
}

while (totalBottles >= 0) {
  sing(totalBottles);
  totalBottles--;
}