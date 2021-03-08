const menuButton = document.querySelector('.hamburger');

console.log(menuButton);
const menuMobile = document.getElementById('mobile-menu');

console.log(menuMobile);

menuButton.addEventListener('click', function() {
    
    menuMobile.classList.add('.show');
})