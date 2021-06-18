// import { sendLetters } from "./data.js"
import { Authors } from "./authors.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipients.js"


// const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", clickEvent => { //when something in the maincontainer is clicked - maincontainer is referenced in main.js
//     if (clickEvent.target.id === "submitRequest") { //the button below
//         // Get what the user typed into the form fields
//         const parent = document.querySelector("input[name='parentName']").value //the input value of description is = to userDescription
//         const child = document.querySelector("input[name='childName']").value // ""
//         const party = document.querySelector("input[name='attendants']").value
//         const location = document.querySelector("input[name='address']").value // ""
//         const userDate = document.querySelector("input[name='serviceDate']").value // ""
//         const time = document.querySelector("input[name='duration']").value // ""
        
//         // Make an object out of the user input
//         const dataToSendToAPI = {
//             parentName: parent,
//             childName: child,
//             attendants: party,
//             address: location,
//             date: userDate,
//             duration: time
//         }
//         // Send the data to the API for permanent storage
//         sendRequest(dataToSendToAPI)
//     }
// })



export const letterForms = () => {
    let html = `
    <h1>PenPals Letter</h1>
    
        <div class="field">
            <label class="label" for="authors">Authors</label>
            <div class="dropdown">
            <select name="authors" id="authors" class="dropdown">
            <option>Choose Author.... </option>
            ${Authors()}
            </select>
            </div>
        </div>
        <div class="field">
            <label class="label" for="Letter">Letter</label>
            <input type="text" name="Letter" class="input" />
        </div>
        <div class="choices__topics options">
                Topics
                ${Topics()}
        </div>
        <div class="field">
            <label class="label" for="recipients">Recipients</label>
            <div class="dropdown">
            <select name="recipients" id="recipients" class="dropdown">
            <option>Choose Recipient.... </option>
            ${Recipients()}
            </select>
            </div>
        </div>

        <button class="button" id="submitRequest">Send Letter</button>
    `

    return html
}