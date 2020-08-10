function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}


//this function returns true for prime numbers. I think this would be an example of exponential time? In the worst case scenario where we're given a large prime value we'd have to loop through a large number of times in order to finally reach that number and return true

