let person={};

function submit() {
    var credits = [];
    var grade = [];

    for (let i = 1; i <= 8; i++) {
        grade[i - 1] = document.getElementById('g' + i).value.trim().toUpperCase();
        credits[i - 1] = parseFloat(document.getElementById('c' + i).value) || 0;
    }

    const numbers = [];

  
    for (let i = 0; i < 8; i++) {
        let gradevalue = grade[i];
        if (gradevalue === 'O' || (parseFloat(gradevalue) >= 90 && parseFloat(gradevalue) <= 100)) {
            numbers[i] = 10;
        } else if (gradevalue === 'A+' || (parseFloat(gradevalue) >= 80 && parseFloat(gradevalue) < 90)) {
            numbers[i] = 9;
        } else if (gradevalue === 'A' || (parseFloat(gradevalue) >= 70 && parseFloat(gradevalue) < 80)) {
            numbers[i] = 8;
        } else if (gradevalue === 'B+' || (parseFloat(gradevalue) >= 60 && parseFloat(gradevalue) < 70)) {
            numbers[i] = 7;
        } else if (gradevalue === 'B' || (parseFloat(gradevalue) >= 55 && parseFloat(gradevalue) < 60)) {
            numbers[i] = 6;
        } else if (gradevalue === 'C' || (parseFloat(gradevalue) >= 50 && parseFloat(gradevalue) < 55)) {
            numbers[i] = 5;
        } else if (gradevalue === 'P' || (parseFloat(gradevalue) >= 40 && parseFloat(gradevalue) < 50)) {
            numbers[i] = 4;
        } else if (gradevalue === 'F' || (parseFloat(gradevalue) < 40)) {
            numbers[i] = 0;
        } else {
            numbers[i] = 0; 
        }
    }

    
    let total_marks = 0;
    let total_credits = 0;

    for (let j = 0; j < 8; j++) {
        total_marks += numbers[j] * credits[j];
        total_credits += credits[j];
    }

    let Total_sgpa = total_credits === 0 ? 0 : total_marks / total_credits;
    window.alert(Total_sgpa.toFixed(2));
    document.getElementById("SGPA").innerHTML = Total_sgpa.toFixed(2);
}

document.addEventListener('DOMContentLoaded', (event) => {
    opensidebar();
    document.getElementById('loginform').addEventListener('submit', (event) => {
        event.preventDefault();
        login();
    });
});










