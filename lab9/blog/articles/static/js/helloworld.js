// Список студентов
var groupmates = [
    {
        "name": "Василий",
        "group": "БСТ2256",
        "age": 19,
        "marks": [4, 3, 5, 5, 4]
    },
    {
        "name": "Анна",
        "group": "БСТ2257",
        "age": 18,
        "marks": [3, 2, 3, 4, 3]
    },
    {
        "name": "Георгий",
        "group": "БСТ2257",
        "age": 19,
        "marks": [3, 5, 4, 3, 5]
    },
    {
        "name": "Валентина",
        "group": "БСТ2256",
        "age": 18,
        "marks": [5, 5, 5, 4, 5]
    }
];

// Функция добавления пробелов справа (аналог ljust)
var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length) {
        str = str + ' ';
    }
    return str;
};

// Функция вывода таблицы студентов
var printStudents = function(students) {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );
    
    for (var i = 0; i < students.length; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['age'], 8),
            rpad(students[i]['marks'].toString(), 20)
        );
    }
    console.log('\n');
};

// Вывод списка студентов
printStudents(groupmates);

// Функция фильтрации по группе
var filterByGroup = function(students, group) {
    var filtered = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i]['group'] === group) {
            filtered.push(students[i]);
        }
    }
    return filtered;
};

// Пример фильтрации по группе БСТ2257
console.log("Студенты группы БСТ2257:");
var filteredStudents = filterByGroup(groupmates, "БСТ2257");
printStudents(filteredStudents);