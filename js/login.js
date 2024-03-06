const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const form = document.getElementById('signup-form'); 
const passwordInput = document.getElementById('contraseña');
const passwordStrength = document.getElementById('password-strength');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



// Primera función: Validar la longitud del nombre
function validarNombre() {
    const nombreInput = document.getElementById('nombre');
    return nombreInput.value.length > 3; // caracteres para nombre
}

// Segunda función: Calcular la fortaleza de la contraseña
function calcularFortalezaContraseña(password) {
    if (password.length < 6) {
        return { nivel: 'Débil', clase: 'debil' };
    } else if (password.length < 10) {
        return { nivel: 'Intermedia', clase: 'intermedio' };
    } else {
        return { nivel: 'Fuerte', clase: 'fuerte' };
    }
}

// función para actualizar el nivel de fortaleza de la contraseña mientras el usuario escribe
function actualizarFortalezaContraseña() {
    const password = passwordInput.value;
    const fortalezaContraseña = calcularFortalezaContraseña(password); // almacenando funcion para calcularcontraseña
    passwordStrength.textContent = 'Fortaleza de la contraseña: '; 
    const strengthText = document.createElement('span'); // creando span para que aparezca el nivel de contraseña
    strengthText.textContent = fortalezaContraseña.nivel;  // accediendo al nivel de contraseña
    strengthText.classList.add(fortalezaContraseña.clase); // agrendole los colores dependiendo del nivel de contra
    passwordStrength.appendChild(strengthText); // apprendchild para añadir el createElement
}

// funcion para formatear el formulario y mostrar mensaje de éxito

function registrarUsuario(event) {
    event.preventDefault();

    if (!validarNombre()) {
        alert('El nombre debe tener más de 3 caracteres.');
        return;
    }

    const email = document.getElementById('email').value; // capturando input del email
    const password = passwordInput.value; // capturando el input del password

    if (password === '') {
        alert('Ingrese una contraseña.');
        return;
    }

    setTimeout(() => {
        form.reset(); // reseteando formularia + alert de 1 segundo
        passwordStrength.textContent = ''; // reseteando el nivel de contraseña
        alert('Registrado con éxito.');
    }, 1000);
}

form.addEventListener('submit', registrarUsuario); // evento submit para cuando el usuario utilice el boton submit
passwordInput.addEventListener('input', actualizarFortalezaContraseña); // evento input para actualizar contraseña