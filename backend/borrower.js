module.exports = {
    viewLoaners: viewLoanerPets,
    sendRequest: sendBorrowRequest
}

const db = require('./db')
const geo = require('./geo')

function viewLoanerPets(uid) {
    const data = db.read()

    const distance = geo.distance(data.borrowers[uid])

    const results = data.pets.map((pet) => {
        delete pet.requests
        pet.distance = distance(data.loaners[parseInt(pet.owner)]) / 1000 * 0.62137
        return pet
    })

    return results.sort((a, b) => a.distance - b.distance)
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