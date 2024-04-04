const themeBtn = document.querySelector('.circle');
const input = document.querySelector('.app-result-input');
const numKeys = document.querySelectorAll('.num-key');
const resetKey = document.getElementById('17');
const delKey = document.getElementById('4');
const arithmKeys = ['+', '-', '*', '/', '.'];
let currentValue = '';
let lastOperation = '';
let count = 0;

numKeys.forEach((key) => {
	key.addEventListener('click', (e) => {
		let inputValue = input.value;
		let lastChar = inputValue[inputValue.length - 1];
		if (arithmKeys.includes(lastChar) && arithmKeys.includes(e.target.value)) {
			return;
		}
		if (
			(key.id == 8 ||
				key.id == 13 ||
				key.id == 14 ||
				key.id == 15 ||
				key.id == 16) &&
			input.value.length == 0
		) {
			return;
		}
		if (inputValue === '0' || inputValue === lastOperation) {
			input.value = e.target.value;
		} else {
			input.value += e.target.value;
		}
		currentValue = input.value;
	});
});

const sumFunction = () => {
	let lastChar = currentValue[currentValue.length - 1];
	if (arithmKeys.includes(lastChar)) {
		currentValue = currentValue.slice(0, -1);
	}
	if (input.value.length == 0) {
		return;
	}
	lastOperation = eval(currentValue);
	input.value = parseFloat(lastOperation.toFixed(2));
};

const resetFunction = () => {
	input.value = 0;
};

const delFunction = () => {
	let inputResult = input.value;
	let lastCharAt = inputResult;
	inputResult = lastCharAt.slice(0, -1);
	input.value = inputResult;
};

const switchTheme = () => {
	count++;
	switch (count) {
		case 1: {
			theme1();
			break;
		}
		case 2: {
			theme2();
			break;
		}
		case 3: {
			theme3();
			break;
		}
		default:
			theme1();
			count = 1;
	}
};

const theme1 = () => {
	console.log('1');
};
const theme2 = () => {
	console.log('2');
};
const theme3 = () => {
	console.log('3');
};

themeBtn.addEventListener('click', switchTheme);
delKey.addEventListener('click', delFunction);
resetKey.addEventListener('click', resetFunction);
