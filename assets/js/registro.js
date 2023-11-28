document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombreValue = document.getElementById('nombre').value;
        const apellidoValue = document.getElementById('apellido').value;
        const emailValue = document.getElementById('email').value;
        const contrasenaValue = document.getElementById('contrasena').value;
        const generoValue = document.getElementById('genero').value;

        localStorage.setItem('nombre', nombreValue);
        localStorage.setItem('apellido', apellidoValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('contrasena', contrasenaValue);
        localStorage.setItem('genero', generoValue);

        alert('Registro exitoso');
        registerForm.reset();

        window.location.href ='http://127.0.0.1:5500/assets/views/login1.html';
    });
});
