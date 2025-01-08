import nervLogoPng from "./images/NERV_Logo.png"
import shinjiPng from "./images/shinji.png"
import shinjiShadowPng from "./images/shinjishadow.png"

export function addHomePage() {
    const content = document.querySelector("#content")
    const homePageContainer = document.createElement("div")
    homePageContainer.classList.add("homePageContainer", "pageContainer")
    content.appendChild(homePageContainer)

    // add nerv logo
    const nervLogo = document.createElement("img")
    nervLogo.classList.add("nervLogo")
    nervLogo.src = nervLogoPng
    homePageContainer.appendChild(nervLogo);    

    //add text
    const homeText = document.createElement("div")
    homeText.classList.add("homeText")

    const businessName = document.createElement("div")
    businessName.classList.add("businessName")
    businessName.textContent = "NERV CAFE"
    homeText.appendChild(businessName)

    const subName = document.createElement("div")
    subName.classList.add("subName")
    subName.textContent = "You are (not) thirsty."
    homeText.appendChild(subName)

    homePageContainer.appendChild(homeText)

    //adding character
    const shinji = document.createElement("img")
    shinji.classList.add("shinji", "char")
    shinji.src = shinjiPng
    homePageContainer.appendChild(shinji);

    const shinjiShadow = document.createElement("img")
    shinjiShadow.classList.add("shinjiShadow", "shadow")
    shinjiShadow.src = shinjiShadowPng
    homePageContainer.appendChild(shinjiShadow);

}