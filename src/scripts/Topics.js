import { writeTopics, setTopic } from "./data.js"




document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topic") {
            setTopic(parseInt(event.target.value))
        }
    }
)

export const Topics = () => {
    const topics = writeTopics()

    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = topics.map(topic => {
        return `
        <input type="radio" name="topic" value="${topic.id}" /> ${topic.topic}
        `
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}