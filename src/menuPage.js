import asukaPng from "./images/asuka.png"
import asukaShadowPng from "./images/asukashadow.png"
import onigiriPng from "./images/onigiri.png"
import tempuraPng from "./images/tempura.png"
import eggBitePng from "./images/eggbite.png"

export function addMenuPage() {
    const content = document.querySelector("#content")
    const menuPageContainer = document.createElement("div")
    menuPageContainer.classList.add("menuPageContainer", "pageContainer")
    content.appendChild(menuPageContainer)

    //add character
    const asuka = document.createElement("img")
    asuka.classList.add("asuka", "char")
    asuka.src = asukaPng
    menuPageContainer.appendChild(asuka);

    const asukaShadow = document.createElement("img")
    asukaShadow.classList.add("asukaShadow", "shadow")
    asukaShadow.src = asukaShadowPng
    menuPageContainer.appendChild(asukaShadow);

    //container for title and items
    const menuContentContainer = document.createElement("div")
    menuContentContainer.classList.add("menuContentContainer")
    menuPageContainer.appendChild(menuContentContainer)

    //add title
    const menuTitle = document.createElement("div")
    menuTitle.classList.add("menuTitle")
    menuTitle.textContent = "MENU ITEMS"
    menuContentContainer.appendChild(menuTitle)

    //container for all items flex container
    const menuItemsContainer = document.createElement("div")
    menuItemsContainer.classList.add("menuItemsContainer")
    menuContentContainer.appendChild(menuItemsContainer)

    const onigiri = document.createElement("div")
    onigiri.classList.add("onigiri", "item")
    menuItemsContainer.appendChild(onigiri)

    const eggBite = document.createElement("div")
    eggBite.classList.add("eggBite", "item")
    menuItemsContainer.appendChild(eggBite)

    const tempura = document.createElement("div")
    tempura.classList.add("tempura", "item")
    menuItemsContainer.appendChild(tempura)

    //menu items images
    const onigiriImage = document.createElement("img")
    onigiriImage.classList.add("onigiriImage", "image")
    onigiriImage.src = onigiriPng
    onigiri.appendChild(onigiriImage);

    const eggBiteImage = document.createElement("img")
    eggBiteImage.classList.add("eggBiteImage", "image")
    eggBiteImage.src = eggBitePng
    eggBite.appendChild(eggBiteImage);

    const tempuraImage = document.createElement("img")
    tempuraImage.classList.add("tempuraImage", "image")
    tempuraImage.src = tempuraPng
    tempura.appendChild(tempuraImage);

    //menu items text
    const onigiriText = document.createElement("div")
    onigiriText.classList.add("onigiriText", "text")
    onigiriText.textContent = "First Contact Onigiri"
    onigiri.appendChild(onigiriText);

    const eggBiteText = document.createElement("div")
    eggBiteText.classList.add("eggBiteText", "text")
    eggBiteText.textContent = "Lilith's Golden Bite"
    eggBite.appendChild(eggBiteText);

    const tempuraText = document.createElement("div")
    tempuraText.classList.add("tempuraText", "text")
    tempuraText.textContent = "Third Impact Tempura"
    tempura.appendChild(tempuraText);
}