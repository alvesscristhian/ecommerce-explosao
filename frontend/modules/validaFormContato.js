import * as emailjs from '@emailjs/browser';

export default function validaFormContato() {
    emailjs.init("HHdLGyCcyfm2-1h4m");
    const form = document.querySelector('#form-contato');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                name: document.querySelector('[name="name"]').value,
                email: document.querySelector('[name="email"]').value,
                phone: document.querySelector('[name="phone"]').value,
                subject: document.querySelector('[name="subject"]').value,
                message: document.querySelector('[name="message"]').value
            }
            const templateId = 'template_rv486w3';
            const serviceId = 'service_lyb11yl';
            const submitButton = document.querySelector('#submit');
            const feedback = document.querySelector('#feedback');
            submitButton.textContent = "Enviando...";
            submitButton.disabled = true;

            emailjs.send(serviceId, templateId, formData)
                .then(() => {
                    feedback.innerHTML = 'Sua mensagem foi enviada!'
                    feedback.classList.add('cadastrado');

                    setTimeout(() => {
                        feedback.innerHTML = '';
                        feedback.classList.remove('cadastrado');
                    }, 3000)
                })
                .catch((e) => {
                    console.error("Erro no envio", error);
                })
                .finally(() => {
                    submitButton.textContent = "Enviar mensagem"
                    submitButton.disabled = false;
                });
        })
    }
}