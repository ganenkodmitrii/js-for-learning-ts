/**
 * Задача 3-1
CRUD для свойств объекта
С - create (создать)
R - read (читать)
U - update (обновить)
D - delete (удалить)

Напиши скрипт, который, для объекта user, последовательно:
1.добавляет поле 'mood' со значением 'happy'
2.добавляет поле 'full time' со значением true
3.заменяет значение 'hobby' на 'skydiving'
4.заменяет значение 'premium' на false
5.в переменную message записывает содержимое объекта user:
-для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
-с помощью оператора for...of
-в формате ключ:значение
-c переносом строки ('\n')
 */
let message = '';

interface PlaginUser {
  age: number;
  hobby: string;
  name: string;
  premium: boolean;
  mood?: string;
  'full time'?: boolean;
}

const user: PlaginUser = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

console.log(user);

const keys = Object.keys(user);
// Write code under this line

for (const key of keys) {
  // message += `${key} : ${user[key]} \n`; было в js
  message += `${key} : ${[key]} \n`;
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

export {};
