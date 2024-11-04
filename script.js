// Función para actualizar la hora y la fecha
function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES');
    const dateString = now.toLocaleDateString('es-ES');

    document.getElementById('time').textContent = `Hora: ${timeString}`;
    document.getElementById('date').textContent = `Fecha: ${dateString}`;
}

// Función para obtener la ubicación del usuario
function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Long ${longitude.toFixed(2)}`;
        }, () => {
            document.getElementById('location').textContent = 'Ubicación: No se pudo obtener la ubicación';
        });
    } else {
        document.getElementById('location').textContent = 'Ubicación: No disponible';
    }
}

// Actualizar hora y fecha cada segundo
setInterval(updateDateTime, 1000);

// Obtener la ubicación al cargar la página
window.onload = updateLocation;
