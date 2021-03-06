/**
 * Задача 3-5
Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства prop
 из каждого объекта в массиве.

Используй метод push для добавления значения в массив и оператор in
для проверки наличия свойства в объекте.
 */
interface PlagitProducts {
  name: string;
  price: number;
  quantity: number;
}

const getAllPropValues = (array: object[], prop: string) => {
  //   'use strict';
  // Write code under this line
  const arrayValues = [];
  for (const key of array) {
    // console.log(key[prop]);
    if (prop in key) {
      arrayValues.push([prop]);
    }
  }
  return arrayValues;
};

// Объекты и ожидаемый результат
const products: PlagitProducts[] = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
// console.table(products);

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []

export {};
