function hitokoto() {
    fetch("https://v1.hitokoto.cn/")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {

            let content = document.querySelector("main > figure > blockquote > p");

            content.textContent = json.hitokoto;

            let figcaption = document.querySelector("main > figure > figcaption");

            figcaption.textContent = json.from_who;

            let cite = document.createElement("cite");
            cite.innerText = json.from;
            figcaption.appendChild(cite)

            console.log(json);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    hitokoto();
    setInterval(hitokoto, 10e3);
    console.log('DOMContentLoaded 2 seconds passed');
});
