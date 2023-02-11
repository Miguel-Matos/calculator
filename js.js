const topNum = document.querySelector("#top");
const topText = document.createElement("p");
topText.textContent = "";
topNum.appendChild(topText);

const botNum = document.querySelector("#bottom");
const botText = document.createElement("p");
botText.textContent = "0";
botNum.appendChild(botText);

let num1 = 0;
let num2 = 0;
let ans = 0;
let opPress = false;
let decimal = false;
let key = '+';

function c(str) { //prevents calc from overflowing, also removes 0 from the beginning
    if (botText.textContent === "0" ) {
        botText.textContent = "";
        
    }
    if (botText.textContent.length < 9) {
        botText.textContent += str;
    }
}


//responds to the numbers
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

let operators = { //idea from https://stackoverflow.com/questions/14653647/how-to-store-operator-in-variable-using-javascript
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    '×': function(a, b){ return a*b},
    '/': function(a, b){ return a/b}
 }

 function secNum() { // Takes the first number input, sets it as the value of num1 and displays it on the top of the calculator
    decimal = false;
    num1 = parseFloat(botText.textContent);
    topText.textContent = botText.textContent + " " + key;
    opPress = true;
    botText.textContent = "0";
 }

 function clear() {
    topText.textContent = "";
    botText.textContent = "0";
    num1 = 0;
    num2 = 0;
    opPress = false;
    decimal = false;
 }

 function cont(num1, num2, op) { //calculates the two numbers and sets it to the first number. Done in the event that the user pushes an operator instead of equal after the second num
    num2 = parseFloat(botText.textContent);
    num1 = Math.round((op[key](num1, num2)) * 100) / 100;
    console.log(num1);
    botText.textContent = "0";
    decimal = false;
    return num1;
 }

 function calcSelect() { //chooses which function to select based on if an operator has been chosen before or if it is the first time.
    if (opPress === true) {
        num1 = cont(num1, num2, operators);
        topText.textContent = num1.toString() + " " + key;
        console.log(num1);
    } else if (opPress === false) {
        secNum();
    }
 }

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    if (opPress == false) {
        key = '+';
        calcSelect();
    } else {
        calcSelect();
        key = '+';
    }
    
});

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    if (opPress == false) {
        key = '-';
        calcSelect();
    } else {
        calcSelect();
        key = '-';
    }
});

const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", () => {
    if (opPress == false) {
        key = '×';
        calcSelect();
    } else {
        calcSelect();
        key = '×';
    }
});

const division = document.querySelector("#division");
division.addEventListener("click", () => {
    if (opPress == false) {
        key = '/';
        calcSelect();
    } else {
        calcSelect();
        key = '/';
    }
});

function operate(num1, num2, op) {
    num2 = parseFloat(botText.textContent);
    if (num2 === 0 && key === "/") {
        alert("Cannot divide by 0");
        clear();
    } else if (key === "%") {
        num2 *= .01;
        ans = num1 * num2;
        botText.textContent = ans.toString();
    } else {
        topText.textContent += " " + botText.textContent
        ans = Math.round((op[key](num1, num2)) * 100) / 100;
        botText.textContent = ans.toString();
        num1 = ans;
        opPress = false;
    }
    
};

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    operate(num1, num2, operators);
});

const ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
    clear();
});

const ce = document.querySelector("#ce");
ce.addEventListener("click", () => {
    botText.textContent = "0";
});

const period = document.querySelector("#period");
period.addEventListener("click", () => {
    if (decimal === false) {
        if (botText.textContent === "0" || botText.textContent === "") {
            botText.textContent = "0.";
        } else {
            botText.textContent += ".";
        }
        decimal = true;
    }
});

const percent = document.querySelector("#percent");
percent.addEventListener("click", () =>
{
    key = "%";
    operate(num1, num2, operators);
});