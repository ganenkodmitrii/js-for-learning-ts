/**
 * Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, 
имеет вид "имя":"зарплата".
 */
interface Employees {
  [key: string]: number;
}

const countTotalSalary = (employees: Employees) => {
  // 'use strict';
  // Write code under this line
  let totalSalary = 0;
  const values = Object.values(employees);
  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers: Employees = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports: Employees = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

export {};
