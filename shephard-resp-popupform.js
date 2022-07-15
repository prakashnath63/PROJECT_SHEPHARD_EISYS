
// hamburger slide menu bar for responsive

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

// popup login/signup page

let formbtn = document.querySelector('.buttons');
let loginform = document.querySelector('.loginformcontainer');
let formclose = document.querySelector('#formclose');

window.onscroll = ()=>{
    loginform.classList.remove('active');
}
formbtn.addEventListener('click',()=>{
    loginform.classList.add('active');
});
formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');
});