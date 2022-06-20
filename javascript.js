function hitokoto() {

    fetch("https://hitokoto.suraimu.org/", {
        headers: {
            "accept": "application/json"
        }
    })
        .then(function (response) {
            return response.json();

        })
        .then(function (json) {
            let content = document.querySelector("main > figure > blockquote > p");
            content.textContent = json.content;
            let figcaption = document.querySelector("main > figure > figcaption");
            figcaption.textContent = json.author;
            let cite = document.createElement("cite");
            cite.innerText = json.artwork;
            figcaption.appendChild(cite)
        });
}

document.addEventListener('DOMContentLoaded', function () {
    hitokoto();
    setInterval(hitokoto, 10e3);
});
