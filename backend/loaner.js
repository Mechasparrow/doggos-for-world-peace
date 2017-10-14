module.exports = {
    viewBorrowers: viewBorrowers,
    sendLoanRequest: sendLoanRequest
}

const db = require('./db')
const geo = require('./geo')

function viewBorrowers(uid) {
    const data = db.read()

    const distance = geo.distance(data.loaners[parseInt(data.pets[uid].owner)])

    const results = data.borrowers.map((borrower) => {
        delete borrower.requests
        delete borrower.auth
        borrower.distance = distance(borrower) / 1000 * 0.62137
        return borrower
    })

    return results.sort((a, b) => a.distance - b.distance)
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