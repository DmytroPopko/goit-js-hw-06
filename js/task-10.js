function createDivByNumber() {

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const boxEl = document.querySelector('#boxes');
  const inputEl = document.querySelector("input");
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');


  createBtn.addEventListener('click', () => {
    createBoxes(Number(inputEl.value));
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes(Number(inputEl.value));
  });

  function createBoxes(amount) {

    let boxes = [];
    let overSize = 0;
    let size = 30;
    
    for (let i = 1; i <= amount; i++) {
      const card = document.createElement('div');
      size += overSize; 

      card.style.width = size + 'px';
      card.style.height = size + 'px';
      card.style.backgroundColor = getRandomHexColor();
      overSize += 10;

      boxes.push(card);
      console.log(boxes);

    }

    boxEl.append(...boxes);
  };
  
  function destroyBoxes(amount) {
    boxEl.innerHTML = "";
  }

}

createDivByNumber();
  