module.exports = {
    viewBorrowers: viewBorrowers
}

function viewBorrowers(db, uid) {
    return db.ref('/borrowers/').once('value').then(function (snapshot) {
        const results = snapshot.val().map((borrower) => {
            delete borrower.auth
            delete borrower.requests
            return borrower
        })
        return results
    })
}
