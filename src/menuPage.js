import asukaPng from "./images/asuka.png"
import asukaShadowPng from "./images/asukashadow.png"
import onigiriPng from "./images/onigiri.png"
import tempuraPng from "./images/tempura.png"
import eggBitePng from "./images/eggbite.png"

export function addMenuPage() {
    const content = document.querySelector("#content")
    const menuPageContainer = document.createElement("div")
    menuPageContainer.classList.add("menuPageContainer")

    //add character
    const asuka = document.createElement("img")
    asuka.classList.add("asuka")
    asuka.src = asukaPng
    menuPageContainer.appendChild(asuka);

    const asukaShadow = document.createElement("img")
    asukaShadow.classList.add("asukaShadow")
    asukaShadow.src = asukaShadowPng
    menuPageContainer.appendChild(asukaShadow);

    content.appendChild(menuPageContainer)

    //container for title and items
    const menuItemsContainer = document.createElement("div")
    menuItemsContainer.classList.add("menuItemsContainer")
    menuPageContainer.appendChild(menuItemsContainer)

    //add title
    const menuTitle = document.createElement("div")

}