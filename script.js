const chalk = require("chalk")
const error = chalk.bold.red
const yargs = require("yargs")
const create = require("./utils.js")
const notes = require("./notes.js")
const fs = require("fs")

yargs.command({
    command: "add",
    description: "Note was added",
    builder: {
        title: {
            describe: "New title is:",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Body options",
            demandOption: true,
            type: "string"
        }
    },
    handler(event) {
        notes.addNote(event.title, event.body)
    }
})

yargs.command({
    command: "remove",
    description: "Note was removed",
    builder: {
        title: {
            describe: "removing a note",
            type: "string",
            demandOption: true
        }
    },
    handler(event) {
        notes.removeNote(event.title)
    }
})

yargs.command({
    command: "read",
    description: "Note was readed",
    builder: {
         title: {
             describe: "",
             type: "string",
             demandOption: true
      },
    },
    handler: (event) => {
        notes.readNote(event.title)
        }
})

yargs.command({
    command: "list",
    description: "Note was listed",
    handler() {
        notes.listNotes()
    }
})

yargs.parse()



