/*****************
 * CALCULATOR FUNCTIONS
 *****************/

const keypadBtns = document.querySelectorAll(".btn-key");
keypadBtns.forEach((btn) => btn.addEventListener("click", fillScreenInputField));

var keyPadValue;
var finalOperationPerformed = false;

function fillScreenInputField(e) {
    keyPadValue = e.explicitOriginalTarget.innerText;

    let resetBtnIsClicked = keyPadValue == "RESET";
    let delBtnIsClicked = keyPadValue == "DEL";
    let equalBtnIsClicked = keyPadValue == "=";
    let anOperationBtnIsClicked = keyPadValue == "+" || keyPadValue == "-" || keyPadValue == "/" || keyPadValue == "x";

    if (resetBtnIsClicked) {
        clearScreenInputField();
    } else if (delBtnIsClicked) {
        deleteLastCharacter();
    } else if (equalBtnIsClicked) {
        performFinalOperation();
        finalOperationPerformed = true;
    } else if (anOperationBtnIsClicked) {
        doOperation();
    } else {
        if (finalOperationPerformed) {
            clearScreenInputField();
            finalOperationPerformed = false;
        }
        appendKeyValue();
    }
}

var screenInputField = document.getElementById("screen");
var performAnOperation = false;

function clearScreenInputField() {
    screenInputField.value = "";
    performAnOperation = false;
}

function deleteLastCharacter() {
    let indexOflastCharacter = screenInputField.value.length - 1;
    screenInputField.value = screenInputField.value.substring(0, indexOflastCharacter);
}

var operationToBePerformed = " ";
var answer;

function performFinalOperation() {
    answer = performOperation(operationToBePerformed);
    screenInputField.value = answer;
    performAnOperation = false;
}

function doOperation() {
    answer = performOperation(operationToBePerformed);
    operationToBePerformed = keyPadValue;

    if (performAnOperation) {
        screenInputField.value = answer + keyPadValue;
    } else {
        performAnOperation = true;
        screenInputField.value += keyPadValue;
    }
}

function performOperation(operationToBePerformed) {
    let numbers = screenInputField.value;
    let num = numbers.split(operationToBePerformed);
    let num1, num2;

    if (performAnOperation) {
        num1 = new Number(num[0]);
        num2 = new Number(num[1]);
    } else {
        num1 = new Number(num[0]);
    }

    return computeAnswer(num1, num2);
}

function computeAnswer(num1, num2) {
    switch (operationToBePerformed) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "x":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
    }
}

function appendKeyValue() {
    screenInputField.value += keyPadValue;
}
/*****************
 * END OF CALCULATOR FUNCTIONS
 *****************/

/*****************
 * TOGGLE BUTTON FUNCTION
 *****************/

const toogleBtn1 = document.querySelector(".one").addEventListener("click", changeTheme);
const toogleBtn2 = document.querySelector(".two").addEventListener("click", changeTheme);
const toogleBtn3 = document.querySelector(".three").addEventListener("click", changeTheme);

var previousTheme = 1;

function changeTheme(e) {
    let activateTheme1 = e.target.classList.contains("one");
    let activateTheme2 = e.target.classList.contains("two");

    if (activateTheme1) {
        if (previousTheme != 1) {
            changeToggleButton(1, 0, 0);
            addToClassList(1);
            removeToClassList();
            previousTheme = 1;
        }
    } else if (activateTheme2) {
        if (previousTheme != 2) {
            changeToggleButton(0, 1, 0);
            addToClassList(2);
            removeToClassList();
            previousTheme = 2;
        }
    } else {
        if (previousTheme != 3) {
            changeToggleButton(0, 0, 1);
            addToClassList(3);
            removeToClassList();
            previousTheme = 3;
        }
    }
}

function changeToggleButton(one, two, three) {
    document.querySelector(".one").style.opacity = one;
    document.querySelector(".two").style.opacity = two;
    document.querySelector(".three").style.opacity = three;
}

