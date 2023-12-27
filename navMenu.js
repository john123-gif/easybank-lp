const hamMenuButton = document.getElementById('ham-menu');
const hamMenuList = document.getElementById('ham-menu-lists');

const toggleMenu = () => {
    if(hamMenuList.style.display === 'none'){
        hamMenuList.style.display = 'flex';
        hamMenuButton.style.backgroundImage = url('./images/icons8-close.svg')
        
    } else {
        hamMenuList.style.display = 'none';
    }
}
hamMenuButton.addEventListener('click', toggleMenu);