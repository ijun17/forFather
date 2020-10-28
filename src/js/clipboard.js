function setClipboard(text){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    console.log("clipboard.setClipboard : ", text, " ", dummy.value);
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
