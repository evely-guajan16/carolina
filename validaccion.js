function validarIngreso() {
      const usuario = document.getElementById('username').value.trim();
      const contrasena = document.getElementById('password').value.trim();
      const mensaje = document.getElementById('mensaje');

      if (usuario === '' || contrasena === '') {
        mensaje.style.color = 'orange';
        mensaje.textContent = "Por favor, complete todos los campos.";
      } else if (usuario === 'tutor5TO' && contrasena === '1234') {
        mensaje.style.color = 'lightgreen';
        mensaje.textContent = "¡Ingreso exitoso!";
        setTimeout(() => {
          window.location.href = 'simuladorquinto.html';
        }, 1500);
    }
    else if (usuario === 'tutor6to' && contrasena === '1234') {
            mensaje.style.color = 'lightgreen';
            mensaje.textContent = "¡Ingreso exitoso!";
            setTimeout(() => {
              window.location.href = 'preguntassexto.html';
            }, 1500);
      } else {
        mensaje.style.color = 'red';
        mensaje.textContent = "Usuario o contraseña incorrectos.";
      }
    }