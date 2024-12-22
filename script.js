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
