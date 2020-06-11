const Taroutweets = tweets.filter(x =>x.name==="太郎");
const Ziroutweets = tweets.filter(x =>x.name==="次郎");
const Saburoutweets = tweets.filter(x =>x.name==="三郎BOT");

let answer = document.querySelector("div#answer");


let answerHTML;
answerHTML = "<ul>";
let i = 0;





//最初の画面
while (i < tweets.length) {
    answerHTML = answerHTML
        + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'image'>"
        + "<li>"
        + "<b>" + tweets[i].name + "</b> "
        + tweets[i].message
        + " <i>" + tweets[i].tweetedAt + "</i>"
        + "</li>" + "<hr>";
    i++;
}
answerHTML = answerHTML + "</ul>";
answer.innerHTML = answerHTML;




//All

function SelectAll() {
    answerHTML = "<ul>";
    i = 0;

    while (i < tweets.length) {
        answerHTML = answerHTML
            + "<img src = " + tweets[i].avatar + " alt = " + tweets[i].name + " class = 'image'>"
            + "<li>"
            + "<b>" + tweets[i].name + "</b> "
            + tweets[i].message
            + " <i>" + tweets[i].tweetedAt + "</i>"
            + "</li>" + "<hr>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}



//太郎
function Selecttarou() {
    answerHTML = "<ul>";
    i = 0;


    while (i < Taroutweets.length) {
        answerHTML = answerHTML
            + "<img src = " + Taroutweets[i].avatar + " alt = " + Taroutweets[i].name + " class = 'image'>"
            + "<li>"
            + "<b>" + Taroutweets[i].name + "</b> "
            + Taroutweets[i].message
            + " <i>" + Taroutweets[i].tweetedAt + "</i>"
            + "</li>" + "<hr>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}


//次郎
function Selectzirou() {
    answerHTML = "<ul>";
    i = 0;


    while (i < Ziroutweets.length) {
        answerHTML = answerHTML
            + "<img src = " + Ziroutweets[i].avatar + " alt = " + Ziroutweets[i].name + " class = 'image'>"
            + "<li>"
            + "<b>" + Ziroutweets[i].name + "</b> "
            + Ziroutweets[i].message
            + " <i>" + Ziroutweets[i].tweetedAt + "</i>"
            + "</li>" + "<hr>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}


//三郎
function Selectsaburou() {
    answerHTML = "<ul>";
    i = 0;


    while (i < Saburoutweets.length) {
        answerHTML = answerHTML
            + "<img src = " + Saburoutweets[i].avatar + " alt = " + Saburoutweets[i].name + " class = 'image'>"
            + "<li>"
            + "<b>" + Saburoutweets[i].name + "</b> "
            + Saburoutweets[i].message
            + " <i>" + Saburoutweets[i].tweetedAt + "</i>"
            + "</li>" + "<hr>";
        i++;
    }
    answerHTML = answerHTML + "</ul>";
    answer.innerHTML = answerHTML;
}

