// COOKIES - [1 PCS = 4KB]

// function get_cookies() {
//     const cookies = document.cookie;
//     const cookies_array = cookies.split("; ");
//     const cookies_map = cookies_array.map((cookie) => cookie.split("="));
//     return Object.fromEntries(cookies_map);
// }

// function set_cookies(key, value, ...args) {
//     const cookie = [key, value].join("=");
//     const cookie_args = [cookie, ...args].join(";");
//     document.cookie = cookie_args;
//     return cookie_args;
// }

// function delete_cookie(key) {
//     document.cookie = `${key}=; Max-Age=0;`;
// }

// function clear_cookies() {
//     const cookies = document.cookie.split("; ");
//     for (const cookie of cookies) {
//         const key = cookie.split("=")[0];
//         delete_cookie(key);
//     }
// }
// =============================================================================
// Local Storage ~5-10MB
// localStorage.setItem("localElement", true);
// console.log(localStorage.getItem("localElement"));
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// localStorage.removeItem("localElement");
// localStorage.clear();
// console.log(localStorage);
// =============================================================================


// ★	SessionStorage	~5 MB	Пока вкладка открыта	✅ Да	sessionStorage	sessionStorage.setItem('key', 'value');
// ★	IndexedDB	GB + Постоянно	❌ Нет	indexedDB	indexedDB.open('MyDB', 1);
// ⛔	WebSQL	~5 MB	Постоянно	✅ Да	openDatabase()	openDatabase('db', '1.0', 'desc', 5 * 1024 * 1024);
// ★	CacheStorage	Зависит от ОС	Постоянно	✅/❌	caches	caches.open('v1').then(...)
// ⭐	File System Access API	Большой	Пока доступ разрешён	❌ Нет	showOpenFilePicker()	await window.showOpenFilePicker();
// ⭐	Push / Background Sync-- - Пока разрешено	❌ Нет	Через SW	self.addEventListener('sync', ...)
// Memory storage	Зависит от ОЗУ	Пока работает JS	✅ Да	Просто let / var let data = {};
// BroadcastChannel-- - Пока вкладка открыта	✅ Да	new BroadcastChannel()	bc.postMessage('hi');
// SharedWorker storage-- - Пока SW жив	✅ Да	SharedWorker	const worker = new SharedWorker(...)
// Service Worker state-- - Пока SW жив	❌ Нет	Внутри self	self.myCache = { ...}
// Storage Foundation API	Большой	Пока доступ	❌ Нет	navigator.storage.getDirectory()(эксперимент)
// StorageManager API-- - ---	✅ Да	navigator.storage.estimate()	await navigator.storage.estimate();
// DOM Attributes	Мало	Пока DOM жив	✅ Да	element.dataset	div.dataset.value = '1';
// URL Params / Hash	Очень мало	Пока URL не изменён	✅ Да	location.search / hash ? id = 123#top

