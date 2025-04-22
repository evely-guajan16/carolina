document.addEventListener('DOMContentLoaded', () => {
  const nombreInput = document.getElementById('nombre');

  // Recuperar el nombre si está en localStorage
  const nombreGuardado = localStorage.getItem('nombreEstudiante');
  if (nombreGuardado) {
    nombreInput.value = nombreGuardado;
  }

  // Guardar nombre automáticamente al escribir
  nombreInput.addEventListener('input', () => {
    localStorage.setItem('nombreEstudiante', nombreInput.value.trim());
  });
});

// Función para calcular el puntaje
function calcularResultado() {
  const respuestasCorrectas = {
    p1: "b",p2: "a",p3: "b",p4: "b",p5: "a",p6: "a",p7: "b",p8: "b",p9: "a",p10: "a",
   
  };

  let puntaje = 0;

  for (let i = 1; i <= 10; i++) {
    const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
    if (respuesta && respuesta.value === respuestasCorrectas[`p${i}`]) {
      puntaje++;
    }
  }

  const nombre = document.getElementById("nombre").value.trim();

  if (!nombre) {
    alert("Por favor, ingrese su nombre antes de enviar las respuestas.");
    return;
  }

  alert(`${nombre}, tu puntaje es: ${puntaje}/10`);
}
let tiempo = 120;
  
    window.onload = () => {
      // Mostrar temporizador arriba del formulario
      const timer = document.createElement("p");
      timer.id = "temporizador";
      timer.style.fontWeight = "bold";
      timer.style.color = "red";
      document.body.insertBefore(timer, document.getElementById("quizForm"));
  
      const cuenta = setInterval(() => {
        const min = Math.floor(tiempo / 60);
        const seg = tiempo % 60;
        timer.textContent = `Tiempo restante: ${min}:${seg < 10 ? '0' : ''}${seg}`;
        tiempo--;
  
        if (tiempo < 0) {
          clearInterval(cuenta);
          calcularResultado();
          document.querySelectorAll("input").forEach(e => e.disabled = true);
          const boton = document.querySelector("button[onclick='calcularResultado()']");
          if (boton) {
            boton.disabled = true;
            boton.style.backgroundColor = "#ccc";
            boton.style.cursor = "not-allowed";
          }
        }
      }, 1000);
    };