function addToClassList(themeNum) {
    addTextColor(themeNum);
    addBgColor(themeNum);
    addKeyBgColor(themeNum);
}

function removeToClassList() {
    removeTextColor();
    removeBgColor();
    removeKeyBgColor();
}

/**
 * add functions
 */

function addTextColor(themeNum) {
    document.querySelectorAll(`.theme-${previousTheme}-clr-primary`).forEach((element) => element.classList.add(`theme-${themeNum}-clr-primary`));
    document.querySelectorAll(`.theme-${previousTheme}-clr-secondary`).forEach((element) => element.classList.add(`theme-${themeNum}-clr-secondary`));

    if (themeNum == 3) {
        
    }
}
function addBgColor(themeNum) {
    document.querySelector(`.theme-${previousTheme}-bg-primary`).classList.add(`theme-${themeNum}-bg-primary`);
    document.querySelectorAll(`.theme-${previousTheme}-bg-secondary`).forEach((element) => element.classList.add(`theme-${themeNum}-bg-secondary`));
    document.querySelector(`.theme-${previousTheme}-bg-tertiary`).classList.add(`theme-${themeNum}-bg-tertiary`);
}

function addKeyBgColor(themeNum) {
    document
        .querySelectorAll(`.theme-${previousTheme}-key-bg-primary`)
        .forEach((element) => element.classList.add(`theme-${themeNum}-key-bg-primary`));
    document
        .querySelectorAll(`.theme-${previousTheme}-key-bg-secondary`)
        .forEach((element) => element.classList.add(`theme-${themeNum}-key-bg-secondary`));
    document
        .querySelectorAll(`.theme-${previousTheme}-key-toggle-bg-tertiary`)
        .forEach((element) => element.classList.add(`theme-${themeNum}-key-toggle-bg-tertiary`));
    document.querySelector(`.theme-${previousTheme}-key-box-shadow`).classList.add(`theme-${themeNum}-key-box-shadow`);
}

/**
 * end of add functions
 */

/**
 * remove functions
 */

function removeTextColor() {
    document
        .querySelectorAll(`.theme-${previousTheme}-clr-primary`)
        .forEach((element) => element.classList.remove(`theme-${previousTheme}-clr-primary`));
    document
        .querySelectorAll(`.theme-${previousTheme}-clr-secondary`)
        .forEach((element) => element.classList.remove(`theme-${previousTheme}-clr-secondary`));
}
function removeBgColor() {
    document.querySelector(`.theme-${previousTheme}-bg-primary`).classList.remove(`theme-${previousTheme}-bg-primary`);
    document
        .querySelectorAll(`.theme-${previousTheme}-bg-secondary`)
        .forEach((element) => element.classList.remove(`theme-${previousTheme}-bg-secondary`));
    document.querySelector(`.theme-${previousTheme}-bg-tertiary`).classList.remove(`theme-${previousTheme}-bg-tertiary`);
}

function removeKeyBgColor() {
    document
        .querySelectorAll(`.theme-${previousTheme}-key-bg-primary`)
        .forEach((element) => element.classList.remove(`theme-${previousTheme}-key-bg-primary`));
    document
        .querySelectorAll(`.theme-${previousTheme}-key-bg-secondary`)
        .forEach((element) => element.classList.remove(`theme-${previousTheme}-key-bg-secondary`));
    document
        .querySelectorAll(`.theme-${previousTheme}-key-toggle-bg-tertiary`)
        .forEach((element) => element.classList.remove(`theme-${previousTheme}-key-toggle-bg-tertiary`));
    document.querySelector(`.theme-${previousTheme}-key-box-shadow`).classList.remove(`theme-${previousTheme}-key-box-shadow`);
}
/**
 * end of remove functions
 */
/*****************
 * END OF TOGGLE BUTTON
 *****************/
