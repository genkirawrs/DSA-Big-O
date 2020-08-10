function countSheep(totalSheep) {
   let ticks = 0;
   while(totalSheep > 0){
	console.log(totalSheep+": Another sheep jumps over the fence\n");
	totalSheep--;
        ticks++;
   }
   console.log('All sheep jumped over the fence');
   return ticks;
}

let ticks = countSheep(3);
console.log(ticks+" ticks");

//Linear Time: ticks are directly linked to size of input



/*
Recursive Version

function countSheep(totalSheep) {
    // Base case
    if (totalSheep === 0) {
        console.log('All sheep jumped over the fence');
        return;
    }
    // General case
    console.log(totalSheep+": Another sheep jumps over the fence\n");
    countSheep(totalSheep - 1);

}

//Linear time

*/
