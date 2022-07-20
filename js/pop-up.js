const rulesAgent = document.getElementById("rulesWriter-field-agent");
const rulesIntelligencer = document.getElementById("rulesWriter-intelligencer");
const writerTimer = 30;

// write rules

function writerRules(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
            setTimeout(() => {
                element.innerHTML += letter;
            }, writerTimer * i);       
    });
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

const buttonFieldAgent = document.getElementById("field-agent");
buttonFieldAgent.addEventListener("click", function() {
    popUp("pop-up-field-agent");
    writerRules(rulesAgent);
});

const buttonInteligent = document.getElementById("intelligencer");
buttonInteligent.addEventListener("click", function() {
    popUp("pop-up-intelligencer");
    writerRules(rulesIntelligencer);
});

    
const closeButtonFieldAgent = document.querySelector(".close-button-field-agent");
closeButtonFieldAgent.addEventListener("click", function() {
    closePopUp("pop-up-field-agent");

});

const closeButtonIntelligencer = document.querySelector(".close-button-intelligencer");
closeButtonIntelligencer.addEventListener("click", function() {
    closePopUp("pop-up-intelligencer");
});
