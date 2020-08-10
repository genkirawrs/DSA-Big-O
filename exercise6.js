function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

This would be an example of Polynomial Time. Even though we have only 1 input array, for each element in the array we're looping over and console logging each pair of values within that array after the element's position. 
