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