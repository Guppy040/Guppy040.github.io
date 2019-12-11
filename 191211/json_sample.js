fetch("https://morimorihoge.github.io/teu2019f/tweets.json").then(
    function(response) {
        return response.json();
    }
).then(
    function (json) {
        let answerHtml = "";
        json.forEach(function (tweet) {
            answerHtml += '<li>${tweet.name}</li>';
        });
        documnt.querySelector("#answer").innerHTML = answerHtml;
    }
);