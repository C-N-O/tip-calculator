const powerOn = document.querySelector('.on');
const powerOff = document.querySelector('.off');
const clearBtn = document.querySelector('.clear');
const numBtns = document.querySelectorAll('.number');
const tipBtns = document.querySelectorAll('.tipBtn');
const calcBtn = document.querySelector('.calculate');
const dotBtn = document.querySelector('.dot');

const amountDisplay = document.querySelector('.amountDisplay');
const tipDisplay = document.querySelector('.tipDisplay');
const totalDisplay = document.querySelector('.totalDisplay');

const screen = document.querySelector('.screen');

//App state
let appIsOn = false;
let amountString = '';
let tipString = '';
let amount = 0;
let tip = 0;
let total = 0;

const clear = () => {
  amountDisplay.innerText = 'Amount :';
  tipDisplay.innerText = 'Tip :';
  totalDisplay.innerText = 'Total : ';
  amountString = '';
  tipString = '';
};

const calculate = () => {
  //if no number is entered after the decimal, do not display the decimal
  if (amountString.charAt(amountString.length - 1) === '.') {
    amountDisplay.innerText =
      'Amount : $' + amountString.substring(0, amountString.length - 1);
  }

  if (amountString == '' || tipString == '') return;
  total = amount * tip + amount;
  totalDisplay.innerText = 'Total : $' + total;
};

//power on the App
powerOn.addEventListener('click', () => {
  //No need to clear screen when App is on
  if (appIsOn) return;
  //clear all previous entries before turning app on
  clear();
  screen.style.backgroundColor = 'white';
  screen.style.transition = '1s ease-out';
  appIsOn = true;
});

//power off the app
powerOff.addEventListener('click', () => {
  screen.style.backgroundColor = 'rgb(39, 39, 39)';
  appIsOn = false;
});

//call the clear function when we click clear
clearBtn.addEventListener('click', () => {
  clear();
});

calcBtn.addEventListener('click', () => {
  calculate();
});

numBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    amountString = amountString + btn.innerText;
    amountDisplay.innerText = 'Amount : $' + amountString;
    amount = Number(amountString);
  });
});

tipBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tipString = btn.innerText;
    tipDisplay.innerText = 'Tip : ' + tipString;

    if (btn.innerText == '2%') tip = 0.02;
    if (btn.innerText == '5%') tip = 0.05;
    if (btn.innerText == '10%') tip = 0.1;
    if (btn.innerText == '15%') tip = 0.15;
  });
});

dotBtn.addEventListener('click', () => {
  //check if the amount already contains a decimal
  if (amountString.includes('.')) return;
  amountString = amountString + '.';
  amountDisplay.innerText = 'Amount : $' + amountString;
});
