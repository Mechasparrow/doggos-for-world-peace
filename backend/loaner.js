module.exports = {
    viewBorrowers: viewBorrowers,
    sendLoanRequest: sendLoanRequest,
    acceptRequest: acceptRequest
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

function acceptRequest(pet_uid, request_uid) {
    const data = db.read()

    const borrower_uid = data.pets[pet_uid].requests.incoming[request_uid].from

    data.pets[pet_uid].requests.incoming.splice(request_uid, 1)
    const removal_idxs = []
    data.borrowers[borrower_uid].requests.outgoing.map(function (req, idx) {
        if (req.to === pet_uid) {
            removal_idxs.push(idx)
        }
    })

    removal_idxs.map((idx) => {
        data.borrowers[borrower_uid].requests.outgoing = data.borrowers[borrower_uid].requests.outgoing.splice(idx, 1)
    })

    data.pets[pet_uid].requests.matches.push(borrower_uid)
    data.borrowers[borrower_uid].requests.matches.push(pet_uid)

    db.write(data)

    return data
}