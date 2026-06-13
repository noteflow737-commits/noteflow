import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
getDocs,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "noteflow-9aa06.firebaseapp.com",
projectId: "noteflow-9aa06",
storageBucket: "noteflow-9aa06.firebasestorage.app",
messagingSenderId: "459942250903",
appId: "1:459942250903:web:46036bf79f951f1ca91cd2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getDeviceId() {
let id = localStorage.getItem("deviceId");

if (!id) {
id = crypto.randomUUID();
localStorage.setItem("deviceId", id);
}

return id;
}

document.getElementById("loginBtn").addEventListener("click", async () => {

const username = document.getElementById("studentName").value.trim();
const accessCode = document.getElementById("accessCode").value.trim();

const snapshot = await getDocs(collection(db, "students"));

const deviceId = getDeviceId();

for (const studentDoc of snapshot.docs) {

```
const student = studentDoc.data();

if (
  student.username === username &&
  student.accessCode === accessCode
) {

  if (student.blocked === true) {
    alert("Account Blocked");
    return;
  }

  if (!student.deviceId) {

    await updateDoc(
      doc(db, "students", studentDoc.id),
      {
        deviceId: deviceId
      }
    );

    window.location.href = "classes.html";
    return;
  }

  if (student.deviceId === deviceId) {
    window.location.href = "classes.html";
    return;
  }

  alert("This account is already being used on another device.");
  return;
}
```

}

alert("Invalid Name or Access Code");
});
