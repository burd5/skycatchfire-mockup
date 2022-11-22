import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA-UGJdODDcXAELT4jl0xcZF9c7g9E6ok0",
  authDomain: "skycatchfire-e73c6.firebaseapp.com",
  projectId: "skycatchfire-e73c6",
  storageBucket: "skycatchfire-e73c6.appspot.com",
  messagingSenderId: "971477979102",
  appId: "1:971477979102:web:998f3521192f4e1cf7574f",
  measurementId: "G-52FGQN46YF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPortfolio(db) {
  const portCol = collection('portfolio');
  const portSnapshot = await getDocs(portCol);
  const portList = portSnapshot.docs.map(doc => doc.data());
  console.log(portList);
}

export default db;