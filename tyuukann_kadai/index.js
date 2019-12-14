let TarouTweets = tweets.filter(x =>x.name==="太郎");



let answer = document.querySelector("div#answer");




let answerHTML;
answerHTML = "<ul>";
let i = 0;

//All
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

//Allが押されたとき
function SelectAll() {
    answerHTML="<ul>";
    answer.innerHTML = answerHTML;
}


//太郎
function Selecttarou() {
    console.log("太郎が押された")
    answerHTML="<ul>";
    i = 0;

}





while (i < TarouTweets.length) {
    answerHTML = answerHTML
        + "<img src = " + Taroutweets[i].avatar + " alt = " + Taroutweets[i].name + " class = 'image'>"
        + "<li>"
        + "<b>" + Taroutweets[i].name + "</b> "
        + Taroutweets[i].message
        + " <i>" + Taroutweets[i].tweetedAt + "</i>"
        + "</li>"+"<hr>";
    i++;
}
answerHTML = answerHTML + "</ul>";
answer.innerHTML = answerHTML;
