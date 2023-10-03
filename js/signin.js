function  handleFormularioInicioSesionSubmit(event){
    event.preventDefault();
    var nombre = document.querySelector('#txtNombre')
    var usuario = document.querySelector('#txtUsuario').value;
    var password = document.querySelector('#txtPassword').value;
    var confirmPassword = document.querySelector('txtConfirmarPassword').value;
    if(nombre===''||usuario===''||confirmPassword===''||password===''){
        window.alert('Necesitas llenar los campos');
      
    }
    else{
        window.alert('Ya te has registrado');
        
    console.log("Nombre: ",nombre, "Usuario: ", usuario, "   Contraseña: ", password);
    }

}



document
    .querySelector('#formulario-inicio-sesion')
    .addEventListener('submit', handleFormularioInicioSesionSubmit);


    