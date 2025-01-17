const countElements = (tagName) => {
    const elements = document.getElementsByTagName(tagName);
    return elements.length;
};

const nameElemet = prompt("Nhap the can tra ve so luong: ");

const ul = document.createElement("ul");

if (nameElemet) {
    console.log(countElements(nameElemet)); // 10
}

for (let i = 0; i < countElements(nameElemet); i++) {
    const li = document.createElement("li");

    li.innerText = nameElemet;
    ul.appendChild(li);
}

document.body.appendChild(ul);

const paragraph = document.createElement("p");

paragraph.textContent = `Số lượng thẻ ${nameElemet} là: ${countElements(
    nameElemet
)} phần tử `;

document.body.appendChild(paragraph);

// console.log(countElements(nameElemet)); // 5
