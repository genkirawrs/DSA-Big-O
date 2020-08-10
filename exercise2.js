function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}

The Big O Notation would be constant time - the function accepts one value, and no matter the size all it cares about is checking is the modulus is 0 and returns true/false accordingly.
