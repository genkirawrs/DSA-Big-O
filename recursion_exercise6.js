function fibonacciSequence(fibNum){
    let fibSeq = [0,1];
    let fibTrack = [1];
    let ticks = 0;

    if(fibNum === 1){
        return 1;
    }else{
	for(let i = 0; i < fibNum-1; i++){
	    let newAdd = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length - 2];
	    fibTrack.push(newAdd);
	    fibSeq.push(newAdd);
	    ticks++;
	}
    }

    return {results: fibTrack, ticks};

}


let result = fibonacciSequence(7);

console.log(result);

//I think this would be an example of Linear Time. The tick count increases proportionally to the size of the number given as input



/*
Recursive version:

function fibonacciSequence(fibNum, seq){
    let fibSeq = seq || [0,1];


    if(fibNum === 1){
        return 1;
    }else if(fibNum === fibSeq.length){
        let fibAdd = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(fibAdd);
        return fibSeq;
    }else{
        let fibAdd = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(fibAdd);
        return fibonacciSequence(fibNum, fibSeq);
    }


}
//I believe the recursive function above would be considered Linear Time because each operation is constant time and the number of operations increased based on how far in to the Fibonacci sequence we need to go
*/




