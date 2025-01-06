const categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
    },
];

const convertNested = (arr, level = 0) => {
    if (!Array.isArray(arr)) {
        return "Không phải là mảng";
    }

    let output = [];

    let children = [];
    arr.forEach((item) => {
        // console.log(item);
        if (item.parent === level) {
            children = convertNested(arr, item.id);

            if (children.length > 0) {
                item.children = children;
            }
            delete item.parent;
            output.push(item);
        }
    });
    return output;
};

const categoriesNess = convertNested(categories);

console.log(categoriesNess);
