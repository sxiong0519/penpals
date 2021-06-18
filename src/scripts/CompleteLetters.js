import { writeAuthors, writeLetters, writeRecipients, writeTopics } from "./data.js";

const writePenPalLetters = (letter) => {
    const letters = writeLetters()
    const authors = writeAuthors()
    const recipients = writeRecipients()
    const topics = writeTopics()

    // Remember that the function you pass to find() must return true/false
    const foundAuthor = authors.find(
        (author) => {
            return author.id === letters.authorId
        }
    )
    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === letters.recipientId
        }
    )
    const foundTopics = topics.find(
        (topic) => {
            return topic.id === letters.topicId
        }
    )
    return `<li>
    letters #${letters.id} cost ${costString}
    </li>`
    }
    
    
    





export const Letters = () => {
    const letters = writeLetters()

    let html = '<ul>'

    const listItems = letters.map(letter => {
        return `
        <li>
        Dear ${letter.authorId}
            
        </li>
    `
    
                    })

    html += listItems.join("")
    html += '</ul>'                

    return html
}
