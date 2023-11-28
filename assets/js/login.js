document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const emailValue = document.getElementById('email').value;
      const contrasenaValue = document.getElementById('contrasena').value;
  
      const emailRegistrado = localStorage.getItem('email');
      const contrasenaRegistrada = localStorage.getItem('contrasena');
  
      if (emailValue === emailRegistrado && contrasenaValue === contrasenaRegistrada) {
        alert('Inicio de sesión exitoso');
        window.location.href ='http://127.0.0.1:5500/assets/views/usuario.html';
      } else {
        alert('Credenciales incorrectas');
      }
  
      loginForm.reset();
    });
  });