// Step 1: Reserve a Table button 
function showMessage() {
    // Remove any previous message
    const prevMsg = document.querySelector(".reservation-msg");
    if (prevMsg) prevMsg.remove();
    const prevMsg = document.querySelector(".reservation-msg");
    if (prevMsg) prevMsg.remove();
    // Create new message
    const message = document.createElement("p");
    message.textContent = "Thank you! Your table reservation request has been received.";
    message.classList.add("reservation-msg", "success-msg");
    // Add message below the button
    const button = document.querySelector(".hero button");
    button.insertAdjacentElement("afterend", message);
}
    // Contact form validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    if (!form) return;

    const errorMsg = document.getElementById("resError");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
         const name = document.getElementById("resName").value.trim();
        const email = document.getElementById("resEmail").value.trim();
        const guests = document.getElementById("resGuests").value.trim();
        const date = document.getElementById("resDate").value;


         if (!name || !email || !guests || !date) {
            errorMsg.textContent = "Please fill in all fields!";
            return;
        }

        if (parseInt(guests) <= 0) {
            errorMsg.textContent = "Number of guests must be at least 1.";
            return;
        }
         errorMsg.textContent = "";
        alert("Validation passed!"); 
    });
});

    
    
