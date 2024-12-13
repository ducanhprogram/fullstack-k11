const students = [
    { name: "Nguyen Van A", score: 9 },
    { name: "Tran Thi B", score: 7 },
    { name: "Le Van C", score: 5 },
    { name: "Pham Thi D", score: 3 },
    { name: "Doan Van E", score: 10 },
    { name: "Hoang Thi F", score: 6 },
];

let highestStudent = students[0];

let lowestStudent = students[0];

let group = {
    A: [],
    B: [],
    C: [],
    D: [],
};

for (let i = 1; i < students.length; i++) {
    const student = students[i];
    if (student.score > highestStudent.score) {
        highestStudent = students[i];
    }

    if (student.score < lowestStudent.score) {
        lowestStudent = students[i];
    }
}

for (let i = 0; i < students.length; i++) {
    // let max = students[0].score;
    const student = students[i];

    //Phân loại sinh viên
    if (student.score >= 8 && student.score <= 10) {
        group.A.push(student);
    } else if (student.score >= 6 && student.score < 8) {
        group.B.push(student);
    } else if (student.score >= 4 && student.score < 6) {
        group.C.push(student);
    } else {
        group.D.push(student);
    }
}

let result = {
    highestStudent: highestStudent,
    lowestStudent: lowestStudent,
    group: group,
};

console.log(result);

console.log("Sinh viên có điểm cao nhất: ", highestStudent);

console.log("Sinh viên có điểm thấp nhất: ", lowestStudent);
