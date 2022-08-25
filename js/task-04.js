function counter() {
    let counterValue = 0;
    const valueEl = document.querySelector('#value');

    const decrementBtn = document.querySelector('[data-action="decrement"]');
    const incrementBtn = document.querySelector('[data-action="increment"]');

    decrementBtn.addEventListener('click', event => {

        counterValue -= 1;
        valueEl.textContent = counterValue;

    });

    incrementBtn.addEventListener('click', event => {

        counterValue += 1;
        valueEl.textContent = counterValue;

    });

}

counter();

