const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(functions.config().sendgrid.key);

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const userDb = admin.auth();

exports.sendEmail = functions.firestore
  .document("/helpRequests/{documentId}")
  .onCreate((snap, context) => {
    // get original message (text content) and

    // Grab the current value of what was written to Firestore.
    const helpRequest = snap.data();

    // Find the email address associated with the mentor ID
    db.doc("userData/" + helpRequest.mentorID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          // grab out the first record from our query above
          const mentorData = snapshot.data();

          userDb.getUser(mentorData.authenticationID).then((userRecord) => {
            if (userRecord === null) {
              console.log(
                "Could not find a matching user record for " +
                  mentorData.authenticationID
              );
              return;
            }

            // now the auth user is found use the email on that record to send

            // connect to sendgrid
            // and send message to email address
            const msg = {
              to: `${userRecord.email}`,
              from: "catclaclou@hotmail.fr",
              subject: "Help Request from a new mentee",
              text: helpRequest.message,
              html: helpRequest.message,
            };

            console.log("The email is:" + userRecord.email);
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
          });
        } else {
          // no result, so return since we cannot do anything
          console.log(
            "Could not find a matching record for " + helpRequest.mentorID
          );
          return;
        }
      });
  });
