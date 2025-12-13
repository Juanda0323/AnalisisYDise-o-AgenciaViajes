# BRVO TOURS - Agencia de Viajes Web

Bienvenido a BRVO TOURS, una aplicación web moderna para una agencia de viajes.

## 📋 Características

- **Página Principal Completa** con secciones para destinos, paquetes y testimonios
- **Diseño Responsivo** que se adapta a todos los dispositivos (desktop, tablet, móvil)
- **Interfaz Intuitiva** y fácil de navegar
- **Secciones Incluidas:**
  - Navegación sticky con menú responsivo
  - Hero section con llamada a la acción
  - Características/Ventajas de BRVO TOURS
  - Galería de destinos populares
  - Paquetes especiales con precios
  - Testimonios de clientes
  - Suscripción a newsletter
  - Formulario de contacto
  - Footer con redes sociales

## 🚀 Inicio Rápido

### Opción 1: Abrir en el navegador directamente
1. Abre el archivo `index.html` en tu navegador web
2. Disfruta de la página principal de BRVO TOURS

### Opción 2: Usar un servidor local (recomendado)

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Con Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

Luego accede a `http://localhost:8000` en tu navegador.

## 📁 Estructura del Proyecto

```
AgenciaViajes/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos CSS
├── js/
│   └── main.js        # Funcionalidades JavaScript
└── README.md          # Este archivo
```

## 🎨 Personalización

### Colores
Los colores principales están definidos como variables CSS en `css/styles.css`. Puedes modificarlos en la sección de variables:

```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --secondary-color: #1e40af;    /* Azul secundario */
    --accent-color: #f59e0b;       /* Naranja acento */
    /* ... más variables */
}
```

### Contenido
Para actualizar la información de la agencia:

1. **Nombre y Logo** - Edita en la navbar (`<div class="navbar-brand">`)
2. **Destinos** - Actualiza la sección `#destinos` en `index.html`
3. **Paquetes** - Modifica la sección `#paquetes` con tus paquetes
4. **Contacto** - Actualiza teléfono, email y ubicación en la sección `#contacto`
5. **Redes Sociales** - Agrega tus enlaces en el footer

## 🔧 Funcionalidades JavaScript

- **Menú móvil responsivo** - Se adapta automáticamente en dispositivos pequeños
- **Smooth scroll** - Navegación suave a las secciones
- **Formulario de contacto** - Con validación básica
- **Suscripción a newsletter** - Captura emails de clientes interesados
- **Notificaciones** - Mensajes de éxito y confirmación
- **Animaciones** - Efectos visuales al hacer scroll
- **Parallax** - Efecto de profundidad en la sección hero

## 📱 Responsive Design

La página está optimizada para:
- 📱 Teléfonos (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎯 Secciones de la Página

### 1. Navegación
- Logo y nombre de la agencia
- Menú con enlaces a secciones
- Botón "Reservar Ahora"
- Menú hamburguesa en móvil

### 2. Hero Section
- Imagen de fondo atractiva
- Título llamativo
- Botón para explorar destinos

### 3. Características
- 4 tarjetas con iconos
- Ventajas de BRVO TOURS
- Diseño grid responsivo

### 4. Destinos Populares
- 6 destinos con imágenes
- Ratings y descripción
- Efectos hover animados

### 5. Paquetes Especiales
- 3 paquetes con diferentes temas
- Detalles de qué incluye cada paquete
- Precios y duración
- Botones de reserva

### 6. Testimonios
- Opiniones de clientes reales (simuladas)
- Calificaciones en estrellas
- Fotos de perfil

### 7. Newsletter
- Suscripción a correos especiales
- Diseño llamativo

### 8. Contacto
- Información de contacto múltiple
- Formulario de contacto
- Horarios de atención

### 9. Footer
- Enlaces rápidos
- Políticas y términos
- Redes sociales
- Certificados

## 🔐 Seguridad y Validación

Los formularios incluyen:
- Validación HTML5
- Campos requeridos
- Mensajes de confirmación
- Protección contra envíos vacíos

## 🌐 Recursos Externos

La página utiliza:
- **Font Awesome 6.4.0** para iconos
- **Google Fonts** (integrado en CSS)
- **Unsplash** para imágenes de ejemplo

## 📝 Próximas Mejoras Recomendadas

1. Integrar con un backend para procesamiento de formularios
2. Agregar sistema de pago/reservas
3. Implementar galería de fotos interactiva
4. Agregar mapas de destinos
5. Blog de viajes y experiencias
6. Sistema de usuarios y perfiles
7. Chat en vivo para soporte
8. Base de datos para gestionar paquetes

## 💡 Tips

- Las imágenes están cargadas desde Unsplash (imágenes de libre uso)
- Reemplaza los enlaces de contacto con tus propios datos
- Personaliza los destinos y paquetes según tu agencia
- Considera agregar un sitio SSL en producción

## 📞 Contacto de Soporte

Para dudas sobre personalización, contacta con el equipo de desarrollo.

---

**BRVO TOURS** © 2025 - Todos los derechos reservados.
