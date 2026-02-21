document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = contactForm.elements.name.value.trim();

  formMessage.textContent = `شكراً ${name}، تم استلام رسالتك بنجاح.`;
  contactForm.reset();
});
