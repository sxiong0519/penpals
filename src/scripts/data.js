const penpals = {
    letters: [],
    authors: [],
    topics: [],
    recipients: []
} 

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then(
        (requestLetters) => {
            penpals.letters = requestLetters
        } 
     )
}
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then(
        (requestAuthors) => {
            penpals.authors = requestAuthors
        } 
     )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (requestTopics) => {
            penpals.topics = requestTopics
        } 
     )
}
export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then(response => response.json())
    .then(
        (requestRecipients) => {
            penpals.recipients = requestRecipients
        } 
     )
}

export const writeLetters = () => {
    return [...penpals.letters]
}
export const writeAuthors = () => {
    return [...penpals.authors]
}
export const writeRecipients = () => {
    return [...penpals.recipients]
}
export const writeTopics = () => {
    return [...penpals.topics]
}

export const sendLetters = (userLetters) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetters)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            // ...and this
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}
    