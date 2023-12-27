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

// const checkImage = () => {
//     if(hamMenuButton.style.backgroundImage === "url('./images/icons8-menu-50.png')"){
//         hamMenuButton.style.backgroundImage = url('./images/icons8-close-50.png');
//     } else {
//         hamMenuButton.style.backgroundImage = url('./images/icons8-menu-50.png');
//     }
// }

hamMenuButton.addEventListener('click', toggleMenu);