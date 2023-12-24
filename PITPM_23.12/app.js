//Создайте переменную, содержащую ваше имя, и выведите ее в консоль.
var mynane;
mynane = "FARAKHNOS";
console.log(mynane);

//Создайте массив чисел и напишите цикл для вывода каждого элемента.
const mass_namber = [1, 10, 3, 2, 17, 20, 19];
for (const number of mass_namber) {

    console.log(number);
}


//Напишите функцию, которая принимает два числа и возвращает их сумму.

function sum(a, b) {
    const result = a + b;
    console.log(result);
}
sum(5, 7);

//Создайте функцию-конструктор для объекта "Студент" с полями "имя" и "возраст".
function Student(Name, Age) {
    this.name = Name;
    this.age = Age;

    console.log("Имя: ", this.name);
    console.log("Возраст: ", this.age);

}
Student("FARAKHNOS", 19);


