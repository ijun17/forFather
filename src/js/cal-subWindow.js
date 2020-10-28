//입력
const me = document.querySelector(".js-mathExp"),
    form = document.querySelector(".js-form");
//출력   
const err = document.querySelector(".js-err"),
    oldME = document.querySelector(".js-oldMathExp"),
    newME = document.querySelector(".js-newMathExp"),
    result = document.querySelector(".js-result");



function isValid(ch){
    return ((ch>='0'&&ch<='9')||ch=="*"||ch=="/"||ch=="+"||ch=="-"||ch=="."
    ||ch=="("||ch==")"||ch=="{"||ch=="}"||ch=="["||ch=="]");
}

function makeMathExp(oldMathExp){
    let newMathExp="";
    let isValidRange = false;
    for(let i=0; i<oldMathExp.length; i++){
        if(oldMathExp[i]==","){
            isValidRange=false;
            newMathExp+="+";
        }
        if(isValidRange && isValid(oldMathExp[i]))newMathExp+=oldMathExp[i];
        if(oldMathExp[i]=="=")isValidRange=true;
    }
    console.log(newMathExp);
    return newMathExp;
}

function handlerSubmit(event){
    event.preventDefault();
    const currentValue = me.value;
    let newMathExp = makeMathExp(currentValue);
    let resultME=-1;
    try{
        resultME = eval(newMathExp);
    }catch(e){
        console.log("err");
    }
    
    setClipboard(newME);
    
    //출력
    me.value="";
    oldME.innerText = currentValue;
    newME.innerText = `=${newMathExp}`;
    result.innerText = resultME;
    
}   

function init(){
    form.addEventListener("submit", handlerSubmit);
    
}

init();
