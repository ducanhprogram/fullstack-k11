const categories = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        children: [
            {
                id: 2,
                name: "Laptops",
                slug: "laptops",
                children: [
                    {
                        id: 3,
                        name: "Apple",
                        slug: "apple",
                    },
                    {
                        id: 4,
                        name: "Dell",
                        slug: "dell",
                    },
                ],
            },
            {
                id: 5,
                name: "Headphones",
                slug: "headphones",
            },
        ],
    },
    {
        id: 6,
        name: "Books",
        slug: "books",
        children: [
            {
                id: 7,
                name: "Fiction",
                slug: "fiction",
                children: [
                    {
                        id: 8,
                        name: "Thrillers",
                        slug: "thrillers",
                    },
                    {
                        id: 9,
                        name: "Mystery",
                        slug: "mystery",
                    },
                ],
            },
            {
                id: 10,
                name: "Non-Fiction",
                slug: "non-fiction",
            },
        ],
    },
];

function createMenu(categories, parentElement, parentSlug = "") {
    const ul = document.createElement("ul");
    ul.className = parentSlug ? "submenu" : "menu";

    categories.forEach((category) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        console.log(category);
        a.textContent = category.name;
        a.href = `${parentSlug}${category.slug}`;

        li.appendChild(a);

        if (category.children) {
            createMenu(category.children, li, `${parentSlug}${category.slug}/`);
        }

        ul.appendChild(li);
    });
    parentElement.appendChild(ul);
}

const menuContainer = document.querySelector(".menu-container");

createMenu(categories, menuContainer);
