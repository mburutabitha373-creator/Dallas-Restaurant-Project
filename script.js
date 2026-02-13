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
    
    
