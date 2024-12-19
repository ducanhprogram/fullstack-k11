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

const flattenCategories = (categories, level = 0) => {
    var flatArray = [];

    // console.log(categories);

    for (const category of categories) {
        flatArray.push({ id: category.id, name: category.name, level });

        if (category.children) {
            flatArray = flatArray.concat(
                flattenCategories(category.children, level + 1)
            );
        }
    }
    return flatArray;
};

console.log(flattenCategories(categories));

/*

[
    { id: 1, name: "Electronics", children: [...] },
    { id: 6, name: "Books", children: [...] }
]
*/

const getCategoryName = (categories, categoryId) => {
    const category = categories.find((item) => {
        return item.id === categoryId;
    });

    return category ? category.name : null;
};

const flattenedCategories = flattenCategories(categories);

console.log(getCategoryName(flattenedCategories, 3)); // Output: "Apple"
console.log(getCategoryName(flattenedCategories, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(flattenedCategories, 99));
