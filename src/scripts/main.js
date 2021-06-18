import { fetchAuthors, fetchRecipients, fetchTopics} from "./data.js"
import { letterForms } from "./LetterForm.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchAuthors().then(
        () => {
            mainContainer.innerHTML = letterForms()
        }
    )
}



mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

fetchAuthors()
.then( 
    fetchTopics()
)
.then(
    fetchRecipients()
)
.then ( () => {
    render()
})