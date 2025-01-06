const categories = [
    {
        id: 1,
        name: "Electronics",
        children: [
            {
                id: 2,
                name: "Laptops",
                children: [
                    {
                        id: 3,
                        name: "Apple",
                    },
                    {
                        id: 4,
                        name: "Dell",
                    },
                ],
            },
            {
                id: 5,
                name: "Headphones",
            },
        ],
    },
    {
        id: 6,
        name: "Books",
        children: [
            {
                id: 7,
                name: "Fiction",
                children: [
                    {
                        id: 8,
                        name: "Thrillers",
                    },
                    {
                        id: 9,
                        name: "Mystery",
                    },
                ],
            },
            {
                id: 10,
                name: "Non-Fiction",
            },
        ],
    },
];

const flattenCategories = (arr, parentId = 0) => {
    let newArr = [];

    if (!Array.isArray(arr)) {
        return "Không phải là mảng";
    }

    arr.forEach((item) => {
        // console.log(item);
        newArr.push({ id: item.id, name: item.name, parentId: parentId });

        if (item.children) {
            newArr = newArr.concat(flattenCategories(item.children, item.id));
        }
    });
    return newArr;
};

const result = flattenCategories(categories);
console.log(result);
