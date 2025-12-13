// Menú móvil toggle
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// Validar y manejar formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const nombre = contactForm.querySelector('input[placeholder="Tu nombre"]').value;
        
        // Simular envío del formulario
        console.log('Formulario enviado:', {
            nombre: nombre,
            email: contactForm.querySelector('input[placeholder="Tu email"]').value,
            mensaje: contactForm.querySelector('textarea').value
        });
        
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado exitosamente! Nos contactaremos pronto.', 'success');
        contactForm.reset();
    });
}

// Validar y manejar formulario de newsletter
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simular suscripción
        console.log('Suscripción a newsletter:', email);
        
        // Mostrar mensaje de éxito
        showNotification('¡Gracias por suscribirte! Pronto recibirás ofertas especiales.', 'success');
        newsletterForm.reset();
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close">&times;</button>
    `;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Cerrar notificación al hacer clic en el botón
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Cerrar automáticamente después de 5 segundos
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;
    }
    
    .notification-close:hover {
        transform: scale(1.2);
    }
`;
document.head.appendChild(style);

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Agregar evento a botones "Reservar Ahora"
document.querySelectorAll('.btn-reservar, .btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        // Scroll a la sección de contacto
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efecto parallax en hero (opcional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Animación de números en la sección de características
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.feature-card, .destino-card, .paquete-card, .testimonio-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Cambiar estilo de navbar al hacer scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Función para mostrar galería de destinos (expandible)
document.querySelectorAll('.destino-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        console.log('Destino seleccionado:', title);
        // Aquí puedes agregar lógica para mostrar más detalles del destino
    });
});

// Contador de viajeros (simulado)
document.addEventListener('DOMContentLoaded', () => {
    console.log('BRVO TOURS - Aplicativo web cargado exitosamente');
    console.log('Bienvenido a tu agencia de viajes online');
});
