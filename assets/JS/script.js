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

function SubMenuCell () {
    if (dropdown.style.display = 'none') {
        document.querySelector('.submenu').classList.add("comMargin");
        dropdown.style.display = 'block';

    } 
}

function TirarMenu () {
        document.querySelector('.submenu').classList.remove("comMargin");
         document.querySelector('.submenu').classList.add("semMargin");
         dropdown.style.display = 'none';
          

}
window.addEventListener('scroll', TirarMenu);


function NãoTirarMenuPc() {
    if (window.screen.width >= 300 && window.screen.width <= 1024) {
        document.querySelector('.teste').style.display = 'none';
        console.log(' tirando menu')
    }
    if (window.screen.width >= 1024) {
        document.querySelector('.teste').style.display = 'flex';
        console.log(' não tirando menu')
    }
}



window.addEventListener('scroll', NãoTirarMenuPc);


