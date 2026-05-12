function scrollToElementById(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

function showMainImage(imageUrl) {
    const blurLayer = document.getElementById("background-layer");
    const mainImage = document.querySelector(".zoomed-in-image");
    mainImage.classList.remove('zoomed-out-image');
    mainImage.src = imageUrl;
    blurLayer.style.display = 'block';
}

function discardMainImage() {
    const blurLayer = document.getElementById("background-layer");
    const mainImage = document.querySelector(".zoomed-in-image");
    mainImage.classList.add('zoomed-out-image');
    blurLayer.style.display = 'none';
}

function switchLanguage(language) {
    window.location.href = language;
}

function faqSwitchLanguage(language) {
    window.location.href = "faq_" + language;
}

function openFaqSection(element) {
    if (element.classList.contains("active")) {
        element.classList.remove("active")
        let panel = element.nextElementSibling;
        panel.style.maxHeight = null;

    } else {
        var elements = document.getElementsByClassName("active");
        for (let el of elements) {
            el.classList.remove("active")
            let panel = el.nextElementSibling;
            panel.style.maxHeight = null;
        }

        element.classList.add("active");
        let panel = element.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}