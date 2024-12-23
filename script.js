const targets = document.querySelectorAll('.mainContent div');

if (targets.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target; // The observed element

      if (entry.isIntersecting) {
        target.classList.add("loaded");
      } else {
      }
    });
  });

  // Observe each matching element
  targets.forEach((target) => observer.observe(target));
} else {
  console.log('No matching elements found in the DOM');
}

function feedbackSubmit() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('comment');

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  }

function generatePassword() {
    let characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (document.getElementById('specialCharacters').checked) {
        characters += '!@#$%^&*()_+';
    }
    let password = '';
    const length = 12; // Desired password length

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').innerText = password;
}


// copy to clipboard
function copyToClipboard() {
    const password = document.getElementById('password').innerText;
    navigator.clipboard.writeText(password).then(() => {
        console.log('Password copied to clipboard');
        // set the element to "Success" for 2 seconds
        document.getElementById('copy').innerText = 'Copied!';
        setTimeout(() => {
            document.getElementById('copy').innerText = 'Copy to clipboard';
        },
        1000);

    });
}
