import { db } from "./firebase-init";

export const checkIfExistingUSerElseAddUser = (user) => {
  db.collection("users")
    .where("uid", "in", [user.uid])
    .onSnapshot((snapshot) => {
      if (
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })).length === 0
      ) {
        const userRef = db.doc(`users/${user.uid}`);
        const data = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        userRef.set(data, { merge: true });
      }
    });
};
