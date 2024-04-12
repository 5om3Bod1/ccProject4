const form = document.querySelector('form');

form.addEventListener('submit', (a) => {
    a.preventDefault();

    let dices = {};
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            dices[item.value] = true;
        } else if (item.checked === false) {
            dices[item.value] = false;
        }
    })

    console.log(dices);

})