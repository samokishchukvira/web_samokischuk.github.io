function task1() {
    alert("Hello, world!");
}

function task2() {
    document.write("Hello, world!");
}

function task3() {
    alert("Are you sure?");
    document.write("Hello, world!");
}

function task4() {
    var userInput = prompt("Введіть інформацію:");

    if (userInput.trim() === "") {
        alert("Ви нічого не ввели!");
    } 
    else {
        alert("Ви ввели: " + userInput);
    }
}

function task5() {
    var userInput = prompt("Введіть текст:");

    if (userInput.trim() === "") {
        alert("Ви нічого не ввели!");
    } 
    else {
        alert("Ви ввели: " + userInput);
        document.write(userInput);
    }
}

function task6() {
    var num1 = Number(prompt('Введіть перше число'));
    var num2 = Number(prompt('Введіть друге число'));
    var sum = num1 + num2;

    if (num1 == '' || num2 == '') {
        alert("Ви нічого не ввели!");
    } 
    else {
        alert("Сума двох чисел = " + sum);
    }
}

function task7() {
    var num1 = Number(prompt('Введіть перше число'));
    var num2 = Number(prompt('Введіть друге число'));

    if (num1 == '' || num2 == '') {
        alert("Ви нічого не ввели!");
    } 
    else if (num1 > num2) {
        document.write("Найбільше число: " + num1);
    } 
    else if (num2 > num1) {
        document.write("Найбільше число: " + num2);
    } 
    else {
        document.write("Числа рівні");
    }
}

function task8() {
    var month = prompt("Введіть номер місяця (1-12):");
    
    if (month === null || month.trim() === "") {
        alert("Будь ласка, введіть число.");
        return;
    }

    month = parseInt(month);
    var season;

    if (month >= 1 && month <= 12) {
        if (month == 12 || month <= 2) {
            season = "зима";
        } else if (month >= 3 && month <= 5) {
            season = "весна";
        } else if (month >= 6 && month <= 8) {
            season = "літо";
        } else {
            season = "осінь";
        }
        document.write("Пора року: " + season);
    } else {
        alert("Будь ласка, введіть число з проміжку 1-12");
    }
}

function task9() {
    if (confirm("Are you sure?")) {
        document.write("Oк");
    } else {
        document.write("Скасувати");
    }
}

function task10() {
    var studentCount = prompt("Введіть кількість студентів у групі:");

    if (studentCount === null || studentCount.trim() === "" || isNaN(studentCount) || parseInt(studentCount) <= 0) {
        alert("Введіть коректну кількість студентів (позитивне число).");
        return;
    }

    studentCount = parseInt(studentCount);
    var studentList = "";

    for (var i = 1; i <= studentCount; i++) {
        var studentName = prompt("Введіть ім'я студента " + i + ":");
        if (studentName === null || studentName.trim() === "") {
            alert("Ім'я студента не може бути порожнім.");
            i--; 
            continue;
        }
        studentList += studentName + "<br>";
    }
    document.write(studentList);
}

function task11() {
    var nameList = "";

    while (true) {
        var name = prompt("Введіть прізвище та ім'я (або натисніть Скасувати, щоб зупинити):");
        if (name === null) {
            break;
        }
        nameList += name + "<br>";
    }
    document.write(nameList);
}

function task12() {
    var cols = 9, rows = 9;
    document.write("<table>");
    for(var i = 1; i <= cols; i++){
      document.write("<tr>");
      for(var j = 1; j <= rows; j++){
        document.write("<td style='text-align:center;'>"+(i*j)+"</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");
}
