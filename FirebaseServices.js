// Provides Firebase Authentication and Firestore access for the app

import app from "./firebaseInit";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc 
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

// Register user
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login user
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Save subscription status
export const saveSubscription = async (uid, data) => {
  await setDoc(doc(db, "subscriptions", uid), data);
};

// Get subscription status
export const getSubscription = async (uid) => {
  const ref = doc(db, "subscriptions", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};

export { auth, db };
