
// Function to show a message when "Reserve a Table" button is clicked
function showMessage() {
    const button = document.querySelector(".hero button");
    if (!button) return; // Exit if button is not found

    // Remove previous message if any
    const prevMsg = document.querySelector(".reservation-msg");
    if (prevMsg) prevMsg.remove();

    // Create a new message element
    const message = document.createElement("p");
    message.textContent = "Reservation request received!";
    message.classList.add("reservation-msg");

    // Display the message below the button
    button.insertAdjacentElement("afterend", message);
}

// Wait for the page to load before accessing DOM elements
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const errorMsg = document.getElementById("resError");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent page refresh on submit

        // Get values from the form fields
        const name = document.getElementById("resName").value.trim();
        const email = document.getElementById("resEmail").value.trim();
        const guests = document.getElementById("resGuests").value.trim();
        const date = document.getElementById("resDate").value;

        // Validate inputs
        if (!name || !email || !guests || !date) {
            errorMsg.textContent = "Please fill in all fields!";
            return;
        }

        if (parseInt(guests) <= 0) {
            errorMsg.textContent = "Number of guests must be at least 1.";
            return;
        }

        // Clear previous error
        errorMsg.textContent = "";

        // Save reservation in localStorage
        const reservation = { name, email, guests, date };
        let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations.push(reservation);
        localStorage.setItem("reservations", JSON.stringify(reservations));

        // Show confirmation to user
        alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} is confirmed.`);

        // Clear the form
        form.reset();
    });
});