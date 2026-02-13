//  Reserve a Table button
function showMessage() {
     const prevMsg = document.querySelector(".reservation-msg");
    if (prevMsg) prevMsg.remove();
      const message = document.createElement("p");
    message.textContent = "Thank you! Your table reservation request has been received.";
    message.style.color = "green";
    message.classList.add("reservation-msg");

    // Add message below the button
    const button = document.querySelector(".hero button");
    button.insertAdjacentElement("afterend", message);
}