/*
Purpose: Create multiple server paths to access
 
/
/users
/userlist
/name

 */

let http = require('http')
let fs = require('fs')
let users = require('./data.js')

const PORT = 8088

// Create the server and multiple paths below
http.createServer((request, response) => {
    if (request.url === "/") {
        response.write("<h1>NodeJS Web Server at the root</h1>")
        response.write("<p>Welcome to the root path at the server</p>")
        response.end()
    }
    if (request.url == "/users") {
        // Convert from JSON obj to JSON string
        let usersJSON = JSON.stringify(users) // Is this deep enough
        response.write(data)
        response.end()
    }
    if (request.url == "/name") {
        response.writeHead(200, { "Content-Type": "text/html" })
        response.write("<article>Noela Kabundi</article>")
        response.end()
    }
    if (request.url == "/userlist") {
        fs.readFile(__dirname + "/employees.json", "utf-8", (error, data) => {
            response.write(data)
            response.end()
        })
    }
})

server.listen(PORT)
console.log("Server started at port number : ${PORT}")