const input = document.querySelector('.app-result-input');
const toggleBtn = document.querySelector('.app-top-theme-toggle');
const themeBtn = document.querySelector('.circle');
const root = document.documentElement;
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
			theme2();
			break;
		}
		case 2: {
			theme3();
			break;
		}
		case 3: {
			theme1();
			break;
		}
		default:
			theme2();
			count = 1;
	}
};

const theme1 = () => {
	themeBtn.classList.remove('active-2');
	themeBtn.classList.add('active');
	root.style.setProperty('--main-bg', 'hsl(222, 26%, 31%)');
	root.style.setProperty('--result-bg', 'hsl(224, 36%, 15%)');
	root.style.setProperty('--kp-bg', 'hsl(223, 31%, 20%)');
	root.style.setProperty('--keys-bg', 'hsl(30, 25%, 89%)');
	root.style.setProperty('--keys-shadow', 'hsl(28, 16%, 65%)');
	root.style.setProperty('--toggleAndEqual', 'hsl(6, 63%, 50%)');
	root.style.setProperty('--equal-clr', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--equal-border', 'hsl(6, 70%, 34%)');
	root.style.setProperty('--text-clr', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--single-key-clr', 'hsl(221, 14%, 31%)');
	root.style.setProperty('--delAndReset-bg', 'hsl(225, 21%, 49%)');
	root.style.setProperty('--delAndReset-shadow', 'hsl(224, 28%, 35%)');
	root.style.setProperty('--text-clr-white-2', 'hsl(0, 0%, 100%);');
};
const theme2 = () => {
	themeBtn.classList.remove('active');
	themeBtn.classList.add('active-1');
	root.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)');
	root.style.setProperty('--result-bg', 'hsl(0, 0%, 93%)');
	root.style.setProperty('--kp-bg', 'hsl(0, 5%, 81%)');
	root.style.setProperty('--keys-bg', 'hsl(30, 25%, 89%)');
	root.style.setProperty('--keys-shadow', 'hsl(28, 16%, 65%)');
	root.style.setProperty('--toggleAndEqual', 'hsl(25, 98%, 40%)');
	root.style.setProperty('--equal-clr', 'hsl(0, 0%, 100%)');
	root.style.setProperty('--equal-border', 'hsl(6, 70%, 34%)');
	root.style.setProperty('--text-clr', 'hsl(198, 20%, 13%)');
	root.style.setProperty('--single-key-clr', 'hsl(221, 14%, 31%)');
	root.style.setProperty('--delAndReset-bg', 'hsl(185, 42%, 37%)');
	root.style.setProperty('--delAndReset-shadow', 'hsl(185, 58%, 25%)');
	root.style.setProperty('--text-clr-white-2', 'hsl(0, 0%, 100%);');
};
const theme3 = () => {
	themeBtn.classList.remove('active-1');
	themeBtn.classList.add('active-2');
	root.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
	root.style.setProperty('--result-bg', 'hsl(268, 71%, 12%)');
	root.style.setProperty('--kp-bg', 'hsl(268, 71%, 12%)');
	root.style.setProperty('--keys-bg', 'hsl(268, 47%, 21%)');
	root.style.setProperty('--keys-shadow', 'hsl(290, 70%, 36%)');
	root.style.setProperty('--toggleAndEqual', 'hsl(176, 100%, 44%)');
	root.style.setProperty('--equal-clr', 'hsl(198, 20%, 13%)');
	root.style.setProperty('--equal-border', 'hsl(177, 92%, 70%)');
	root.style.setProperty('--text-clr', 'hsl(52, 100%, 62%)');
	root.style.setProperty('--single-key-clr', 'hsl(52, 100%, 62%)');
	root.style.setProperty('--delAndReset-bg', 'hsl(281, 89%, 26%)');
	root.style.setProperty('--delAndReset-shadow', 'hsl(285, 91%, 52%)');
};

toggleBtn.addEventListener('click', switchTheme);
delKey.addEventListener('click', delFunction);
resetKey.addEventListener('click', resetFunction);
