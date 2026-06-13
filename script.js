import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
getDocs,
doc,
updateDoc
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

function getDeviceId() {
let deviceId = localStorage.getItem("deviceId");

if (!deviceId) {
deviceId = crypto.randomUUID();
localStorage.setItem("deviceId", deviceId);
}

return deviceId;
}

document.getElementById("loginBtn").addEventListener("click", async () => {

const studentName = document.getElementById("studentName").value.trim();
const accessCode = document.getElementById("accessCode").value.trim();

const snapshot = await getDocs(collection(db, "students"));
const currentDeviceId = getDeviceId();

let found = false;

for (const studentDoc of snapshot.docs) {

```
const student = studentDoc.data();

if (
  student.username === studentName &&
  student.accessCode === accessCode
) {

  found = true;

  if (student.blocked === true) {
    alert("Account Blocked");
    return;
  }

  if (!student.deviceId) {

    await updateDoc(
      doc(db, "students", studentDoc.id),
      {
        deviceId: currentDeviceId
      }
    );

    window.location.href = "classes.html";
    return;
  }

  if (student.deviceId === currentDeviceId) {
    window.location.href = "classes.html";
    return;
  }

  alert("This account is already being used on another device.");
  return;
}
```

}

if (!found) {
alert("Invalid Name or Access Code");
}
});
