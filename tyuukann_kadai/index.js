let answer = document.querySelector("div#answer");




let answerHTML;
answerHTML = "<ul>";
let i = 0;

while (i < tweets.length) {
    answerHTML = answerHTML
        + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'image'>"
        + "<li>"
        + "<b>" + tweets[i].name + "</b> "
        + tweets[i].message
        + " <i>" + tweets[i].tweetedAt + "</i>"
        + "</li>"+"<hr>";
    i++;
}

answerHTML = answerHTML + "</ul>";
answer.innerHTML = answerHTML;

