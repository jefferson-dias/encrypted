

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
rulesWriter(rules);


