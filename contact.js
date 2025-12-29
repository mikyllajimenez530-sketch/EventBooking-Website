const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been sent.\nSubject: ${subject}\nWe will reply to ${email} soon.`);

  contactForm.reset();
});
