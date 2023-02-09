const topNum = document.querySelector("#top");
const topText = document.createElement("p");
topText.textContent = "";
topNum.appendChild(topText);

const botNum = document.querySelector("#bottom");
const botText = document.createElement("p");
botText.textContent = "0";
botNum.appendChild(botText);

function c(str) { //prevents calc from overflowing, also removes 0 from the beginning
    if (botText.textContent === "0" || opPress == true) {
        botText.textContent = "";
        opPress = false;
    }

    if (botText.textContent.length < 6) {
        botText.textContent += str;
    }
}

const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    c("0");
});

const one = document.querySelector("#one");
one.addEventListener("click", () => {
    c("1");
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
    c("2");
});

const three = document.querySelector("#three");
three.addEventListener("click", () => {
    c("3");
});

const four = document.querySelector("#four");
four.addEventListener("click", () => {
    c("4");
});

const five = document.querySelector("#five");
five.addEventListener("click", () => {
    c("5");
});

const six = document.querySelector("#six");
six.addEventListener("click", () => {
    c("6");
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    c("7");
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    c("8");
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    c("9");
});

let num1 = 0;
let num2 = 0;
let ans = 0;
let opPress = false;
let decimal = false;

var operators = {
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    '×': function(a, b){ return a*b},
    '/': function(a, b){ return a/b}
 }

 var key = '+';

 function secNum() {
    decimal = false;
    num1 = parseFloat(botText.textContent);
    topText.textContent = botText.textContent + " " + key;
    opPress = true;
 }

 function clear() {
    topText.textContent = "";
    botText.textContent = "0";
    num1 = 0;
    num2 = 0;
 }

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    key = '+';
    secNum();
});

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    key = '-';
    secNum();
});

const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
    key = '×';
    secNum();
});

const division = document.querySelector("#division");
division.addEventListener("click", () => {
    key = '/';
    secNum();
});

function operate(num1, num2, op) {
    num2 = parseFloat(botText.textContent);
    if (num2 === 0 && key === "/") {
        alert("Cannot divide by 0");
        clear();
    } else {
        topText.textContent += " " + botText.textContent
        ans = op[key](num1, num2);
        botText.textContent = ans.toString();
    }
    
}

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    operate(num1, num2, operators);
});

const ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
    clear();
})

const ce = document.querySelector("#ce");
ce.addEventListener("click", () => {
    botText.textContent = "0";
})

const period = document.querySelector("#period");
period.addEventListener("click", () => {
    if (decimal === false) {
        botText.textContent += ".";
        decimal = true;
    }
})