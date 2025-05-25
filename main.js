// Importamos Zod
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const registerSchema = z.object({
      // Define que el nombre debe ser una cadena no vacía.
      name: z.string().nonempty("Por favor, escriba un nombre es necesario"),

      // Valida que el correo tenga el formato correcto.
      email: z.string().email("Por favor, introduzca un correo válido"),

      // La contraseña debe tener al menos 6 caracteres.
      password: z.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/, "La contraseña debe incluir mayúscula, minúscula, número y símbolo."),

    });
    
//DOM
document.addEventListener("DOMContentLoaded", () =>{
     document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        // Usa el método correcto de Zod para validar el esquema. registerSchema.___?___(formData);
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
        document.getElementById("errors").textContent = ""; // Limpia errores previos
      } catch (error) {
        
        // Muestra los mensajes de error en la página.
        if (error.errors) {
          document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
        } else {
          document.getElementById("errors").textContent = "Error desconocido.";
        }
      
    }
    });

});

   