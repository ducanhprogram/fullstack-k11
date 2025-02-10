const categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
        slug: "chuyen-muc-1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
        slug: "chuyen-muc-2",
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
        slug: "chuyen-muc-3",
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
        slug: "chuyen-muc-2-1",
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
        slug: "chuyen-muc-2-2",
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
        slug: "chuyen-muc-2-3",
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
        slug: "chuyen-muc-3-1",
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
        slug: "chuyen-muc-3-2",
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
        slug: "chuyen-muc-3-3",
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
        slug: "chuyen-muc-2-2-1",
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
        slug: "chuyen-muc-2-2-2",
    },
];

const createMenu = function (categories, parentId) {
    const ul = document.createElement("ul");

    categories
        .filter((item) => {
            return item.parent === parentId;
        })
        .forEach((item) => {
            console.log(item);
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = `/${item.slug}`;
            a.textContent = item.name;
            li.append(a);

            const children = createMenu(categories, item.id);

            if (children.children.length) {
                li.appendChild(children);
            }
            ul.appendChild(li);
        });

    return ul;
};

document.querySelector("#menu").appendChild(createMenu(categories, 0));
