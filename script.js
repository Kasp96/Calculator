// const themeBtn = document.querySelector('.circle');
// const input = document.querySelector('.app-result-input');
// const numKeys = document.querySelectorAll('.num-key');
// const resetKey = document.getElementById('17');
// const delKey = document.getElementById('4');
// const arithmKeys = ['+', '-', '*', '/', '.'];
// let resultArr = [];

// numKeys.forEach((key) => {
// 	key.addEventListener('click', (e) => {
// 		let inputValue = input.value;
// 		let lastChar = inputValue[inputValue.length - 1];
// 		if (arithmKeys.includes(lastChar) && arithmKeys.includes(e.target.value)) {
// 			return;
// 		}
// 		if (
// 			(key.id == 8 ||
// 				key.id == 13 ||
// 				key.id == 14 ||
// 				key.id == 15 ||
// 				key.id == 16) &&
// 			input.value.length == 0
// 		) {
// 			return;
// 		}
// 		resultArr.push(e.target.value);
// 		input.value = resultArr.join('');
// 	});
// });

// const sumFunction = () => {
// 	let inputResult = input.value;
// 	let lastChar = inputResult[inputResult.length - 1];
// 	if (arithmKeys.includes(lastChar)) {
// 		inputResult = inputResult.slice(0, -1);
// 	}
// 	let newInputResult = eval(inputResult);
// 	input.value = parseFloat(newInputResult.toFixed(2));
// };

// const resetFunction = () => {
// 	resultArr = [];
// 	input.value = 0;
// };

// const delFunction = () => {
// 	let inputResult = input.value;
// 	let lastCharAt = inputResult;
// 	inputResult = lastCharAt.slice(0, -1);
// 	resultArr = [inputResult];
// 	input.value = inputResult;
// };

// delKey.addEventListener('click', delFunction);
// resetKey.addEventListener('click', resetFunction);
const input = document.querySelector('.app-result-input');
const numKeys = document.querySelectorAll('.num-key');
const resetKey = document.getElementById('17');
const delKey = document.getElementById('4');
const arithmKeys = ['+', '-', '*', '/', '.'];
let currentValue = '';

numKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let inputValue = input.value;
        let lastChar = currentValue[currentValue.length - 1];
        if (arithmKeys.includes(lastChar) && arithmKeys.includes(e.target.value)) {
            currentValue = currentValue.slice(0, -1); // Usuń ostatni operator
        }
        currentValue += e.target.value;
        input.value = currentValue;
    });
});

const sumFunction = () => {
    let newInputResult = eval(currentValue);
    input.value = parseFloat(newInputResult.toFixed(2));
    currentValue = ''; // Resetuj currentValue po obliczeniu
};

const resetFunction = () => {
    currentValue = '';
    input.value = 0;
};

const delFunction = () => {
    currentValue = currentValue.slice(0, -1);
    input.value = currentValue;
};

delKey.addEventListener('click', delFunction);
resetKey.addEventListener('click', resetFunction);
