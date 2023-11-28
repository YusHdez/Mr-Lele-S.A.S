document.addEventListener('DOMContentLoaded', function() {
    // Recupera el nombre del usuario desde localStorage
    const nombreUsuario = localStorage.getItem('nombre');
  
    // Busca el elemento con el ID 'nombreUsuario' y actualiza su contenido
    const nombreUsuarioElement = document.getElementById('nombreUsuario');
    nombreUsuarioElement.textContent = `Bienvenido, ${nombreUsuario}`;
  
    // También, puedes actualizar el título (h1)
    const tituloUsuario = document.querySelector('.welcome-container h1');
    tituloUsuario.textContent = `Bienvenido, ${nombreUsuario}`;
  });