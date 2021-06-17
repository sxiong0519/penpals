import { ClownRequest } from "./ClownRequest.js"
import { fetchReservations } from "./data.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ClownRequest()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
