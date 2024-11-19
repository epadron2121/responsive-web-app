const menuTogle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuTogle.addEventListener('click', () => {
    menu.classList.toggle('active');
})