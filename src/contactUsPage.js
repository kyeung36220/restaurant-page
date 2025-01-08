import reiPng from "./images/rei.png"
import reiShadowPng from "./images/reishadow.png"


export function addContactUsPage() {
    const content = document.querySelector("#content")
    const contactPageContainer = document.createElement("div")
    contactPageContainer.classList.add("contactPageContainer")
    content.appendChild(contactPageContainer)

    // creating flex box for info text
    const infoTextContainer = document.createElement("div")
    infoTextContainer.classList.add("infoTextContainer")
    contactPageContainer.appendChild(infoTextContainer)

    // text inside container
    const contactTitle = document.createElement("div")
    contactTitle.classList.add("contactTitle")
    contactTitle.textContent = "OUR INFO"
    infoTextContainer.appendChild(contactTitle)

    const phoneNumber = document.createElement("div")
    phoneNumber.classList.add("phoneNumber", "text")
    phoneNumber.textContent = "Phone Number: 123-123-1234"
    infoTextContainer.appendChild(phoneNumber)

    const hours = document.createElement("div")
    hours.classList.add("hours", "text")
    hours.textContent = "Hours: Monday-Sunday | 3:00 PM - 9:00 PM"
    infoTextContainer.appendChild(hours)

    const location = document.createElement("div")
    location.classList.add("location", "text")
    location.textContent = "Location: Tokyo-3, Japan 923-0041"
    infoTextContainer.appendChild(location)

    // adding character
    const rei = document.createElement("img")
    rei.classList.add("rei")
    rei.src = reiPng
    contactPageContainer.appendChild(rei);

    const reiShadow = document.createElement("img")
    reiShadow.classList.add("reiShadow")
    reiShadow.src = reiShadowPng
    contactPageContainer.appendChild(reiShadow);
}