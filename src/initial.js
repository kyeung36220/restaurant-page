import evaLogoPng from "./images/logo.png";
import mangaBannerPng from "./images/mangaBanner.png"

export function addHeader() {

    //adding Evangelion Logo on top right
    const header = document.querySelector("nav")
    const evaLogo = document.createElement("img")
    evaLogo.classList.add("evaLogo")
    evaLogo.src = evaLogoPng

    evaLogo.addEventListener("click", () => {
        window.location.reload()
    })

    header.appendChild(evaLogo);

    //adding navigation text
    const pageNav = document.createElement("div")
    pageNav.classList.add("pageNav")
    const home = document.createElement("div")
    home.textContent = "HOME"
    home.classList.add("text", "homeNav")
    const menu = document.createElement("div")
    menu.textContent = "MENU"
    menu.classList.add("text", "menuNav")
    const contactUs = document.createElement("div")
    contactUs.textContent = "CONTACT US"
    contactUs.classList.add("text", "contactUsNav")

    header.appendChild(pageNav)
    pageNav.appendChild(home)
    pageNav.appendChild(menu)
    pageNav.appendChild(contactUs)

    //adding manga banner
    const content = document.querySelector("#content")
    const mangaBanner = document.createElement("img")
    mangaBanner.classList.add("mangaBanner")
    mangaBanner.src = mangaBannerPng
    content.appendChild(mangaBanner)

}