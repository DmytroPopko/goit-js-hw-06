
function chekLengthInput() {
    
    const textInput = document.querySelector("#validation-input");
    let nameClass = "";

    textInput.addEventListener("blur", () => {

        if (textInput.value.length === Number(textInput.dataset.length)) {
            nameClass && textInput.classList.remove(nameClass);
            nameClass = "valid";
        } else {
           nameClass = "invalid";
        }
   
        textInput.classList.add(nameClass);
    });
};

chekLengthInput();