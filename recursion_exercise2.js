function powerCalculator(base, exponent){
	let result = base;
	let exp = exponent;
	let ticks = 0;

	if(exponent < 0){
	    return 'exponent should be >= 0';
	}

        if(exponent === 1) {
                return base;
        }else if(exponent === 0){
                return 0;
        }else{
	    while(exp > 0){
		result = result * base;
		exp--;
		ticks++;
	    }
	}

        return {result: result,ticks};
}

let powerCal = powerCalculator(10,2);
console.log(powerCal);

powerCal = powerCalculator(10,-2);
console.log(powerCal);

powerCal = powerCalculator(10,3);
console.log(powerCal);

//Linear time: the number of ticks increment once per increment of the exponent value



/*
Recursive Version

function powerCalculator(base, exponent){
        if(exponent < 0){
                return 'exponent should be >= 0';
        }else if(exponent === 1) {
                return base;
        }else if(exponent === 0){
                return;
        }

        return base * powerCalculator(base, exponent - 1);
}

// Linear Time: depending on the size of the exponent, we'd have to recursively call the function that many times

*/
