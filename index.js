// bracket test js + FIFO or LIFO

// /**
//  * checkBrackets - check Brackets
//  * @param {String} str 
//  */
// function checkBrackets(str) {
// 	if (!str.length)
// 		return true;

// 	brackets = {
// 		"(": ")",
// 		"[": "]",
// 		"{": "}"
// 	};

// 	stack = [];

// 	for (let idx = 0; idx < str.length; idx++) {
// 		const bracket = str[idx];
// 		if (brackets[bracket]) {
// 			stack.push(bracket);
// 		}
// 		else if (Object.values(brackets).includes(bracket)) {
// 			if (stack.length === 0)
// 				return false;
// 			const top = stack.pop();
// 			if (brackets[top] !== bracket) {
// 				return false;
// 			}
// 		}
// 	}
// 	return stack.length === 0;
// }

// console.log(checkBrackets("{{(([}](}}")); // false
// console.log(checkBrackets("(){}[]"));     // true
// console.log(checkBrackets("{[()()][]}")); // true
// console.log(checkBrackets("((()))"));     // true
// console.log(checkBrackets("([)]"));       // false
// console.log(checkBrackets("{[}"));        // false
// =============================================================================

function retryFetch(url, { retryCount, timeout }) {

}

console.log(retryFetch(
	"https://jsonplaceholder.typicode.com/users",
	{ retryCount: 10, timeout: 1000 }
));





