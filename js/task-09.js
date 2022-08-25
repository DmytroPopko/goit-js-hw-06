 
function changeBgColor() {

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const addChangeBtn = document.querySelector('.change-color');

  addChangeBtn.addEventListener('click', () => {
    const textBgColor = document.querySelector('.color');
    const randomColor = getRandomHexColor();
    
    document.body.style.background = randomColor;
    textBgColor.textContent = randomColor;
  });

}

changeBgColor()

