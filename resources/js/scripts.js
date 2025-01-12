const email_field = document.getElementById("email-input");
const error_text = document.getElementById("error-text");
const subscribe_button = document.getElementById("subscribe-button");

// Function to validate email
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Add a click event listener to the submit button:
subscribe_button.addEventListener("click", (event) => {
	event.preventDefault();

	// Validate email input:
	const email_value = email_field.value.trim();

	if (validateEmail(email_value)) {
		email_field.style.border = "1px solid hsl(223, 100%, 88%)";
		error_text.style.display = "none";
		alert(`${email_value} has been added to our mailing list!`);
	} else {
		email_field.style.border = "1px solid hsl(354, 100%, 66%)";
		error_text.style.display = "block";
	}
});
