let keyword = "JavaScript";

let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

const fixContent = (content) => {
    content = content.replace(/([.,;:!?])(?!\s)/g, "$1 ");
    return content;
};

let fixedContent = fixContent(jsContent);

// Highlight từ khóa
let output = "";
let count = 0;
const printHighlight = (content, keyword) => {
    let position = content.toLowerCase().indexOf(keyword.toLowerCase());
    while (position !== -1) {
        count++;
        output +=
            content.slice(0, position) +
            `<span>${content.slice(
                position,
                position + keyword.length
            )}</span>`;
        content = content.slice(position + keyword.length);
        position = content.toLowerCase().indexOf(keyword.toLowerCase());
    }
    output += content;
    return output;
};

let result = printHighlight(fixedContent, keyword); // Chèn thẻ HTML vào nội dung đã sửa

// In ra HTML
let html = `
    <p>Tìm kiếm từ khóa <b>${keyword}</b></p>
    <p>${result}</p>
    <p>Đã tìm thấy ${count} kết quả với từ khóa <b>${keyword}</b></p>
`;

document.write(html);
