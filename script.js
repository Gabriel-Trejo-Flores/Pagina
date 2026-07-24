document.addEventListener('DOMContentLoaded', () => {
    // 1. LÓGICA DE MODO OSCURO
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️ Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☀️ Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Oscuro';
        }
        localStorage.setItem('theme', theme);
    });

    // 2. ENVÍO DEL FORMULARIO A WHATSAPP
    const whatsappForm = document.getElementById('whatsapp-form');
    
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const tamano = document.getElementById('tamano').value;
        const acabado = document.getElementById('acabado').value;
        const detalles = document.getElementById('detalles').value.trim();

        // Número de teléfono de la empresa (Ejemplo: 52 + 10 dígitos)
        const telefono = "525584303847"; 

        // Construcción del mensaje predeterminado
        let mensaje = `Hola *Decoraciones Iyami*, me gustaría cotizar un cuadro personalizado:\n\n`;
        mensaje += `📐 *Tamaño:* ${tamano}\n`;
        mensaje += `🖼️ *Acabado:* ${acabado}\n`;
        
        if (detalles !== "") {
            mensaje += `📝 *Detalles especiales:* ${detalles}\n`;
        }

        mensaje += `📷 *Nota:* Adjunto a continuación la foto de mi cuadro para la cotización.\n\n`;
        mensaje += `¿Me podrían dar informes sobre el costo total y tiempo de entrega?`;

        // Codificar el texto para URL y abrir WhatsApp
        const mensajeURLEncoded = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeURLEncoded}`;

        window.open(urlWhatsApp, '_blank');
    });
});