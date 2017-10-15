module.exports = {
    viewLoaners: viewLoanerPets,
    sendRequest: sendBorrowRequest,
    acceptRequest: acceptRequest
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

function acceptRequest(borrower_uid, request_uid) {
    const data = db.read()

    console.log(data.borrowers[parseInt(borrower_uid)])

    const pet_uid = data.borrowers[parseInt(borrower_uid)].requests.incoming[parseInt(request_uid)].from
    console.log(pet_uid);

    data.borrowers[parseInt(borrower_uid)].requests.incoming.splice(parseInt(request_uid), 1)
    const removal_idxs = []
    data.pets[pet_uid].requests.outgoing.map(function (req, idx) {
        if (req.to === borrower_uid)
            removal_idxs.push(idx)
    })

    removal_idxs.map((idx) => {
        data.pets[pet_uid].requests.outgoing.splice(idx, 1)
    })

    data.pets[pet_uid].requests.matches.push(borrower_uid)
    data.borrowers[borrower_uid].requests.matches.push(pet_uid)

    db.write(data)

    return data
}
