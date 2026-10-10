/*

*/
const express = require('express')
const router = express.Router()

router.route("/java")
    .post((request, response) => {
        response.send("Used POST method was used - /books/computers/java")
    })

    router.route("/python")
    .put((request, response) => {
        response.send("Used PUT method was used - /books/computers/python")
    })

    router.route("/game-dev")
    .get((request, response) => {
        response.send("Used GET method was used - /books/computers/game-dev")
    })

module.exports = router