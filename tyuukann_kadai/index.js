console.log(tweets);






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
        + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'icon'>"
        + "<li>"
        + "<b>" + tweets[i].name + "</b>: "
        + tweets[i].message + " "
        + "<i>" + tweets[i].tweetedAt + "</i>"
        + "</li>" +"<hr>";
    i++;
}


answerHTML = answerHTML + "</ul>";

answer.innerHTML = answerHTML;

