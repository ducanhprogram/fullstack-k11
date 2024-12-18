const data = [];

function handleRegister(name, password, email) {
    const newUser = {
        name,
        password,
        email,
        role: "user",
    };
    data.push(newUser);
    return newUser;
}
const handleLogin = (email, password) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
            return data[i];
        }
    }
    console.log("Thông tin đăng nhập không hợp lệ");
    return null;
};

// Đăng ký
handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");

// Đăng nhập
const dataLogin = handleLogin("nguyenvana@email.com", "123456");

console.log("data = ", data);
console.log("dataLogin =", dataLogin);
