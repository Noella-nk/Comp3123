/*
Use Express routes to serve the page
app.use
*/

const express = require('express')
const fs = require('fs')
var dateFormat = require('dateformat')

var books = require('books.json')

var computers = require('computers.json')

const app = express()
const router = express.Router()

//Helper functions ------------------
let writeData =  (data) => {
    data += "\n"
    fs.appendFile("server_log.txt", data, function (error){
        if (error) {
            throw error
        }
        console.log("Log saved!")

    })
}

// Callback for the server 
let logger = (request, response, next) => { 
    const todays = dateFormatt(Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
    let data = `[${todays} ${request.method} ${request.url}]`
    writeData(data)
    next()
}

//-----------------------------------
app.use(logger)

let booksLogger = (request, response, next) => {
    console.log("Books logger called")
    next()
}

app.use("/books", booksLogger, books)
app.use("/books/computers", computers)

app.listen(process.env.PORT || 8080)
console.log("Web Server is listening at port: "+ 8080)