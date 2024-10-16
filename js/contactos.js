document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Formulario enviado:", {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        });

        // Mostrar el pop-up
        overlay.style.display = 'block';
        popup.style.display = 'block';

        form.reset(); // Limpiar el formulario después de enviar
    });

    // Cerrar el pop-up
    document.getElementById('closePopup').onclick = function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    };

    // Cerrar el pop-up al hacer clic en la superposición
    overlay.onclick = function() {
        this.style.display = 'none';
        popup.style.display = 'none';
    };
});
