
//입력
const me = document.querySelector(".js-mathExp"),
    form = document.querySelector(".js-form");
//출력   
const err = document.querySelector(".js-err"),
    oldME = document.querySelector(".js-oldMathExp"),
    newME = document.querySelector(".js-newMathExp"),
    result = document.querySelector(".js-result");

function isValid(ch) {
    return ((ch >= '0' && ch <= '9') || ch == "*" || ch == "/" || ch == "+" || ch == "-" || ch == "."
        || ch == "(" || ch == ")" || ch == "{" || ch == "}" || ch == "[" || ch == "]");
}

function makeMathExp(oldMathExp) {
    let newMathExp = "";
    let isValidRange = false;
    for (let i = 0; i < oldMathExp.length; i++) {
        if (oldMathExp[i] == ",") {
            isValidRange = false;
            newMathExp += "+";
        }
        if (isValidRange && isValid(oldMathExp[i])) newMathExp += oldMathExp[i];
        if (oldMathExp[i] == "=") isValidRange = true;
    }
    return newMathExp;
}

function setClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    console.log("clipboard.setClipboard : ", text, " ", dummy.value);
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function handlerSubmit(event) {
    //event.preventDefault();
    setTimeout(function () {
        console.log("window : handler me.value : " + me.value);
        const currentValue = me.value;
        console.log("window : handler curentValue : " + currentValue);
        let newMathExp = makeMathExp(currentValue);
        let resultME = -1;
        try {
            resultME = eval(newMathExp);
        } catch (e) {
            console.log("err");
        }
        //출력
        me.value = "";
        oldME.innerText = currentValue;
        newME.innerText = `=${newMathExp}`;
        result.innerText = resultME;
        setClipboard(`=${newMathExp}`);
    }, 100);
}

function init() {
    form.addEventListener("paste", handlerSubmit);
}

init();

//input : 33A/33=34*23, sfs=2*3, 38e3 = 34*1
//output : =34*23+2*3+34*1