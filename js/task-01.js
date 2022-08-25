
function CountCategory() {
    
    const itemEl = document.querySelectorAll('.item');
    console.log('Number of categories:', itemEl.length);

    for (let item of itemEl) {

        const acrt = item.querySelector("h2");
        console.log("Category: ", acrt.outerText);

        const itemOfitem = item.querySelectorAll("li");
        console.log("Elements: ", itemOfitem.length);

    };
};

CountCategory()
