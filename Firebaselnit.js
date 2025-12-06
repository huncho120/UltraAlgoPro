// Initializes Firebase so the app can use Authentication, Firestore, etc.

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
