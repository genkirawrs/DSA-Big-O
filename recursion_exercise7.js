function factoral(num){
    let factoral = 1;
    let ticks = 0;

        if(num < 0){
                return 'number should be >= 0';
        }else {
	    for(let i = num; i >= 1; i--){
		factoral = factoral * i;
		ticks++;
	    }    
	}
        return {results: factoral, ticks};
}

console.log(factoral(5));

//I would say the above function would be Linear time b/c the number of ticks increases in proportion to the size of the input's value




/*
Recursive Version:

function factoral(num){
        if(num < 0){
                return 'number should be >= 0';
        }else if(num === 0){
                return 1;
        }
        return num * factoral(num-1);
}

console.log(factoral(5));

//The Big O of this recursive function would be Linear, since the number of times the the function calls itself is based on how large the input is

*/


