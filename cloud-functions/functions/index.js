const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(functions.config().sendgrid.key);

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.sendEmail = functions.firestore
  .document("/helpRequests/{documentId}")
  .onCreate((snap, context) => {
    // get original message (text content) and
    // Find the email address associated with the mentor ID
    // (map through your collection until perfect match is found)
    // Once a match is found connect to sendgrid
    // and send message to email address

    // Grab the current value of what was written to Firestore.
    const helpRequest = snap.data();

    db.collection("userData")
      .where("authenticationID", "==", helpRequest.mentorID)
      .where("type", "==", "mentor")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          // no result, so return since we cannot do anything
          console.log(
            "Could not find a matching record for " + helpRequest.mentorID
          );
          return;
        } else {
          // grab out the first record from our query above
          const mentorData = snapshot.docs[0].data();

          const msg = {
            to: `${mentorData.email}`,
            from: "catclaclou@hotmail.fr",
            subject: "Help Request from a new mentee",
            text: helpRequest.message,
            html: helpRequest.message,
          };

          console.log("The email is:" + mentorData.email);
          console.log("The text is:" + helpRequest.message);
          console.log("The html is:" + helpRequest.message);

          return sgMail
            .send(msg)
            .then(() => {
              console.log("Sent email successfully!");
            })
            .catch((e) => {
              console.log("Could not send the email because of: " + e);
            });
        }
      });
  });
