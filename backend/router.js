const express = require('express')
const app = express()

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
