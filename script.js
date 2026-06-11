dimport { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM8zmBFYHixjn6mF8Sdr98Bz-pZruoZpo",
  authDomain: "noteflow-9aa06.firebaseapp.com",
  projectId: "noteflow-9aa06",
  storageBucket: "noteflow-9aa06.firebasestorage.app",
  messagingSenderId: "459942250903",
  appId: "1:459942250903:web:46036bf79f951f1ca91cd2",
  measurementId: "G-532ZZEWX8T"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase connected");
