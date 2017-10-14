const express = require('express')
const app = express()
require('./db').init()

// ROUTES
app.get("/user/signup", signup)
app.get("/user/login", login)

app.get("/borrower/view/loaners", viewLoaners)
app.get("/borrower/view/requests", viewLoanRequests)
app.get("/borrower/view/matches", viewMatchesWithLoaners)
app.get("/borrower/send/request", sendBorrowRequest)
app.get("/borrower/update/profile", updateBorrowerProfile)
app.get("/borrower/update/add_pet", addPet)
app.get("/borrower/update/pet", updatePet)

app.get("/loaner/view/borrowers", viewBorrowers)
app.get("/loaner/view/requests", viewBorrowRequests)
app.get("/loaner/view/matches", viewMatchesWithBorrowers)
app.get("/loaner/send/request", sendLoanRequest)
app.get("/loaner/update/profile", updateLoanerProfile)

app.use(express.static('frontend'))

const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})

// WRAPPERS
function signup(res, req) {

}

function login(res, req) {

}

/**
 * Used when a borrower wants to view loaners
 *
 * Request is JSON File of the form
 * {
 *   "id": "132156686486" // uid as a string
 * }
 *
 * Response is JSON of the form
 * {
 *   "status": "success|failure",
 *   "results": [
 *      {
 *          "id": "", // string -- uid of the pet that can be used to get more info upon request
 *          "name": "", // string
 *          "breed": "", // string
 *          "distance": 1000, // In miles
 *          "img": "" // link to image (string)
 *
 *      }
 *      ...
 *   ]
 * }
 *
 * Status is always gonna be success cuz this is a hackathon amirite
 *
 *
 * */
function viewLoaners(res, req) {

}

function viewLoanRequests(res, req) {

}

function viewMatchesWithLoaners(res, req) {

}

function sendBorrowRequest(res, req) {

}

function updateBorrowerProfile(res, req) {

}

function addPet(res, req) {

}

function updatePet(res, req) {

}

function viewBorrowers(res, req) {

}

function viewBorrowRequests(res, req) {

}

function viewMatchesWithBorrowers(res, req) {

}

function sendLoanRequest(res, req) {

}

function updateLoanerProfile(res, req) {

}
