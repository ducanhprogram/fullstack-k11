const cart = [
    {
        id: 1,
        name: "T-Shirt",
        price: 100000,
        quantity: 2,
        hotSale: false,
    },
    {
        id: 2,
        name: "Jean",
        price: 200000,
        quantity: 1,
        hotSale: false,
    },
    {
        id: 3,
        name: "Skirt",
        price: 150000,
        quantity: 3,
        hotSale: true,
    },
    {
        id: 4,
        name: "Shirt",
        price: 120000,
        quantity: 2,
        hotSale: false,
    },
    {
        id: 5,
        name: "Jacket",
        price: 250000,
        quantity: 1,
        hotSale: true,
    },
];

const tableCart = document.querySelector(".table-cart");

const table = document.createElement("table");

const tbody = document.createElement("tbody");

const thead = document.createElement("thead");

const tfoot = document.createElement("tfoot");

const headerRow = document.createElement("tr");
const header = ["Tên sản phẩm", "Đơn giá", "Số lượng", "Thành tiền"];

header.forEach(function (item) {
    const th = document.createElement("th");
    th.textContent = item;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);

// console.log(thead);

let totalOrder = 0;

const renderOrder = (cart) => {
    if (!Array.isArray(cart)) {
        console.error("Invalid data");
    }
    cart.forEach(function (item) {
        console.log(item);

        // console.log(item);
        const row = document.createElement("tr");

        if (item.hotSale) {
            row.style.color = "red";
        }
        const tdName = document.createElement("td");
        tdName.textContent = item.name;
        row.appendChild(tdName);

        const tdPrice = document.createElement("td");
        tdPrice.textContent = item.price;
        row.appendChild(tdPrice);

        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = item.quantity;
        row.appendChild(tdQuantity);

        const tdTotalCart = document.createElement("td");

        const totalCart = item.price * item.quantity;

        tdTotalCart.textContent = totalCart;

        row.appendChild(tdTotalCart);

        totalOrder += totalCart;

        tbody.appendChild(row);
    });

    return totalOrder;
};

console.log(totalOrder);

console.log(renderOrder(cart));

const footRow = document.createElement("tr");
const totalValueCell = document.createElement("td");

const totalOrderCell = document.createElement("td");

totalValueCell.setAttribute("colspan", "3");
totalValueCell.textContent = "Tổng tiền";

totalOrderCell.textContent = totalOrder;

footRow.appendChild(totalValueCell);
footRow.appendChild(totalOrderCell);

tfoot.appendChild(footRow);

table.border = "1";
table.cellPadding = "5";
table.cellSpacing = "0";

table.appendChild(thead);
table.appendChild(tbody);
table.appendChild(tfoot);

tableCart.appendChild(table);

// C2:

// const listCart = structuredClone(cart);

// const totalListCart = listCart.reduce((prevValue, currentValue) => {
//     // console.log(prevValue, currentValue);

//     const totalProduct = currentValue.price * currentValue.quantity;
//     currentValue.totalProduct = totalProduct;
//     return prevValue + currentValue.price * currentValue.quantity;
// }, 0);

// console.log(totalListCart);

// let content = "";

// const renderOrder = (cart) => {
//     cart.forEach(function (item) {
//         const itemProduct = `<tr>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td>${item.quantity}</td>
//             <td>${item.totalProduct}</td>
//         </tr>`;

//         content += itemProduct;
//     });
//     return content;
// };

// // console.log(renderOrder(listCart));

// document.body.innerHTML = `<table>
//   <thead>
//     <tr>
//       <th>Tên sản phẩm</th>
//       <th>Đơn giá</th>
//       <th>Số lượng</th>
//       <th>Thành tiền</th>
//     </tr>
//   </thead>
//   <tbody>
//     ${renderOrder(listCart)}
//   </tbody>
//   <tfoot>
//     <tr>
//       <td colspan="3">Tổng tiền</td>
//       <td>${totalListCart}</td>
//     </tr>
//   </tfoot>
// </table>`;
