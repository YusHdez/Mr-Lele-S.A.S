document.addEventListener('DOMContentLoaded', function () {
    const cerrarSesionButton = document.getElementById('cerrarSesion');
  
    if (cerrarSesionButton) {
      cerrarSesionButton.addEventListener('click', function () {
        if (confirm('¿Desea cerrar sesión?')) {
          // Elimina los datos del usuario y el estado de inicio de sesión del localStorage
          localStorage.removeItem('usuario');
          localStorage.removeItem('isLoggedIn');
  
          // Redirige al usuario a la página de inicio
          window.location.href = 'http://127.0.0.1:5500/index.html'; 
        }
      });
    }
  });