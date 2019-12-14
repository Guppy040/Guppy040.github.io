let saburouTweets = tweets.filter(x => x.name === "三郎BOT");
console.log(saburouTweets);
let JirouTweets = tweets.filter(x => x.name === "次郎");
console.log(JirouTweets);
let TarouTweets = tweets.filter(x => x.name === "太郎");
console.log(TarouTweets);

let answer = document.querySelector("div#answer");
console.log("Allが表示された");
let answerHTML;
answerHTML = "<ul>";
let i = 0;

while (i < tweets.length) {
    answerHTML = answerHTML
        + "<li class='tweet'>"
        + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'icon'>"
        + "<b>" + tweets[i].name + "</b> "
        + tweets[i].message
        + " <i>" + tweets[i].tweetedAt + "</i>"
        + "</li>";
    i++;
}
answerHTML = answerHTML + "</ul>";
answer.innerHTML = answerHTML;

function userSelectAll() {
    console.log("Allが押された");
    answerHTML = "<ul>";
    i = 0;

    while (i < tweets.length) {
        answerHTML = answerHTML
            + "<li class='tweet'>"
            + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'icon'>"
            + "<b>" + tweets[i].name + "</b> "
            + tweets[i].message
            + " <i>" + tweets[i].tweetedAt + "</i>"
            + "</li>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}

function userSelectSaburou() {
    console.log("三郎BOTが押された");
    answerHTML = "<ul>";
    i = 0;

    while (i < saburouTweets.length) {
        answerHTML = answerHTML
            + "<li class='tweet'>"
            + "<img src = " + saburouTweets[i].avatar + " alt = " + saburouTweets[i].name + " class = 'icon'>"
            + "<b>" + saburouTweets[i].name + "</b> "
            + saburouTweets[i].message
            + " <i>" + saburouTweets[i].tweetedAt + "</i>"
            + "</li>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}

function userSelectJirou() {
    console.log("次郎が押された");
    answerHTML = "<ul>";
    i = 0;

    while (i < JirouTweets.length) {
        answerHTML = answerHTML
            + "<li class='tweet'>"
            + "<img src = " + JirouTweets[i].avatar + " alt = " + JirouTweets[i].name + " class = 'icon'>"
            + "<b>" + JirouTweets[i].name + "</b> "
            + JirouTweets[i].message
            + " <i>" + JirouTweets[i].tweetedAt + "</i>"
            + "</li>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}

function userSelectTarou() {
    console.log("太郎が押された");
    answerHTML = "<ul>";
    i = 0;

    while (i < TarouTweets.length) {
        answerHTML = answerHTML
            + "<li class='tweet'>"
            + "<img src = " + TarouTweets[i].avatar + " alt = " + TarouTweets[i].name + " class = 'icon'>"
            + "<b>" + TarouTweets[i].name + "</b> "
            + TarouTweets[i].message
            + " <i>" + TarouTweets[i].tweetedAt + "</i>"
            + "</li>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}