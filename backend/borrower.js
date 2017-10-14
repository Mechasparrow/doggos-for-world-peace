module.exports = {
    viewLoaners: viewLoanerPets,
    sendRequest: sendBorrowRequest
}

function viewLoanerPets(db, uid) {
    return db.ref('/pets/').once('value').then(function (snapshot) {
        return snapshot.val()
    })
}

function sendBorrowRequest(db, borrower_uid, pet_uid) {
    // Update borrower's outgoing requests
    const borrowerUpdate = db.ref(`/borrowers/${borrower_uid}/requests/outgoing`)
        .push({
            "timestamp": Date.now(),
            "to": pet_uid
        })


    // Update pet's incoming requests
    const petUpdate = db.ref(`/pets/${pet_uid}/requests/incoming`)
        .push({
            "timestamp": Date.now(),
            "from": borrower_uid
        })

    return Promise.all([borrowerUpdate, petUpdate])
}