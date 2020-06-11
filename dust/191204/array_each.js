console.log(fruitNames);

let answer = document.querySelector("#answer");

let answerHTML = "";

answerHTML = "<ul>";
let i = 0;
while(i < tweets.length){
    answerHTML = answerHTML + "<li>" + tweets[i].name + "</li>";
    i++;
}
answerHTML = answerHTML + "</ul>";

answer.innerHTML = answerHTML;