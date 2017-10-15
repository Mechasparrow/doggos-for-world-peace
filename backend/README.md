NOTE: most of these aren't implemented yet.

ALSO --- the view loaners/view borrowers method will give a distance field in addition to geo. Distance is converted to miles for convenience.

```
app.get("/user/signup", signup)
app.get("/user/login", login)


/**
 * Used when a borrower wants to view loaners
 *
 * Request has a param ?uid=______ where uid is the uid of the borrower
 *
 * Response is JSON of the form
 * {
 *   "status": "success|failure",
 *   "results": [
 *      {
 *          ... literally all the crap about the pet goes here
 *      }
 *      ...
 *   ]
 * }
 *
 * Status is always gonna be success cuz this is a hackathon amirite fam
 *
 *
 * */
 
app.get("/borrower/view/loaners", viewLoaners)
app.get("/borrower/view/requests", viewLoanRequests)
app.get("/borrower/view/matches", viewMatchesWithLoaners)

/**
 * Used when borrower wants to borrow pet from loaner
 * ?borrower_uid=________&pet_uid=______________
 *
 * Response is a JSON object
 * {
 *  "status": "success|failure",
 *  "error": "____"
 * }
 **/
app.post("/borrower/send/request", sendBorrowRequest)

/**
 * Used when borrower wants to accept an incoming request from a loaner
 * ?request_uid=_______&borrower_uid
 * where request_uid is the index (uid) of the request in the borrower's incoming requests queue
 *
 * Returns generic success message
 * */

app.post("/borrower/accept/request", acceptLoanRequest)
app.get("/borrower/update/profile", updateBorrowerProfile)


/**
 * Used when loaner wants to view borrowers
 * ?uid=____ where uid is the uid of the PET, NOT THE OWNER
 *
 * Response is JSON of the form
 * {
 *  "status": "success|failure",
 *  "results": [
 *      {
 *          ... stuff goes here
 *      }
 *      ...
 *  ]
 * }
 *
 * Status is always gonna be success cuz this is a hackathon amirite fam
 *
 * */

app.get("/loaner/view/borrowers", viewBorrowers)
app.get("/loaner/view/requests", viewBorrowRequests)
app.post("/loaner/view/matches", viewMatchesWithBorrowers)

/**
 * Used when borrower wants to borrow pet from loaner
 * ?borrower_uid=________&pet_uid=______________
 *
 * Response is a JSON object
 * {
 *  "status": "success|failure",
 *  "error": "____"
 * }
 * */

app.get("/loaner/send/request", sendLoanRequest)
app.get("/loaner/accept/request", acceptBorrowRequest)
app.get("/loaner/update/profile", updateLoanerProfile)
app.get("/loaner/update/add_pet", addPet)
app.get("/loaner/update/pet", updatePet)

```