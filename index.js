/* function countOccurences(arr) {
    const list = new Map();
    arr.forEach((el) => {
        if (!list.has(el)) {
            const count = arr.filter(elm => elm === el).length;
            list.set(el, count);
        }
    });
    return Object.fromEntries(list);
} */

/* function countOccurences(arr) {
    const list = {};
    arr.forEach((el) => {
        if(!list[el]){
            const count = arr.filter(elm => elm === el).length;
            list[el] = count;
        }
    });
    return list;
} */


/* console.log(countOccurences([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3} */


/* EVENT LOOP */
/* console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0); */

// 1 6 3 5 2 4 7