const data = [];

//Cú pháp viết tắt {key}
// Khi tên biến và tên thuộc tính trùng nhau có thể bỏ qua phần key: value và chỉ viết {key}
const createUser = (name, password, email) => {
    return {
        name,
        password,
        email,
        role: "user",
    };
};

//Hàm đăng ký
const handleRegister = (name, password, email) => {
    if (!name || !password || !email) {
        alert("Thông tin đăng ký không hợp lệ. Vui lòng nhập đầy đủ thông tin");
        return "Nhập lại thông tin";
    }
    const newUser = createUser(name, password, email);

    console.log(data);
    data.push(newUser);
    return newUser;
};

const handleLogin = (email, password) => {
    // console.log(data[1].password);
    for (let i = 0; i < data.length; i++) {
        if (data[i].password === password && data[i].email === email) {
            console.log("Thông tin đăng nhập hợp lệ");
            return data[i];
        }
    }
    alert("Thông tin đăng nhập không hợp lệ");
    return "Đăng nhập lại";
};

const dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);

const dataRegister1 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

// console.log(dataLogin);

console.log("data = ", data);
console.log("dataLogin = ", dataLogin);
