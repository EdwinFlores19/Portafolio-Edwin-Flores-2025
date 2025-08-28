// --- Elementos del DOM ---
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const statusSending = document.getElementById('status-sending');
const statusSuccess = document.getElementById('status-success');
const statusError = document.getElementById('status-error');

// --- Claves de EmailJS desde Variables de Entorno ---
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// --- Manejo de Estados de la UI ---
const uiStates = {
  idle: () => {
    submitBtn.style.display = 'block';
    statusSending.style.display = 'none';
    statusSuccess.style.display = 'none';
    statusError.style.display = 'none';
  },
  sending: () => {
    submitBtn.style.display = 'none';
    statusSending.style.display = 'block';
    statusSuccess.style.display = 'none';
    statusError.style.display = 'none';
  },
  success: () => {
    submitBtn.style.display = 'none';
    statusSending.style.display = 'none';
    statusSuccess.style.display = 'block';
    statusError.style.display = 'none';
  },
  error: () => {
    submitBtn.style.display = 'block';
    statusSending.style.display = 'none';
    statusSuccess.style.display = 'none';
    statusError.style.display = 'block';
  }
};

// --- Lógica de Envío del Formulario ---
if (contactForm) {
  uiStates.idle(); // Asegurar estado inicial

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar que las claves existan antes de intentar enviar
    if (!publicKey || !serviceID || !templateID) {
      console.error("EmailJS keys are not configured. Please check your .env file and hosting environment variables.");
      uiStates.error();
      return;
    }

    uiStates.sending();

    emailjs.sendForm(serviceID, templateID, this, publicKey)
      .then(() => {
        uiStates.success();
        contactForm.reset();
        setTimeout(() => { 
          uiStates.idle();
        }, 5000);
      }, (err) => {
        uiStates.error();
        console.error('FAILED...', err);
      });
  });
} else {
  console.log("Contact form not found on this page.");
}
