document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DE TEMA (CLARO / OSCURO)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');

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

    aplicarTemaPorHora();

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

    // ==========================================
    // 2. LÓGICA DEL COTIZADOR (WHATSAPP)
    // ==========================================
    const whatsappForm = document.getElementById('whatsapp-form');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue al enviar

            // 1. Capturar los valores que eligió el usuario
            const tamano = document.getElementById('tamano').value;
            const acabado = document.getElementById('acabado').value;

            // 2. Número de teléfono de tu cliente (Pon el número real aquí)
            // IMPORTANTE: Debe llevar el código de país (ej. 52 para México) sin el signo "+"
            const numeroTelefono = "525584303847"; 

            // 3. Crear el mensaje que le llegará a tu cliente
            const mensaje = `¡Hola! Vengo de su página web y me gustaría cotizar un cuadro.%0A%0A*Detalles:*%0A🖼️ Tamaño: ${tamano}%0A✨ Acabado: ${acabado}%0A%0A¿Me podrían dar más información?`;

            // 4. Armar el enlace oficial de WhatsApp API
            const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;

            // 5. Abrir el chat en una pestaña nueva
            window.open(enlaceWhatsApp, '_blank');
        });
    }

});