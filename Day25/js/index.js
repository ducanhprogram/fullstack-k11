Object.prototype.filter2 = function (callback) {
    let newArr = [];

    if (typeof callback !== "function") {
        return;
    }
    // console.log(this);
    for (let i = 0; i < this.length; i++) {
        if (!(i in this)) {
            continue;
        }
        let check = callback(this[i], i, this);

        if (check) {
            newArr[newArr.length] = this[i];
        }
    }
    return newArr;
};

const arr = [1, 2, 3, 4, 5];

const result = arr.filter2((value) => {
    console.log(value);
    return value % 2 !== 0;
});

console.log(result);
