module.exports = {
    viewBorrowers: viewBorrowers,
    sendLoanRequest: sendLoanRequest
}

const db = require('./db')

function viewBorrowers(uid) {
    const results = db.read().borrowers.map((borrower) => {
        delete borrower.requests
        delete borrower.auth
        return borrower
    })
    return results
}

function sendLoanRequest(borrower_uid, pet_uid) {
    const data = db.read()

    data.borrowers[borrower_uid].requests.incoming.push({
        timestamp: Date.now(),
        from: pet_uid
    })

    data.pets[pet_uid].requests.outgoing.push({
        timestamp: Date.now(),
        to: borrower_uid
    })

    db.write(data)

    return data
}