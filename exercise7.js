function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

What the function does:
1. received a value
2. while i is <= num
3. check if i is equal to 1, push 0 to array
4. otherwise check if i is equal to 2, push 1 to the array
5. otherwise sum up the values of the elements 2 and 3 spots behind your current spot in the array and push the sum to array
6. return array

I think this is Linear Time, depending on the value of num, the number of operations executed will increase based on num's value.

