const express = require('express')
const app = express()
const db = require('./db').init()
const borrower = require('./borrower')

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
 * Request has a param ?uid=______ where uid is the uid of the borrower
 *
 * Response is JSON of the form
 * {
 *   "status": "success|failure",
 *   "results": [
 *      {
 *          ... literally all the crap about the pet goes here
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
    borrower.viewLoaners(db, res.query.uid).then(function (data) {
        req.send(JSON.stringify({
            status: "success",
            results: data
        }))
    })
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
