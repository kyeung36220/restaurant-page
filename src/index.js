import "./styles.css";
import { addHeader } from "./initial.js"
import { addHomePage } from "./homePage.js"
import { addMenuPage } from "./menuPage.js"
import { addContactUsPage } from "./contactUsPage.js"

function initialize() {
    addHeader()
    addHomePage()
    addParallax()

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
        addParallax()
        return
    }

    if (e.target.textContent === "MENU") {
        addMenuPage()
        addParallax()
        return
    }

    if (e.target.textContent === "CONTACT US") {
        addContactUsPage()
        addParallax()
        return
    }
}

function addParallax() {
    document.addEventListener("mousemove", parallax)
    function parallax(e) {
        const character = this.querySelector(".char")
        const shadow = this.querySelector(".shadow")
        const shadowMovement = 5
        const characterMovement = 3

        const shadowX = (window.innerWidth - e.pageX*shadowMovement)/100
        const shadowY = (window.innerHeight - e.pageY*shadowMovement)/100

        const charX = (window.innerWidth - e.pageX*characterMovement)/100
        const charY = (window.innerHeight - e.pageY*characterMovement)/100

        character.style.transform = `translateX(${charX}px) translateY(${charY}px)`
        shadow.style.transform = `translateX(${shadowX}px) translateY(${shadowY}px)`
    }

}
initialize()