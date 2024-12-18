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
handleRegister("Le Duc Anh", "123456", "leducanhled@gmail.com");
handleRegister("Manh Huy", "782349", "huy@gmail.com");

// Đăng nhập
const dataLogin = handleLogin("leducanhled@gmail.com", "123456");

console.log("data = ", data);
console.log("dataLogin =", dataLogin);
