// Задача 1: Создайте объект Map, который будет хранить названия книг и их авторов. Добавьте в коллекцию три книги с разными типами ключей (строка, число и объект). Напишите код для перебора коллекции и вывода названия каждой книги и её автора.
/* const book = new Map();
book.set("name","Book1");
book.set(2,"Book2");
book.set({id:3},"Book3");
//Задача не совсем понятно,думаю что авторы в этом случае это ключи а название книги это значения...
book.forEach((value,key) =>{
    console.log(`Название книги:${key} Автор:${value}`);
}); */

// Задача 2: Напишите программу, которая создает объект Set из массива с повторяющимися числами. Удалите все повторяющиеся элементы, используя Set, и выведите результат.
/* const numbers = [1,1,2,1,2,3,5,4,3,4,5];
const unique_numbers = new Set(numbers);
//Задача снова непонятная...потому что Set автоматически удаляет все дублирующие элементы...
console.log(unique_numbers); */

// Задача 3: Создайте объект Map, который будет хранить количество посещений для каждого пользователя (используйте объекты в качестве ключей). Добавьте несколько пользователей с разным количеством посещений и выведите их количество с использованием метода map.get().
/* const visited = new Map();
const murad = { id: 1, name: "Murad" };
const john = { id: 2, name: "John" };
const smith = { id: 3, name: "Smith" };
visited.set(murad, 1024);
visited.set(john, 512);
visited.set(smith, 128);
//Задача так же не ясная если объекты в виде ключей тогда мы должны хранить ссылки на объект
//Иначе get'ом не получить значения
console.log(visited.get(murad)); */

// Задача 4: Напишите программу, которая принимает массив строк и возвращает новый массив, содержащий только уникальные строки, используя Set. Выведите новый массив в консоль.
/* const arr = ["Hi","Me","You","She","He","he","YoU"];
const unique_arr = new Set(arr.map((value,idx) => value.toLowerCase()));
console.log(unique_arr); */

// Задача 5: Создайте объект Map, который будет хранить информацию о товарах в магазине. Ключом будет служить уникальный идентификатор товара (например, строка или число), а значением - цена. Напишите функцию, которая возвращает цену товара по его уникальному идентификатору.
/* const product = new Map();
product.set("potato", 1024);
product.set("tomato", 512);
product.set("soap", 256);
product.set("rolton", 128);
const getProductPrice = (item_key) => {
    return product.get(item_key);
}
console.log(getProductPrice("potato")); */

// Задача 6: Напишите программу, которая создает Set из массива объектов, где каждый объект содержит информацию о пользователе. Убедитесь, что в Set будут храниться только уникальные объекты (по идентификатору пользователя). Выведите все элементы множества.
/* const users = [
    {
        id: 1,
        name: "Murad",
    },
    {
        id: 1,
        name: "Murad",
    },
    {
        id: 3,
        name: "Jonh",
    },
    {
        id: 4,
        name: "Smith",
    },
    {
        id: 5,
        name: "Hacker",
    }
];
//по дефолту все объекты даже если id одинаковый являются уникальными в ячейке памяти
//Поэтому добавим сначала по ключам исключая дублирующие id
const users_map = new Map();
users.forEach(user => users_map.set(user.id, user));
const users_set = new Set(users_map.values());
//И получаем уникальный список из массива объекта,конечно я думаю можно сделать легче но вариант тоже рабочий
console.log(users_set); */

// Задача 7: Напишите функцию, которая принимает объект Map и возвращает новый объект, в котором ключи и значения поменяны местами. Протестируйте её на простом примере с несколькими парами ключ-значение.
/* const users = new Map();
users.set(1, "Murad");
users.set(2, "John");
users.set(3, "Smith");
const reverseMap = (map) => {
    const reversedMap = new Map();
    for(const [key,value] of map) {
        reversedMap.set(value, key);
    }
    return reversedMap;
}
console.log(reverseMap(users)); */

// Задача 8: Создайте объект Set, в который будут добавляться элементы только если их ещё нет в множестве. Реализуйте функцию для добавления нового элемента и проверки его существования перед добавлением.
/* const values = new Set();
const addValues = (val) => {
    if(!values.has(val)){
        values.add(val);
    }
} */