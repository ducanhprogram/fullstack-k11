const menu = [
    {
        id: 1,
        name: "Home",
        parentId: 0,
    },
    {
        id: 2,
        name: "About",
        parentId: 0,
    },
    {
        id: 3,
        name: "News",
        parentId: 0,
    },
    {
        id: 4,
        name: "Products",
        parentId: 0,
    },
    {
        id: 5,
        name: "Contact",
        parentId: 0,
    },
    {
        id: 6,
        name: "T-Shirt",
        parentId: 4,
    },
    {
        id: 7,
        name: "Jean",
        parentId: 4,
    },
    {
        id: 8,
        name: "Skirt",
        parentId: 4,
    },
];

const listMenu = (menu, parentId = 0) => {
    if (!Array.isArray(menu)) {
        return;
    }
    const ul = document.createElement("ul");
    menu.forEach(function (item) {
        // console.log(item);

        if (item.parentId === parentId) {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = "#";
            a.textContent = item.name;

            li.appendChild(a);
            // console.log(li);

            const childrenUl = listMenu(menu, item.id);

            console.log(childrenUl);

            if (childrenUl.children.length > 0) {
                li.appendChild(childrenUl);
                childrenUl.style.fontSize = "20px";
            }

            ul.appendChild(li);
        }
    });
    return ul;
};

console.log(listMenu(menu));

const mainMenu = listMenu(menu);

mainMenu.id = "main-menu";

mainMenu.style.fontSize = "24px";

document.body.appendChild(mainMenu);

//C2 test:

// const createMenu = (menuItems, parentId = 0) => {
//     const filteredItems = menuItems.filter((item) => {
//         // console.log(item);
//         return item.parentId === parentId;
//     });
//     const ul = document.createElement("ul");
//     filteredItems.forEach(function (item) {
//         console.log(item);
//         const li = document.createElement("li");
//         const a = document.createElement("a");

//         a.href = "#";
//         a.textContent = item.name;

//         li.appendChild(a);

//         const childUl = createMenu(menuItems, item.id);

//         if (childUl.children.length > 0) {
//             li.appendChild(childUl);
//         }

//         ul.appendChild(li);
//     });
//     return ul;
// };

// const mainMenu = createMenu(menu);

// mainMenu.id = "main-menu";

// document.body.appendChild(mainMenu);

// console.log(mainMenu);
