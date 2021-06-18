import { writeAuthors, writeLetters, writeRecipients, writeTopics } from "./data.js";

export const Letters = () => {
    const letters = writeLetters()
    const authors = writeAuthors()
    const recipients = writeRecipients()
    const topics = writeTopics()

    let html = '<ul>'

    const listItems = letters.map(letter => {
        const foundAuthor = authors.find(
            (author) => {
                return author.id === parseInt(letter.authorId)
            }
        )
        const foundRecipient = recipients.find(
            (recipient) => {
                return recipient.id === parseInt(letter.recipientId)
            }
        )
        const foundTopic = topics.find(
            (topic) => {
                return topic.id === parseInt(letter.topicId)
            }
        )
        return `<li>
        letters #${foundAuthor.name} ${foundAuthor.email} ${foundRecipient.name} ${foundTopic.topic} ${letter.letters}
        </li>`
        }
    )

    html += listItems.join("")
    html += '</ul>'                

    return html
}
