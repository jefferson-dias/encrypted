// write rules

function rulesWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 75 * i);
        console.log(letter);
    }
    );
}

const rules = document.querySelector('.rulesWriter.show');

// PopUp RUles

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
    popUp("rulesWriter-intelligencer");
    rulesWriter(document.getElementById("rulesWriter-intelligencer"));

});

const buttonFieldAgent = document.getElementById("field-agent");
buttonFieldAgent.addEventListener("click", function() {
    popUp("pop-up-field-agent");
    popUp("rulesWriter-field-agent");
    rulesWriter(document.getElementById("rulesWriter-field-agent"));
});

const closeButtonIntelligencer = document.querySelector(".close-button-intelligencer");
closeButtonIntelligencer.addEventListener("click", function() {
    closePopUp("pop-up-intelligencer");
    closePopUp("rulesWriter-intelligencer");
});

const closeButtonFieldAgent = document.querySelector(".close-button-field-agent");
closeButtonFieldAgent.addEventListener("click", function() {
    closePopUp("pop-up-field-agent");
    closePopUp("rulesWriter-field-agent");
});

