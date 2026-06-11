document.getElementById("loginBtn").addEventListener("click", () => {
    const studentName = document.getElementById("studentName").value;
    const accessCode = document.getElementById("accessCode").value;

    console.log("Student:", studentName);
    console.log("Code:", accessCode);

    alert("Login button works!");
});
