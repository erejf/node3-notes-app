const fs = require("fs")
const diskFile = "notes.json"
const chalk = require("chalk")

const addNote = (title, body) => {
    const notes = loadNotes(diskFile)
    const duplicated = notes.find((notels) => note.title === title)
    if (!duplicated) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(diskFile, notes)
        console.log(chalk.inverse.green("Note was added"))
    } else {
        console.log(chalk.inverse.red("Note was not added, title: " + title + " is used."))
    }
}

const readNote = (title) => {
    const notes = loadNotes(diskFile)
    const noteToRead = notes.find((note => note.title === title))

    if (noteToRead === undefined){
        console.log(chalk.inverse.red("No note with title: " + title + " to read."))
    } else {
        console.log(chalk.inverse.white(noteToRead.title) + " " + noteToRead.body)
    }
}

const saveNotes = (file, notes) => fs.writeFileSync(file, JSON.stringify(notes))

const loadNotes = (file) => {
    try {
        const dataBuffer = fs.readFileSync(file)
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes(diskFile)
    const noteToRemove = notes.filter((note) => note.title !== title)
    if (noteToRemove.length === notes.length) {
        console.log(chalk.inverse.red("There arent notes to remove"))
    } else {
        saveNotes(diskFile, noteToRemove)
        console.log(chalk.inverse.green("Note with title: " + title + " was removed"))
    }
}

const listNotes = () => {
    const listing = loadNotes(diskFile)
    listing.forEach(note => {
        console.log(chalk.inverse.blue(note.title) + " " + chalk.inverse.yellow(note.body))
    })
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
