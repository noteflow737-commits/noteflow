import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

console.log("Firebase connected");

document.getElementById("loginBtn").addEventListener("click", async () => {
  const studentName = document.getElementById("studentName").value.trim();
  const accessCode = document.getElementById("accessCode").value.trim();

  const snapshot = await getDocs(collection(db, "students"));

  let loginSuccess = false;
  
  snapshot.forEach((doc) => {
    const student = doc.data();

 if (
  student.username === studentName &&
  student.accessCode === accessCode
) {
  if (student.blocked === true) {
    alert("Account Blocked");
    return;
  }

  alert("Login Successful!");
  return;
  if (loginSuccess) {
    alert("Login Successful!");
  } else {
    alert("Invalid Name or Access Code");
  }
});
alert("Invalid Name or Access Code");
