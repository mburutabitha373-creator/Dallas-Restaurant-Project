// Reserve a Table Button
function showMessage() {
    const button = document.querySelector(".hero button");
    if (!button) return;

    const prevMsg = document.querySelector(".reservation-msg");
    if (prevMsg) prevMsg.remove();

    const message = document.createElement("p");
    message.textContent = "Reservation request received!";
    message.classList.add("reservation-msg");
    button.insertAdjacentElement("afterend", message);
}

// Form validation and localStorage
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const errorMsg = document.getElementById("resError");

    if (!form) return; // Exit if no form on page

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("resName").value.trim();
        const email = document.getElementById("resEmail").value.trim();
        const guests = document.getElementById("resGuests").value.trim();
        const date = document.getElementById("resDate").value;

        // Validation
        if (!name || !email || !guests || !date) {
            errorMsg.textContent = "Please fill in all fields!";
            return;
        }
        if (parseInt(guests) <= 0) {
            errorMsg.textContent = "Number of guests must be at least 1.";
            return;
        }

        errorMsg.textContent = "";

        // Save reservation to localStorage
        const reservation = { name, email, guests, date };
        let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations.push(reservation);
        localStorage.setItem("reservations", JSON.stringify(reservations));

        // Success feedback
        alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} is confirmed.`);

        form.reset();
    });

    // Display reservations if reservationList exists
    const list = document.getElementById("reservationList");
    if (list) {
        const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations.forEach(r => {
            const li = document.createElement("li");
            li.textContent = `${r.name} - ${r.guests} guests on ${r.date}`;
            list.appendChild(li);
        });
    }
});