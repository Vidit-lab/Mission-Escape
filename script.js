// Define the correct secret key
const correctKey = "12345";

function checkKey() {
    const userInput = document.getElementById("secretKey").value;
    const message = document.getElementById("message");

    // Check if the entered key matches the correct key
    if (userInput === correctKey) {
        // Redirect to a new page if the key is correct
        window.location.href = "success.html";
    } else {
        // Show an error message if the key is incorrect
        message.textContent = "Invalid Key";
    }
}
