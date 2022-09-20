function ScrollUp () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector("nav ul").style.display == 'flex') {
            document.querySelector("nav ul").style.display = 'none'
        } else {
            document.querySelector("nav ul").style.display = 'flex'
        }
    });
};

const btn = document.querySelector('.scrollup');
const btnWhatsApp = document.querySelector('a.whatsapp');
const header = document.querySelector('header');

function DecidirBotton (){
    if(window.scrollY == 0) {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'flex';
    }
}
window.addEventListener('scroll', DecidirBotton);

function DecidirBottonWhatsApp (){
    if(window.scrollY == 0) {
        btnWhatsApp.style.display = 'none';
    } else {
        btnWhatsApp.style.display = 'flex';
    }
}
window.addEventListener('scroll', DecidirBottonWhatsApp);

const dropdown = document.querySelector('.dropdown-menu');

// function SubMenu () {
//     if (dropdown.style.display = 'none') {
//         document.querySelector('.submenu').style.margin = '0';
//         dropdown.style.display = 'block';
//         console.log('DEu certo')
//     } 
// }

// function TirarMenuPC () {
//     if (dropdown.style.display = 'block') {
//         document.querySelector('.submenu').style.margin = '0';
//         dropdown.style.display = 'none';
//         console.log('Sumiu');
//     }
// }

function SubMenuCell () {
    if (dropdown.style.display = 'none') {
        document.querySelector('.submenu').style.margin = '0px 0px 96px 0';
        dropdown.style.display = 'block';
        console.log('DEu certo')
    } else if (dropdown.style.display = 'block') {
        document.querySelector('.submenu').style.margin = '0';
        dropdown.style.display = 'none';
        console.log('Sumiu');
    }
}
 