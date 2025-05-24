// 🟢 Легкий уровень (10 задач)
// Что выведет код?
// const obj = {
// 	name: "Alice",
// 	sayHi() {
// 		console.log(this.name);
// 	}
// };
// obj.sayHi();
//Ответ: Alice
// =============================================================================
// Исправь код, чтобы sayHi работал после setTimeout:
// const user = {
//   name: "Bob",
//   sayHi() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };
// user.sayHi();

// const user = {
// 	name: "Bob",
// 	sayHi() {
// 		setTimeout((function () {
// 			console.log(this.name);
// 		}).bind(this), 1000);
// 	}
// };
// user.sayHi();
// =============================================================================
// Выведи Hello, John! используя call:
// function greet() {
// 	console.log(`Hello, ${this.name}!`);
// }
// const person = { name: "John" };
// greet.call(person);
// =============================================================================
// Что выведет и почему?
// const obj = {
// 	name: "Eve",
// 	sayHi: () => console.log(this.name)
// };
// obj.sayHi();
// У стрелочной функции sayHi нет собственного this. Она берёт this из окружающего лексического окружения (вне obj)
// Поэтому ответ undefined
// =============================================================================
// Используя bind, привяжи функцию к объекту:
// const user = { name: "Alex" };
// function sayName() {
// 	console.log(this.name);
// }
// const bound = sayName.bind(user);
// bound();
// =============================================================================
// Какой результат будет у sayHi? Почему?
// const obj = {
// 	name: "Anna",
// 	sayHi: function () {
// 		const inner = () => console.log(this.name);
// 		inner();
// 	}
// };
// obj.sayHi();
// У стрелочной функции inner нет собственного this. Она берёт this из окружающего лексического окружения а это
// sayHi а она в контексте obj вызывается
// Ответ: Anna
// =============================================================================
// Что выведется?
// const obj = { name: "Tom" };
// const say = function () { console.log(this.name); };
// say.call(obj);
// Ответ: Tom
// =============================================================================
// Передай аргументы через apply:
// function showInfo(city, country) {
// 	console.log(`${this.name} lives in ${city}, ${country}`);
// }
// const person = { name: "Olga" };
// showInfo.apply(person, ["Baku", "Azerbaijan"]);
// =============================================================================
// Что выведет код?
// const obj = { x: 42 };
// function printX() {
// 	console.log(this.x);
// }
// const bound = printX.bind(obj);
// bound();
// Ответ: 42
// =============================================================================
// Исправь ошибку в использовании this:
// const user = {
// 	name: "Kate",
// 	sayHi() {
// 		const fn = (function () {
// 			console.log(this.name);
// 		}).bind(this);
// 		fn();
// 	}
// };
// user.sayHi();
// =============================================================================
// 🟡 Средний уровень (10 задач)
// Что выведет код и почему?
// const user = {
// 	name: "Sam",
// 	sayHi() {
// 		return function () {
// 			console.log(this);
// 		};
// 	}
// };
// user.sayHi()();
// undefined потому что sayHi возвращает функцию без контекста а this указывает global || window
// =============================================================================
// Сделай так, чтобы this не потерялся в callback:
// const obj = {
// 	count: 0,
// 	inc() {
// 		setTimeout((function () {
// 			this.count++;
// 			console.log(this.count);
// 		}).bind(this), 100);
// 	}
// };
// obj.inc();
// =============================================================================
// Применение bind для метода массива:
// const person = { name: "Max" };
// function sayHi() {
// 	console.log("Hi " + this.name);
// }
// ["a", "b", "c"].forEach(sayHi.bind(person));
// =============================================================================
// Почему this работает корректно здесь?
// const timer = {
// 	seconds: 0,
// 	start() {
// 		setInterval(() => {
// 			this.seconds++;
// 			console.log(this.seconds);
// 		}, 1000);
// 	}
// };
// timer.start();
// Стрелочная функция в setInterval(...) не создаёт свой this.
// Она берёт this из внешней области, то есть из метода start.
// А метод start() вызывается как timer.start()
// Следовательно, this внутри start() указывает на timer.
// =============================================================================
// Сделай функцию с передачей аргументов через apply:
// function sum() {
// 	return Array.from(arguments).reduce((a, b) => a + b, 0);
// }
// const args = [1, 2, 3, 4];
// const result = sum.apply(null, args);
// const result = sum.apply(this, args); // лучше так чтобы контекст не терялся
// console.log(result); // должно быть 10
// =============================================================================
// Чем bind отличается от call и apply? Объясни и продемонстрируй на примере.
// bind - возвращает функцию с привязанным контекстом и аргументами
// call & apply - вызовает функцию немедленно с заданным контекстом и аргументами
// call - аргументы через запятую по одной
// aplly - аргументы через массив
// =============================================================================
// Создай функцию, у которой нельзя изменить this:
// function sayName() {
// 	console.log(this.name);
// }
// const user = { name: "Den" };
// const f = sayName.bind(user); // вот тут уже создана Bind является супер клеем в контексте this
// f.call({ name: "Hack" }); // Что выведет? Den
// =============================================================================
// Сделай counter с this и bind:
// function Counter() {
// 	this.count = 0;
// 	setInterval(function () {
// 		this.count++;
// 		console.log(this.count);
// 	}.bind(this), 1000);
// }
// new Counter();
// Задача уже решена,решать не чего таймер работает через bind
// =============================================================================
// Передай контекст в метод массива:
// const obj = {
// 	multiplier: 2,
// 	multiply(n) {
// 		return n * this.multiplier;
// 	}
// };
// const result = [1, 2, 3].map(obj.multiply, obj);
// console.log(result); // Почему не работает? Теперь работает :)
// =============================================================================
// Что делает этот код?
// const obj = {
// 	value: 10,
// 	getValue: function () {
// 		return () => this.value;
// 	}
// };
// console.log(obj.getValue()());
// 10 - стрелочная функция обращается к внешнему лексическому окружению а это getValue а он уже вызывается через
// obj.getValue и передает контекст obj
// =============================================================================
// 🔴 Сложный уровень (10 задач)
// Реализуй bind вручную.
// Function.prototype.myBind = function (context, ...boundArgs) {
// 	const fn = this;
// 	return function (...callArgs) {
// 		return fn.apply(context, [...boundArgs, ...callArgs]);
// 	};
// };
// =============================================================================
// Почему этот код не работает корректно? Исправь.
// const button = {
// 	text: "Click me",
// 	handleClick() {
// 		console.log(this.text);
// 	}
// };
// document.getElementById("btn").addEventListener("click", button.handleClick.bind(button));
// =============================================================================
// Передача this в замыкании:
// const obj = {
// 	value: 100,
// 	getValueFunc() {
// 		const self = this;
// 		return function () {
// 			return self.value;
// 		};
// 	}
// };
// console.log(obj.getValueFunc()());
// Не вижу проблемы задача решена
// =============================================================================
// Реализуй метод .once() для функции, при котором this сохраняется.
// Function.prototype.once = function (context, ...boundArgs) {
// 	const fn = this;
// 	let isCalled = false;
// 	let result;
// 	return function (...args) {
// 		if (!isCalled) {
// 			isCalled = true;
// 			result = fn.apply(context || this, [...boundArgs, ...args]);
// 		}
// 		else {
// 			console.log("Функция уже отработала :)");
// 		}
// 		return result;
// 	};
// };
// function greet() {
// 	console.log("Hello");
// }
// const onceGreet = greet.once();
// onceGreet(); // Hello
// onceGreet(); // Функция уже отработала :)
// onceGreet(); // Функция уже отработала :)
// =============================================================================
// Почему this ведёт себя по-разному здесь:
// const obj = {
// 	method: function () {
// 		return {
// 			inner: function () {
// 				console.log(this);
// 			}
// 		};
// 	}
// };
// obj.method().inner();
//this внутри inner указывает на тот объект, который возвращает method, а не на obj
// =============================================================================
// Усложнённый bind (с аргументами и новым вызовом через new)
// Function.prototype.myBind = function (context, ...bindArgs) {
// 	const originalFn = this;
// 	function boundFn(...callArgs) {
// 		if (this instanceof boundFn) {
// 			return new originalFn(...bindArgs, ...callArgs);
// 		}
// 		return originalFn.apply(context, [...bindArgs, ...callArgs]);
// 	}
// 	boundFn.prototype = Object.create(originalFn.prototype);
// 	return boundFn;
// };
// =============================================================================
// Объясни и исправь поведение:
// const obj = {
// 	x: 10,
// 	getX: function () {
// 		return this.x;
// 	}
// };
// const retrieveX = obj.getX.bind(obj); //Тут теряется контекст потому что функция не вызывается - нужно привязать
// console.log(retrieveX());
// =============================================================================
// Сделай каррированную функцию с сохранением this.
// function curry(fn) {
// 	return function curried(...args) {
// 		const that = this;
// 		if (args.length >= fn.length) {
// 			return fn.apply(that, args);
// 		}
// 		return function (...nextArgs) {
// 			return curried.apply(that, [...args, ...nextArgs]);
// 		};
// 	};
// }
// function add(a, b, c) {
// 	return this.base + a + b + c;
// }
// const obj = { base: 10 };
// const curried = curry(add);
// console.log(curried.call(obj)(1)(2)(3));
// =============================================================================
// Как this работает в классе и в callback?
// class Timer {
// 	constructor() {
// 		this.seconds = 0;
// 	}
// 	start() {
// 		setInterval((function () {
// 			this.seconds++;
// 			console.log(this.seconds);
// 		}).bind(this), 1000);
// 	}
// }
// new Timer().start();
// Здесь функция не вызывается от класса и контекст теряется из за интервала добавляем bind и все работает
// =============================================================================
// Используй Reflect.apply и объясни, зачем он нужен.
// Reflect.apply — современная альтернатива Function.prototype.apply.
// Используется для вызова функции с явным указанием контекста (this) и аргументов.
// Reflect.apply(targetFn, thisArg, argsArray);
// =============================================================================
