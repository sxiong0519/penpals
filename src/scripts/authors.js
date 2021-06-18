import { writeAuthors } from "./data.js";



export const Authors = () => {
    const authors = writeAuthors()

    let html = "<ul>"

    const listItemsArray = authors.map(author => {
        return `<li>
        <option value="${author.id}"> ${author.name}
        </option>
        </li>`
        }
    )
    html += listItemsArray.join("")

    html += "</ul>"
    return html

}