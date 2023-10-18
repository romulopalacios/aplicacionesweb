// Obtención de elementos del DOM (Document Object Model)
const btnSignin = document.getElementById("sign-in"); // Botón "Iniciar sesión"
const btnSignup = document.getElementById("sign-up"); // Botón "Registrarse"
const btnSigninBack = document.getElementById("btn-signin-back"); // Botón "Volver" en el formulario de inicio de sesión
const formRegister = document.querySelector(".register"); // Formulario de registro
const formLogin = document.querySelector(".login"); // Formulario de inicio de sesión

// Evento click para cambiar al formulario de inicio de sesión desde el de registro
btnSignin.addEventListener("click", (e) => {
  formRegister.classList.add("hide"); // Ocultar formulario de registro
  formLogin.classList.remove("hide"); // Mostrar formulario de inicio de sesión
});

// Evento click para cambiar al formulario de registro desde el de inicio de sesión
btnSignup.addEventListener("click", (e) => {
  formLogin.classList.add("hide"); // Ocultar formulario de inicio de sesión
  formRegister.classList.remove("hide"); // Mostrar formulario de registro
});

// Evento click para volver al formulario de inicio de sesión desde el de registro
btnSigninBack.addEventListener("click", (e) => {
  formLogin.classList.remove("hide"); // Mostrar formulario de inicio de sesión
  formRegister.classList.add("hide"); // Ocultar formulario de registro
});

// Función para redirigir a la página de inicio del dashboard
function redirectToDashboard() {
  window.location.href = "dashboard.html";
}

// Evento submit del formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue
    
    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aquí puedes agregar la lógica para el inicio de sesión, por ejemplo, enviar los datos al servidor
    console.log('Iniciar sesión con: ', email, password);
});
