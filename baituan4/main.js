const menu = document.querySelector(".menu1")
const menu2 = document.querySelector(".menu2")
const menu3 = document.querySelector(".menu3")
const menu4 = document.querySelector(".menu4")
const menu5 = document.querySelector(".menu5")
const menuButton = document.querySelector(".icon1")
const menuButton2 = document.querySelector(".icon2")
const menuButton3 = document.querySelector(".icon3")
const menuButton4 = document.querySelector(".icon4")
const menuButton5 = document.querySelector(".icon5")
menuButton.addEventListener('mouseenter',()=>{
    menu.classList.toggle("menu__open")
} )
menuButton2.addEventListener('mouseenter',()=>{
    menu2.classList.toggle("menu__open2")
} )
menuButton3.addEventListener('mouseenter',()=>{
    menu3.classList.toggle("menu__open3")
} )
menuButton4.addEventListener('mouseenter',()=>{
    menu4.classList.toggle("menu__open4")
} )
menuButton5.addEventListener('mouseenter',()=>{
    menu5.classList.toggle("menu__open5")
} )