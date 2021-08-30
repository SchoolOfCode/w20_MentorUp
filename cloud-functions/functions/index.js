const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

//EXAMPLE
// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore
  .document("/helpRequests/{documentId}")
  .onUpdate((snap, context) => {
    //get original message (text content) and
    // Find the email address associated with the mentor ID (map through your collection until perfect match is found)
    // Once a match is found connect to sendgrid and send message to email address

    // Grab the current value of what was written to Firestore.
    const helpRequest = snap.data().original;

    let mentor = db.doc("helpRequests/" + helpRequest.mentorID).get();

    // Access the parameter `{documentId}` with `context.params`
    functions.logger.log("Uppercasing", context.params.documentId, helpRequest);

    const uppercase = helpRequest.toUpperCase();

    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to Firestore.
    // Setting an 'uppercase' field in Firestore document returns a Promise.
    return snap.ref.set({ uppercase }, { merge: true });
  });
