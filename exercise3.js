function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}


This would be an example of Polynomial Time O(n^2). Where the number of elements in arr1 and in arr2 will impact how many operations will need to execute in roder to complete the task - which is to find the first matching element between the two arrays. Because for each element in arr1, we will need to loop through arr2 and compare the two values in order to return true or move on to the next element and loop through arr2 again to see if there is a match.
