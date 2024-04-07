//TODO : type animation fonksiyonu oluştur.

function typeAnimation(string, element) {
    let index = -1;
    let status = "increasing";

    const interval = setInterval(() => {
        if (index >= 0) {
            element.textContent = string.slice(0, index);
        }
        if (index >= -1 && status === "increasing") {
            index++;
        }
        if (index <= string.length + 1 && status === "decreasing") {
            index--;
        }

        if (index === -1) status = "increasing";

        if (index === string.length + 1) status = "decreasing";
    }, 600);

    element.classList.add("typeAnimation");
}

const p = document.querySelector(".p");

typeAnimation("Hello World", p);
