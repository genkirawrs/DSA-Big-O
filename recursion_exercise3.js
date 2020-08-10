function reverseString(string){
    let reverseString = '';
    ticks = 0;

        if(string.length === 1){
                return string[0];
        }
	for(let i = string.length-1; i >= 0; i--){
		reverseString = reverseString + string[i];
		ticks++;		
	}

     return {results: reverseString, ticks};
}

let string = "derp";

let reversed = reverseString(string);
console.log(reversed);

// I would call this a Linear Time algorithm, depending on the string, the number of times the for loop runs (and ticks increase) accordingly


/*
Recursive version

function reverseString(string){
        if(string.length === 1){
                return string[0];
        }
        return string[string.length-1] + reverseString(string.slice(0,-1));
}

//Linear time: the amount of effort it takes to process depends on the length of the string

*/
