// =============================================================================

const obj = { name: "Мурад", age: 24 };

// с "avoid"
const f = (x) => x + 1;

// Батчинг (Batching)
const createBatchProcessor = (callback, interval) => {
	let queue = [];
	let timer = null;

	return (item) => {
		queue.push(item);
		if (!timer) {
			timer = setTimeout(() => {
				callback(queue);
				queue = [];
				timer = null;
			}, interval);
		}
	};
};

const logBatch = createBatchProcessor(console.log, 512);
console.time("time_batching");
console.log(logBatch("🦊"));
console.log(logBatch("🐱"));
console.log(logBatch("🐶"));
console.timeEnd("time_batching");

// =============================================================================
//Дебаунс (Debounce)
function debounce(fn, delay = 500) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), delay);
	};
}

// Пример:
const onSearch = debounce((value) => console.log("Search:", value), 500);
// =============================================================================
//Троттлинг (Throttling)

function throttle(fn, delay = 500) {
	let lastCall = 0;
	return function (...args) {
		const now = Date.now();
		if (now - lastCall >= delay) {
			lastCall = now;
			fn.apply(this, args);
		}
	};
}

// Пример:
const onScroll = throttle(() => console.log("Scroll event!"), 1000);
