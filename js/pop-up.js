// write rules

function writerCondition (condition, element) {
    if (condition === true) {
        writerRules(element);
    }
}

function writerRules(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => setTimeout(() => element.innerHTML += letter, 70 * i));
}

// PopUp RUles

function popUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    popUp.classList.add("show");
}

function closePopUp(popUpId) {
    const popUp = document.getElementById(popUpId);
    popUp.classList.remove("show");
}

// call functions 

const rulesAgent = document.getElementById("rulesWriter-field-agent");
const rulesIntelligencer = document.getElementById("rulesWriter-intelligencer");

const buttonFieldAgent = document.getElementById("field-agent");
buttonFieldAgent.addEventListener("click", function() {
    popUp("pop-up-field-agent");
    writerCondition(true, rulesAgent);
});

const buttonInteligent = document.getElementById("intelligencer");
buttonInteligent.addEventListener("click", function() {
    popUp("pop-up-intelligencer");
    writerCondition(true, rulesIntelligencer);
});

    
const closeButtonFieldAgent = document.querySelector(".close-button-field-agent");
closeButtonFieldAgent.addEventListener("click", function() {
    closePopUp("pop-up-field-agent");
    writerCondition(false, rulesAgent);

});

const closeButtonIntelligencer = document.querySelector(".close-button-intelligencer");
closeButtonIntelligencer.addEventListener("click", function() {
    closePopUp("pop-up-intelligencer");
    writerCondition(false, rulesIntelligencer);
});
