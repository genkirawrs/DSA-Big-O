function stringSplitter(stringToSplit, splitOn){
    let str = stringToSplit.trim();
    let wordList = [];
    let splitIndex = str.indexOf(splitOn);
    let pos = 0;
    let ticks = 0;

    if(splitIndex !== -1){
	let snippet = '';
	for(let pos = 0;  pos < str.length; pos++){
	    ticks++;
	    if( str[pos] === splitOn && snippet.length > 0){
		wordList.push(snippet);
		snippet = ''
	    }else if( str[pos] !== splitOn ){
		snippet = snippet + str[pos];
	    }
	}
	
	if(snippet.length > 0){
	    wordList.push(snippet);
	}
    }else{
        wordList.push(str);
    }


    return {result: wordList, ticks};
}

let stringToSplit = '08/04/2020';

let result = stringSplitter(stringToSplit,'/');
console.log(result);

//This would be a Linear Time where the ticks increase by 1 for each character in the string that needs to be tested



/*
Recursive Function

function stringSplitter(stringToSplit, splitOn, words){
    let str = stringToSplit.trim();
    let wordList = words || [];
    let splitIndex = str.indexOf(splitOn);

    if(splitIndex !== -1){
        wordList.push(str.substr(0,splitIndex));
        return stringSplitter(str.slice(splitIndex+1), splitOn, wordList);
    }else{
        wordList.push(str);
        return wordList;
    }

}


// I think this is a linear time recursive function. all the operations are constant time so the only increase would be dependent upon the size of the string that needs splitting and how many time the character occurs in the string
*/
