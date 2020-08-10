function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

I think this would be an example of constant time, regardless of how large the array is, and even though we we end up doing 4 operations (math.random, finding the array length, math.floor, and locating the value of the element) to complete the task, no matter how large the array is we'll never exceed those 4 operations
