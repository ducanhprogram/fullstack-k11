const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
];

const removeDuremoveDuplicate = (arr) => {
    return arr.reduce((accu, curr) => {
        if (!accu.includes(curr)) {
            accu.push(curr);
        }
        return accu;
    }, []);
};

const result = removeDuremoveDuplicate(fruits);

console.log(result);
