document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('theme-toggle');

    // 1. EVALUAR HORA DEL DÍA
    // De 7:00 AM (7) a 6:59 PM (18) = Modo Claro
    // De 7:00 PM (19) a 6:59 AM (6) = Modo Oscuro
    function aplicarTemaPorHora() {
        const horaActual = new Date().getHours(); 
        
        if (horaActual >= 19 || horaActual < 7) {
            document.body.classList.add('dark-theme');
            if (themeToggle) themeToggle.innerHTML = "☀️ Claro";
        } else {
            document.body.classList.remove('dark-theme');
            if (themeToggle) themeToggle.innerHTML = "🌙 Oscuro";
        }
    }

    // Ejecutar al cargar la página
    aplicarTemaPorHora();

    // 2. CAMBIO MANUAL AL HACER CLIC EN EL BOTÓN
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.innerHTML = "☀️ Claro";
            } else {
                themeToggle.innerHTML = "🌙 Oscuro";
            }
        });
    }
});