import { users, Users } from './users';
/**
 * Задача 6-7
reduce
Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

Используй деструктурирующее присваивание для параметра функции {balance} 
без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют)
исходный массив. Т.е. нельзя использовать for, splice, push и т.п.
мутирующие методы.

 */

// Write code under this line
const calculateTotalBalance = (array: Users[]) =>
  array.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users));
// 20916
export {};
