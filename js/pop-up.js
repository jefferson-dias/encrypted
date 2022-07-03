function popUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    popUp.classList.add("show");
}

function closePopUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    popUp.classList.remove("show");
}

const buttonInteligent = document.getElementById("intelligencer");
buttonInteligent.addEventListener("click", function() {
    popUp("pop-up-intelligencer");
});

const buttonFieldAgent = document.getElementById("field-agent");
buttonFieldAgent.addEventListener("click", function() {
    popUp("pop-up-field-agent");
});

const closeButtonIntelligencer = document.querySelector(".close-button-intelligencer");
closeButtonIntelligencer.addEventListener("click", function() {
    closePopUp("pop-up-intelligencer");
});

const closeButtonFieldAgent = document.querySelector(".close-button-field-agent");
closeButtonFieldAgent.addEventListener("click", function() {
    closePopUp("pop-up-field-agent");
});