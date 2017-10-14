module.exports = {
    viewLoaners: viewLoanerPets,
    sendRequest: sendBorrowRequest
}

const db = require('./db')

function viewLoanerPets(uid) {
    const results = db.read().pets.map((pet) => {
        delete pet.requests
        return pet
    })
    return results
}

function sendBorrowRequest(borrower_uid, pet_uid) {
    const data = db.read()

    data.borrowers[borrower_uid].requests.outgoing.push({
        timestamp: Date.now(),
        to: pet_uid
    })

    data.pets[pet_uid].requests.incoming.push({
        timestamp: Date.now(),
        from: borrower_uid
    })

    db.write(data)

    return data
}