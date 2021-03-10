$(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
});
  


const menuButton = document.querySelector('.toggle-mnu');
const menuMobile = document.getElementById('mobile-menu');

console.log(menuMobile);

menuButton.addEventListener('click', function() {
    
    menuMobile.classList.toggle('show');

})