import { sendLetters } from "./data.js"
import { Authors } from "./authors.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipients.js"
import { Letters } from "./CompleteLetters.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => { //when something in the maincontainer is clicked - maincontainer is referenced in main.js
    if (clickEvent.target.id === "submitRequest") { //the button below
        // Get what the user typed into the form fields
        const authorId = document.getElementById("authors").value//the input value of description is = to userDescription
        const letter = document.getElementById("letter").value // ""
        const topicId = document.querySelector("input[name='topic']").value
        const recipientId = document.getElementById("recipients").value // ""
        
        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: authorId,
            letters: letter,
            topicId: topicId,
            recipientId: recipientId,
            timestamp: Date.now()
        }
        // Send the data to the API for permanent storage
        sendLetters(dataToSendToAPI)
    }
})



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
            <label class="label" for="bodyLetter">Letter</label>
            <div>
            <textarea id="letter" type="text" name="Letter" class="textarea"></textarea>
            </div>
        </div>
        <div id="topics" name="topics" class="topics">
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

        <div class="field">
        <label>Letters</label>
        ${Letters()}
        </div>
    `

    return html
}