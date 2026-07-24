document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. LÓGICA DE TEMA (CLARO / OSCURO POR HORA Y BOTÓN)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');

    // 1. EVALUAR HORA DEL DÍA
    // De 7:00 AM (7) a 6:59 PM (18) = Modo Claro
    // De 7:00 PM (19) a 6:59 AM (6) = Modo Oscuro
    function aplicarTemaPorHora() {
        const horaActual = new Date().getHours(); 
        if (horaActual >= 19 || horaActual < 7) {
            document.body.classList.add('dark-theme');
            if (themeToggle) themeToggle.textContent = '☀️ Claro';
        } else {
            document.body.classList.remove('dark-theme');
            if (themeToggle) themeToggle.textContent = '🌙 Oscuro';
        }
    }

    // Ejecutar al cargar la página
    aplicarTemaPorHora();

    // 2. CAMBIO MANUAL AL HACER CLIC EN EL BOTÓN
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '☀️ Claro';
            } else {
                themeToggle.textContent = '🌙 Oscuro';
            }
        });
    }

    // ==========================================
    // 2. LÓGICA DEL COTIZADOR (WHATSAPP CON DETALLES)
    // ==========================================
    const whatsappForm = document.getElementById('whatsapp-form');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue al enviar

            // 1. Capturar los valores elegidos por el usuario
            const tamano = document.getElementById('tamano').value;
            const acabado = document.getElementById('acabado').value;
            const detallesInput = document.getElementById('detalles');
            const detalles = detallesInput ? detallesInput.value.trim() : '';

            // 2. Armar sección de detalles (incluye los detalles opcionales si existen)
            let textoDetalles = `*Detalles:*\n🖼️ Tamaño: ${tamano}\n✨ Acabado: ${acabado}`;
            
            if (detalles) {
                textoDetalles += `\n🔹 Detalles especiales: ${detalles}`;
            }

            // 3. Crear el mensaje dinámico
            const mensaje = `¡Hola! Vengo de su página web y me gustaría cotizar un cuadro.\n\n${textoDetalles}\n📌 Nota: Adjunto a continuación la foto de mi cuadro para la cotización.\n\n¿Me podrían dar más información?`;

            // 4. Número de teléfono con lada de México (52)
            const numeroTelefono = "525656402991"; 

            // 5. encodeURIComponent transforma automáticamente los emojis y saltos de línea (\n)
            const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;

            // 6. Abrir el chat en una pestaña nueva
            window.open(enlaceWhatsApp, '_blank');
        });
    }

});

// ==========================================
    // 3. MODAL / LIGHTBOX PARA AMPLIAR IMÁGENES
    // ==========================================
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.querySelector('.modal-close');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    // Al hacer clic en cualquier imagen de la galería, se abre en pantalla completa
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            if (modal && modalImg) {
                modal.style.display = 'block';
                modalImg.src = img.src;
            }
        });
    });

    // Cerrar al dar clic en la 'X'
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Cerrar al dar clic en cualquier parte fuera de la imagen
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }