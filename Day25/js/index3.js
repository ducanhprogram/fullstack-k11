Array.prototype.reduce2 = function (callback, initialValue) {
    if (typeof callback !== "function") {
        return;
    }

    let accumulator = initialValue;
    let hasInitialValue = initialValue !== undefined;
    // console.log(hasInitialValue);

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (!hasInitialValue) {
                accumulator = this[i];
                hasInitialValue = true;
            } else {
                accumulator = callback(accumulator, this[i], i, this);
            }
        }
    }

    if (!hasInitialValue) {
        return "Reduce of empty array with no initial value";
    }

    return accumulator;
};

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.reduce2((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(result1); // 15

// Sample 2

const arr2 = [];

const result2 = arr2.reduce2((accumulator, value) => {
    return accumulator + value;
});

console.log(result2); // Error: Reduce of empty array with no initial value

// Sample 3

const arr3 = [];

const result3 = arr3.reduce2((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(result3); // 0
