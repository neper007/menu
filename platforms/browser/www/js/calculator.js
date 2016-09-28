function calcResult() {
    
    var tmpIO;
    var textIO = document.getElementById("textInput");
    
    tmpIO = eval(textIO.value);
    textIO.innerHTML = tmpIO;
}