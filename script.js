// TIME DISPLAY
const timeEl = document.getElementById("time");

if (timeEl) {
  function updateTime() {
    timeEl.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    successMessage.hidden = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Clear old errors
    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
    });

    // Validate fields
    if (name.value.trim() === "") {
      document.getElementById("error-name").textContent =
        "Full name is required.";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      document.getElementById("error-email").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      document.getElementById("error-email").textContent =
        "Please enter a valid email address.";
      isValid = false;
    }

    if (subject.value.trim() === "") {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      isValid = false;
    }

    // If valid, show success
    if (isValid) {
      contactForm.reset();
      successMessage.hidden = false;
    }
  });
}
