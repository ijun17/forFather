//입력
const me2 = document.querySelector(".js-mathExp2"),
    form2 = document.querySelector(".js-form2");
//출력   
const err2 = document.querySelector(".js-err2"),
    oldME2 = document.querySelector(".js-oldMathExp2"),
    newME2 = document.querySelector(".js-newMathExp2"),
    result2 = document.querySelector(".js-result2");


function isValid2(ch){
    return ((ch>='0'&&ch<='9')||ch=="*"||ch=="/"||ch=="+"||ch=="-"||ch=="."
    ||ch=="("||ch==")"||ch=="{"||ch=="}"||ch=="["||ch=="]");
}

function makeMathExp2(oldMathExp){
    let newMathExp="";
    for(let i=0; i<oldMathExp.length; i++){
        if(isValid2(oldMathExp[i]))newMathExp+=oldMathExp[i];
    }
    return newMathExp;
}

function handlerSubmit2(event){
    event.preventDefault();
    const currentValue = me2.value;
    let newMathExp = makeMathExp2(currentValue);
    let resultME=-1;
    try{
        resultME = eval(newMathExp);
    }catch(e){
        console.log("err");
    }
    
    //출력
    me2.value="";
    oldME2.innerText = currentValue;
    newME2.innerText = `=${newMathExp}`;
    result2.innerText = resultME;
    
    setClipboard(`=${newMathExp}`);
}

function init2(){
    form2.addEventListener("submit", handlerSubmit2);
}

init2();
