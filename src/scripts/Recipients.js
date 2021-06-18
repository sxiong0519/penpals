import { writeRecipients } from "./data.js";



export const Recipients = () => {
    const recipients = writeRecipients()

    let html = "<ul>"

    const listItemsArray = recipients.map(recipient => {
        return `<li>
        <option value="${recipient.id}"> ${recipient.name}
        </option>
        </li>`
        }
    )
    html += listItemsArray.join("")

    html += "</ul>"
    return html

}