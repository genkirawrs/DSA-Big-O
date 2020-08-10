function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

This would be an example of Linear Time - the number of operations needed will increase depending on how large the array being passed in is. In the worst case scenario where the matching item is located at the end of the array, if the array has 5 elements and another array has 10, it will take twice as long for the array of length 10 compared to array of length 5.
