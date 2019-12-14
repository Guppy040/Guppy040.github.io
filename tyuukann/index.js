console.log(tweets);

let taroutweets = tweets.filter(x=>x.name==="太郎");
console.log(taroutweets);






let answer = document.querySelector("#answer");


let answerHTML = "";

/**
 * 構築するHTMLのli要素の例
 * <li><b>太郎</b>: 満腹度が回復した <i>2018-11-01 20:05:38</i></li>
 */
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