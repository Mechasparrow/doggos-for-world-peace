module.exports = {
    viewLoaners: viewLoanerPets
}

function viewLoanerPets(db, uid) {
    return db.ref('/pets/').once('value').then(function (snapshot) {
        return snapshot.val()
    })
}