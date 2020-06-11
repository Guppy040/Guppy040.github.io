console.log("whileの練習");

function doLoop(){
    console.log("実行ボタンが押された");
    let i = 1
    ;
    let sum = 0;
    while(i <= 10000){
        sum = sum + i;

        if(sum >= 50000){
            break;
        }
        i++;
    }

    let answer = document.querySelector("#answer");
    answer.innerHTML = sum;
}