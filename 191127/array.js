console.log("array.jsの読み込み");

function doCheckAnswers(){
    let answer = document.querySelector("#input_string");
    let inputString  = input.value;
    let output = document.querySelector("#answer");
    let answer = document.querySelector("#ul.answer-list li");innerHTML;

    if(inputString == answer) {
        output.innerHTML = "正解";
    }else{
        output.innerHTML = "不正解"
    }
}