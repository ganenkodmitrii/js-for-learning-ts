/**
 * Задача 5-5
класс
Напиши класс Car с указанными свойствами и методами.
 
#### Пример 1.
```js
class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
     параметр name не должен
     *   совпадать с названием свойства
     *   но должен быть похож.
     *   Поэтому используют прием смены
     *   названия добавляя символ '_'.
     *   Хотя это может любой другой символ
    
// this._name = name;
//   }

// Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
// get name() {
//     return this._name;
// }

// set name(value) {
//     this._name = value;
// }
// }
*/

class Car {
  maxSpeed: number;
  speed: number;
  isOn: boolean;
  distance: number;
  _price: number;

  /*
   * Добавь `статический` метод
   * `getSpecs(car)`, который принимает
   * объект-машину как параметр
   * и возвращает шаблонную строку
   * со свойствами и значениями объекта.
   * Свойства:
   *   maxSpeed,
   *   speed,
   *   isOn,
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */
  static getSpecs(car: any) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость,
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль.
   *         Значения `true` или `false`,
   *         начальное значение false
   *  distance - пробег в километрах,
   *             начальное значение `0`
   */
  constructor(obj: any) {
    this.maxSpeed = obj.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = obj.price;
  }

  /*
   * Добавь геттер и сеттер
   * для свойства `price`, который будет
   * работать с свойством цены автомобиля.
   *
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с
   * подчеркиванием. См. ниже пример 1.
   */
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Этот метод должен добавлять
   * к свойству `speed` полученное
   * значение, при условии,
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
  accelerate(value: number) {
    if (this.speed + value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += value;
    }
  }

  /*
   * Этот метод должен отнимать
   * от свойства `speed`
   * полученное значение, при условии,
   * что результирующая скорость не меньше 0
   */
  decelerate(value: number) {
    if (this.speed - value < 0) {
      this.speed = 0;
    } else {
      this.speed -= value;
    }
  }

  /*
   * Этот метод должен добавлять к свойству
   * `distance` пробег в километрах,
   * т.е. hours * speed,
   * но только в том случае,
   * если машина заведена!
   */
  drive(hours: number) {
    if (this.isOn) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}
// console.log(typeof Car);

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

export {};
