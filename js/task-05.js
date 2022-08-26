
function readInput () {

    const refs = {
        input: document.querySelector('#name-input'),
        nameLabel: document.querySelector('#name-output'),
    };

    const initiallyValue = refs.nameLabel.textContent 

    refs.input.addEventListener('input', onInputChange);

    function onInputChange(event) {

        refs.nameLabel.textContent = event.currentTarget.value;

        if (event.currentTarget.value === "") {
            refs.nameLabel.textContent = initiallyValue;
        }

    }
}

readInput();
