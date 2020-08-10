function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

This would be an example of Linear Time O(n), The run time is directly proportional to the size of the array provided. the number of operations needed will increase based on the size of the array. There are 3 constant time operations that need to happen with each loop (check array.length, access element, and save new value to element) and the number of operations needed will increase according to how many elements are in the array.
