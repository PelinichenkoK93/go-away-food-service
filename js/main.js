const cartButton = document.querySelector("#cart-button");
const close = document.querySelector('.close');
const cancel = document.querySelector('.btn');
const modal = document.querySelector('.modal');


cartButton.addEventListener('click', function(event) {
    modal.classList.add('is-open');
})

close.addEventListener('click', function(event) {
    modal.classList.remove('is-open');
})

cancel.addEventListener('click', function(event) {
    modal.classList.remove('is-open');
})

new WOW().init();
