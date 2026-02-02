document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let position = document.getElementById("position").value;
    let skills = document.getElementById("skills").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" || position === "" || skills === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
    } else {
        message.style.color = "green";
        message.innerText = "Application submitted successfully!";
        document.getElementById("jobForm").reset();
    }
});
