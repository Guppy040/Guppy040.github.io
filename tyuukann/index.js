console.log(tweets);
console.log(taroutweets);




let answer = document.querySelector("#answer");


let answerHTML = "";


//Allの時
answerHTML = "<ul>";
let i = 0;
while (i < tweets.length) {
    answerHTML = answerHTML +
        tweets[i].image+ "<li>"
        + "<b>" + tweets[i].name + "</b>: "
        + tweets[i].message + " "
        + "<i>" + tweets[i].tweetedAt + "</i>"
        + "</li>" +"<hr>";
    i++;
}


answerHTML = answerHTML + "</ul>";
answer.innerHTML = answerHTML;






//太郎の時
function tarou(){
    console.log("太郎が押された")
    answerHTML ="<ul>"
    i=0;

    while(i<taroulength) {
        answerHTML = answerHTML +
            tweets[i].image + "<li>"
            + "<b>" + taroutweets[i].name + "</b>: "
            + taroutweets[i].message + " "
            + "<i>" + taroutweets[i].tweetedAt + "</i>"
            + "</li>" + "<hr>";
        i++;

    }
}


//次郎の時




//三郎の時