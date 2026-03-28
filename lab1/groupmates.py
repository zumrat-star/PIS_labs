groupmates = [
    {
        "name": "Василий",
        "group": "912-2",
        "age": 19,
        "marks": [4, 3, 5, 5, 4]
    },
    {
        "name": "Анна",
        "group": "912-1",
        "age": 18,
        "marks": [3, 2, 3, 4, 3]
    },
    {
        "name": "Георгий",
        "group": "912-2",
        "age": 19,
        "marks": [3, 5, 4, 3, 5]
    },
    {
        "name": "Валентина",
        "group": "912-1",
        "age": 18,
        "marks": [5, 5, 5, 4, 5]
    }
]

def print_students(students):
    print("Имя студента".ljust(15), \
          "Группа".ljust(8), \
          "Возраст".ljust(8), \
          "Оценки".ljust(20))
    
    for student in students:
        print(student["name"].ljust(15), \
              student["group"].ljust(8), \
              str(student["age"]).ljust(8), \
              str(student["marks"]).ljust(20))
    print("\n")

def filter_by_average(students, min_average):
    filtered = []
    for student in students:
        marks = student["marks"]
        average = sum(marks) / len(marks)
        if average >= min_average:
            filtered.append(student)
    return filtered

# Вывод всех студентов
print("Все студенты:")
print_students(groupmates)

# Вывод студентов со средним баллом >= 4.0
print("Студенты со средним баллом >= 4.0:")
filtered_students = filter_by_average(groupmates, 4.0)
print_students(filtered_students)


