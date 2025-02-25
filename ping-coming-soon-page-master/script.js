document.getElementById("submit").addEventListener("click", function () {
    validateEmail();
});

function validateEmail() {
    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("err");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = "red";
        emailInput.style.color = "red";
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.style.color = "red";
    } else {
        emailInput.classList.remove("invalid");
        errorMsg.textContent = "";
        emailInput.style.borderColor = "blue";
        emailInput.style.color = "blue";

    }
}