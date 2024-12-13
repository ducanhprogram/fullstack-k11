const students = [
    { name: "Nguyen Van A", score: 9 },
    { name: "Tran Thi B", score: 7 },
    { name: "Le Van C", score: 5 },
    { name: "Pham Thi D", score: 3 },
    { name: "Doan Van E", score: 10 },
    { name: "Hoang Thi F", score: 6 },
];

function analyzeStudents(students) {
    let highestStudent = students[0];
    let lowestStudent = students[0];

    let group = {
        A: [],
        B: [],
        C: [],
        D: [],
    };

    if (students.length === 0) {
        return null;
    }

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        if (student.score > highestStudent.score) {
            highestStudent = student;
        }

        if (student.score < lowestStudent.score) {
            lowestStudent = student;
        }

        // Phân loại sinh viên vào các nhóm
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

    return {
        highest: highestStudent,
        lowest: lowestStudent,
        group: group,
    };
}

const result = analyzeStudents(students);
console.log(result);
console.log("Sinh viên có điểm cao nhất: ", result.highest);
console.log("Sinh viên có điểm thấp nhất: ", result.lowest);
