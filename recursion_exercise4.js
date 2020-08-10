function triangleNumber(nth){
    let triangularNum = 0;
    let num = nth;
    let ticks = 0;

    if(nth === 1){
        return 1;
    }else{
	while(num > 0){
	    triangularNum = triangularNum + num;
	    num--;
	    ticks++;
	}
    }

    return {results: triangularNum, ticks}
}

let triangle = 9;
console.log(triangleNumber(triangle));

//Linear Time: tick count increases proportionate to the function input





/*
Recursion Version


function triangleNumber(nth){
        if(nth === 1){
                return 1;
        }

        return nth + triangleNumber(nth-1);
}


//Linear time: the number of times we need to execute the operations increase based on the input being passed in

*/
