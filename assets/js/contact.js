document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      let isValid = true;
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
  
      // Clear previous errors
      document.querySelectorAll('.help-block').forEach(p => p.textContent = '');
  
      // Validate email
      if (!email || !validateEmail(email)) {
        isValid = false;
        emailInput.nextElementSibling.textContent = 'Please enter a valid email.';
      }
  
      // Validate message
      if (!message) {
        isValid = false;
        messageInput.nextElementSibling.textContent = 'Please enter your message.';
      }
  
      if (isValid) {
        // Process form submission
        console.log('Form submitted:', { email, message });
        form.reset();
        alert('Thank you for your message!');
      }
    });
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    }
  });
  