const express = require('express')
const app = express()
const borrower = require('./borrower')
const loaner = require('./loaner')
const cors = require('cors');

//CORS
app.use(cors());


// ROUTES
app.get("/user/signup", signup)
app.get("/user/login", login)

app.get("/borrower/view/loaners", viewLoaners)
app.get("/borrower/view/requests", viewLoanRequests)
app.get("/borrower/view/matches", viewMatchesWithLoaners)
app.get("/borrower/send/request", sendBorrowRequest)
app.get("/borrower/accept/request", acceptLoanRequest)
app.get("/borrower/update/profile", updateBorrowerProfile)


app.get("/loaner/view/borrowers", viewBorrowers)
app.get("/loaner/view/requests", viewBorrowRequests)
app.get("/loaner/view/matches", viewMatchesWithBorrowers)
app.get("/loaner/send/request", sendLoanRequest)
app.get("/loaner/accept/request", acceptBorrowRequest)
app.get("/loaner/update/profile", updateLoanerProfile)
app.get("/loaner/update/add_pet", addPet)
app.get("/loaner/update/pet", updatePet)

app.use(express.static('backend/db'))

const port = process.env.PORT || 3000

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})

// WRAPPERS
function signup(res, req) {

}

function login(res, req) {

}

// BORROWER METHODS

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
 * Status is always gonna be success cuz this is a hackathon amirite fam
 *
 *
 * */
function viewLoaners(res, req) {
    req.send(JSON.stringify({
        status: "success",
        results: borrower.viewLoaners(res.query.uid)
    }))
}

function viewLoanRequests(res, req) {

}

function viewMatchesWithLoaners(res, req) {

}

/**
 * Used when borrower wants to borrow pet from loaner
 * ?borrower_uid=________&pet_uid=______________
 *
 * Response is a JSON object
 * {
 *  "status": "success|failure",
 *  "error": "____"
 * }
 * */
function sendBorrowRequest(res, req) {
    borrower.sendRequest(res.query.borrower_uid, res.query.pet_uid)
    req.send(JSON.stringify({
        "status": "success",
        "error": null
    }))
}

function updateBorrowerProfile(res, req) {

}

function acceptLoanRequest(res, req) {
}

// LOANER METHODS

/**
 * Used when loaner wants to view borrowers
 * ?uid=____ where uid is the uid of the PET, NOT THE OWNER
 *
 * Response is JSON of the form
 * {
 *  "status": "success|failure",
 *  "results": [
 *      {
 *          ... stuff goes here
 *      }
 *      ...
 *  ]
 * }
 *
 * Status is always gonna be success cuz this is a hackathon amirite fam
 *
 * */
function viewBorrowers(res, req) {
    req.send(JSON.stringify({
        status: "success",
        results: loaner.viewBorrowers(res.query.uid)
    }))
}

function viewBorrowRequests(res, req) {

}

function viewMatchesWithBorrowers(res, req) {

}

/**
 * Used when borrower wants to borrow pet from loaner
 * ?borrower_uid=________&pet_uid=______________
 *
 * Response is a JSON object
 * {
 *  "status": "success|failure",
 *  "error": "____"
 * }
 * */
function sendLoanRequest(res, req) {
    loaner.sendLoanRequest(res.query.borrower_uid, res.query.pet_uid)
    req.send(JSON.stringify({
        "status": "success",
        "error": null
    }))
}

function updateLoanerProfile(res, req) {

}

function addPet(res, req) {

}

function updatePet(res, req) {

}

function acceptBorrowRequest(res, req) {
}