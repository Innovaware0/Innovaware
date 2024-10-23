// Seleccionamos los divs
const divs = document.querySelectorAll('.personas, .negociacion, .estrategia, .button');

// Función para cambiar tamaño al pasar el mouse
divs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.transform = 'scale(1.1)'; // Aumenta el tamaño
        div.style.transition = 'transform 0.3s'; // Añade una transición suave
    });

    div.addEventListener('mouseleave', () => {
        div.style.transform = 'scale(1)'; // Restaura el tamaño original
    });
});


// Mostrar/Ocultar botón al desplazarse
window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Mostrar el botón
    } else {
        button.style.display = "none"; // Ocultar el botón
    }
};

// Ir hacia arriba al hacer clic
document.getElementById('backToTop').onclick = function() {
    window.scrollTo({top: 40, behavior: 'smooth'}); // Desplazamiento suave
};

function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Usar la función al hacer clic
document.getElementById('backToTop').onclick = function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado
    smoothScrollTo(0, 1000); // Cambia 1000 por la duración en milisegundos
};