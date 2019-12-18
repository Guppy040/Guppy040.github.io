function zipSearch(){
    let zip = document.querySelector("#zip").value;

    fetch("https://api.zipaddress.net/?zipcode=" + zip).then(
        function (res) {
            console.log(res);
            return res.json();
        }
    ).then(
        function (json) {
            console.log(json);
            let answerHtml = "";
            answerHtml += json.data.fullAddress;

            document.querySelector("#answer").innerHTML = answerHtml;
        }
    );
}


