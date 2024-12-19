const users = [];

const register = (name, password, email) => {
    if (!name || !password || !email) {
        alert("Lỗi: Thiếu thông tin đăng ký (name, password, email");
        return "Vui lòng điền lại thông tin";
    }

    if (
        !String(name).trim() ||
        !String(password).trim() ||
        !String(email).trim()
    ) {
        alert("Lỗi: Dữ liệu không hợp lệ hoặc thiếu thông tin.");
        return "Vui lòng điền lại thông tin hợp lệ.";
    }
    const newUser = {
        name: name,
        password: password,
        email: email,
        role: "user",
    };

    users.push(newUser);
    console.log("Đăng ký thành công");
    return users;
};

console.log(register("Le Duc Anh", "12345", "leducanh@example.com"));

console.log(register(" ", "Hoang12345", "missing@example.com"));
