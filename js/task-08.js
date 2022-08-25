
function sengLoginForm() {

    const form = document.querySelector('.login-form');
    let userData = new Object();
    
    form.addEventListener('submit', onFormSubmit);
    
    function onFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        let hasEmptyField = false; 

        formData.forEach((value, name) => {
            hasEmptyField = value === "";
            userData[name] = value;
        });

        if (hasEmptyField) {
            userData = {};
            alert("Все поля должны быть заполнены!");
        } else {
            console.log(userData);
            form.reset();
        }   
    }
}

sengLoginForm()
