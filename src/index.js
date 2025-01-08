import "./styles.css";
import { addHeader } from "./initial.js"
import { addHomePage } from "./homePage.js"
import { addMenuPage } from "./menuPage.js"
import { addContactUsPage } from "./contactUsPage.js"

function initialize() {
    addHeader()
    addHomePage()

    const nav = document.querySelectorAll(".pageNav .text")
    nav.forEach((button) => {
        button.addEventListener("click", navchange)
    })
}

function navchange(e) {
    //delete previous page
    const container = document.querySelector(".pageContainer")
    container.remove()
    console.log(e.target.textContent)

    if (e.target.textContent === "HOME") {
        addHomePage()
        return
    }

    if (e.target.textContent === "MENU") {
        addMenuPage()
        return
    }

    if (e.target.textContent === "CONTACT US") {
        addContactUsPage()
        return
    }
}
initialize()