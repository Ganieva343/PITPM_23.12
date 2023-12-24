//Создайте объект "автомобиль" с полями "марка" и "год выпуска".
let avto = { marka: 'Mercedes-Benz', year: 2020 };

//Добавьте новый элемент в середину массива и объясните, как это сделать.
//Создан массив транспорт
let transport = [{ marka: 'hyundai', year: 2014 }, { marka: 'toyota', year: 2012 }];
//В функции reverse сначала находим индекс элемента который находится в середине массива, 
//потом с помощью метода "splice" помещаем обект в середину массива после найденного индекса
function reverse(array, item) {
    let index = Math.ceil(array.length / 2);
    array.splice(index, 0, item);
    return array;
}

reverse(transport, avto)
console.log(transport)



//Напишите функцию, возвращающую Promise, который разрешается через 1 секунду.
function primer(x, y) {
    return new Promise((resolve, reject) => {
        if (y, x === 0) {
            reject("Не возможно решить, обе переменные равны 0");
        }
        else {
            const z = x / y;
            setTimeout(() => console.log("Ответ", z), 1000);

        }
        
    });
}
primer(15, 10);


//Используя async/await, напишите код, который вызывает эту функцию и выводит результат в консоль.
async function cPrimer(x, y) {
    try {
        const result = await primer(x, y);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

cPrimer(15, 10);



