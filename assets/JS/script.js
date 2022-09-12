function ScrollUp () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

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

// function HeaderPosition () {
//     if (window.scrollY == 0) {
//         header.style.position = 'static';
//     } else {
//         header.style.position = 'fixed';
//         document.querySelector('main').style.paddingTop = '100px';
//     }
// }
window.addEventListener('scroll', HeaderPosition);
 