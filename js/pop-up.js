function popUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    popUp.classList.add("show");
}

function closePopUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    popUp.classList.remove("show");
}

const buttonInteligent = document.querySelector(".intelligencer-img");
buttonInteligent.addEventListener("click", function() {
    popUp("pop-up-intelligencer");
});

const buttonFieldAgent = document.querySelector(".field-agent-img");
buttonFieldAgent.addEventListener("click", function() {
    popUp("pop-up-field-agent");
});

const closeButton = document.querySelector(".close-button-intelligencer");
closeButton.addEventListener("click", function() {
    closePopUp("pop-up-intelligencer");
});

const closeButtonFieldAgent = document.querySelector(".close-button-field-agent");
closeButtonFieldAgent.addEventListener("click", function() {
    closePopUp("pop-up-field-agent");
});